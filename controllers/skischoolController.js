const { sendEmail, convertToSnakeCase, getFormattedUsd } = require("../lib");
const {
  skiLessonBookingTemplate,
  snowboardLessonBookingTemplate,
} = require("../lib/mail/templates");
const skischoolBooking = require("../models/skischool");
const path = require("path");
const SkiSchoolNotification = require("../models/skiSchoolNotificationModel");
const IndividualSkiLessonPrices = require("../models/individualSkiLessonPricesModel");
const IndividualSnowboardPrices = require("../models/individualSnowboardPricesModel");
const GroupSkiLessonPrices = require("../models/groupSkiLessonPricesModel");
const GroupSnowboardPrices = require("../models/groupSnowboardPricesModel");
const Coupon = require("../models/couponModel");

exports.createskischoolBooking = async (req, res) => {
  try {
    const {
      email,
      lessonType,
      activityType,
      fromDate,
      toDate,
      hours,
      groupMembers,
      coupon,
    } = req.body;

    if (!fromDate || !toDate || !hours || !lessonType || !activityType) {
      return res.status(400).json({
        message:
          "fromDate, toDate, hours, lessonType, and activityType are required",
      });
    }

    const startDay = new Date(fromDate);
    const endDay = new Date(toDate);

    if (startDay > endDay) {
      return res.status(400).json({ message: "Invalid date range" });
    }

    const differencesInDays = (endDay - startDay) / (1000 * 60 * 60 * 24) + 1;

    let basePrice = 0;
    let totalPriceInGel = 0;

    // Fetch prices based on lessonType and activityType
    let prices;
    if (lessonType === "Individual") {
      prices =
        activityType === "Ski Lesson"
          ? await IndividualSkiLessonPrices.findOne()
          : await IndividualSnowboardPrices.findOne();
    } else if (lessonType === "Group") {
      if (!groupMembers) {
        return res
          .status(400)
          .json({ message: "groupMembers is required for group lessons" });
      }

      const groupSize = parseInt(groupMembers, 10);
      if (isNaN(groupSize) || groupSize < 2 || groupSize > 5) {
        return res
          .status(400)
          .json({ message: "groupMembers must be a number between 2 and 5" });
      }

      prices =
        activityType === "Ski Lesson"
          ? await GroupSkiLessonPrices.findOne()
          : await GroupSnowboardPrices.findOne();
    } else {
      return res.status(400).json({ message: "Invalid lessonType" });
    }

    // Debugging: Check if prices document exists
    if (!prices) {
      console.error(`Prices document not found for ${activityType}`);
      return res
        .status(404)
        .json({ message: `${activityType} prices not found` });
    }

    const durationKey = convertToSnakeCase(hours);

    basePrice = prices[durationKey];
    if (!basePrice) {
      console.error(`Invalid hours duration: ${hours}`);
      return res.status(400).json({ message: "Invalid hours duration" });
    }

    // Calculate total price
    totalPriceInGel =
      lessonType === "Individual"
        ? basePrice * differencesInDays
        : basePrice * parseInt(groupMembers, 10) * differencesInDays;

    // Apply coupon if valid
    if (coupon) {
      const discountCoupon = await Coupon.findOne({
        name: coupon.toUpperCase(),
      });

      if (discountCoupon) {
        const isExpired = new Date(discountCoupon.expire) < new Date();
        const discountRate =
          lessonType === "Group"
            ? discountCoupon.groupSkiLessonDiscount / 100
            : discountCoupon.skiLessonDiscount / 100;

        if (!isExpired && discountRate > 0) {
          totalPriceInGel -= totalPriceInGel * discountRate;
        }
      }
    }

    // Convert to USD
    const totalPriceInUsd = await getFormattedUsd(totalPriceInGel);

    // Fallback to prevent undefined currency
    if (!totalPriceInGel || !totalPriceInUsd) {
      console.error("Failed to calculate total prices");
      return res
        .status(500)
        .json({ message: "Error calculating total prices" });
    }

    // Save booking
    const newBooking = new skischoolBooking({
      ...req.body,
      currency: {
        usd: totalPriceInUsd,
        gel: totalPriceInGel,
      },
      orderTime: new Date(),
    });
    await newBooking.save();

    // Update notification
    const notification = await SkiSchoolNotification.findOne();
    if (notification) {
      notification.set({ skiNotification: true });
      await notification.save();
    }

    // Send email
    const body = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Booking Confirmation",
      html:
        activityType === "Snowboard Lesson"
          ? snowboardLessonBookingTemplate({
              ...req.body,
              currency: {
                usd: totalPriceInUsd,
                gel: totalPriceInGel,
              },
            })
          : skiLessonBookingTemplate({
              ...req.body,
              currency: {
                usd: totalPriceInUsd,
                gel: totalPriceInGel,
              },
            }),
      attachments: [
        {
          filename: "AccountDetail.pdf",
          path: path.join(
            __dirname,
            "../lib/mail/attachments/AccountDetail.pdf"
          ),
        },
      ],
    };

    const message =
      "Thank you for booking our service. Please check your email for further details.";
    sendEmail(body, res, message);
  } catch (err) {
    console.error(err); // Improved error logging
    res.status(500).json({ error: err.message });
  }
};

exports.getskischoolBooking = async (req, res) => {
  try {
    const bookings = await skischoolBooking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSkischoolBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const updateData = req.body;
    const updatedBooking = await skischoolBooking.findByIdAndUpdate(
      bookingId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json(updatedBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSkischoolBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;

    const deletedBooking = await skischoolBooking.findByIdAndDelete(bookingId);

    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "Booking successfully deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
