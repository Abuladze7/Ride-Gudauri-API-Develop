const { convertToSnakeCase, getFormattedUsd, sendEmail } = require("../lib");
const skischoolBooking = require("../models/skischool");
const SkiSchoolNotification = require("../models/skiSchoolNotificationModel");
const IndividualSkiLessonPrices = require("../models/individualSkiLessonPricesModel");
const IndividualSnowboardPrices = require("../models/individualSnowboardPricesModel");
const GroupSkiLessonPrices = require("../models/groupSkiLessonPricesModel");
const GroupSnowboardPrices = require("../models/groupSnowboardPricesModel");
const Coupon = require("../models/couponModel");
const { authBog, requestBogBooking } = require("../bog-api");
const BookingService = require("../models/bookingServicesModel");
const {
  skiLessonBookingTemplate,
  snowboardLessonBookingTemplate,
} = require("../lib/mail/templates");

exports.createskischoolBooking = async (req, res) => {
  try {
    const {
      name,
      email,
      number,
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

    const service = await BookingService.findOne({
      type: lessonType.toLowerCase(),
      name: activityType,
    });

    if (!service) return res.status(404).json({ message: "Service not found" });

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

    // Check if prices document exists
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

    // Define February 1 to 20 range
    const FEB_START = new Date(startDay.getFullYear(), 1, 1); // February 1
    const FEB_END = new Date(endDay.getFullYear(), 1, 20); // February 20

    // Calculate overlapping days with February 1-20
    const overlapStart = Math.max(startDay, FEB_START);
    const overlapEnd = Math.min(endDay, FEB_END);

    const overlappingDays =
      overlapStart <= overlapEnd
        ? (new Date(overlapEnd) - new Date(overlapStart)) /
            (1000 * 60 * 60 * 24) +
          1
        : 0;

    const nonOverlappingDays = differencesInDays - overlappingDays;

    // Calculate total price
    totalPriceInGel =
      lessonType === "Individual"
        ? basePrice * overlappingDays * 1.2 + basePrice * nonOverlappingDays
        : basePrice * parseInt(groupMembers, 10) * overlappingDays * 1.2 +
          basePrice * parseInt(groupMembers, 10) * nonOverlappingDays;

    let discountedPriceInGel = null;

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
          discountedPriceInGel =
            totalPriceInGel - totalPriceInGel * discountRate;
        }
      }
    }

    // Convert to USD
    const totalPriceInUsd = await getFormattedUsd(totalPriceInGel);
    const discountedPriceInUsd = discountedPriceInGel
      ? await getFormattedUsd(discountedPriceInGel)
      : null;

    // Fallback to prevent undefined currency
    if (!totalPriceInGel || !totalPriceInUsd) {
      console.error("Failed to calculate total prices");
      return res
        .status(500)
        .json({ message: "Error calculating total prices" });
    }

    const data = await authBog();
    const token = data.access_token;

    const currency = {
      usd: totalPriceInUsd,
      gel: totalPriceInGel,
      discountUSD: discountedPriceInUsd
        ? Number(discountedPriceInUsd.toFixed(2))
        : null,
      discountGEL: discountedPriceInGel
        ? Number(discountedPriceInGel.toFixed(2))
        : null,
    };

    // Save booking
    const newBooking = new skischoolBooking({
      ...req.body,
      currency,
      orderTime: new Date(),
    });
    const bookedService = await newBooking.save();

    // Update notification
    const notification = await SkiSchoolNotification.findOne();
    if (notification) {
      notification.set({ skiNotification: true });
      await notification.save();
    }

    const dummyData = {
      callback_url: `https://api-ridegudauri-develop.vercel.app/api/skischool/bookingstatus`,
      external_order_id: bookedService._id,
      buyer: {
        full_name: name,
        email: email,
        phone: number,
      },
      purchase_units: {
        currency: "GEL",
        total_amount: discountedPriceInGel
          ? Number((Number(discountedPriceInGel.toFixed(2)) * 0.2).toFixed(2))
          : Number((totalPriceInGel * 0.2).toFixed(2)),
        basket: [
          {
            quantity: 1,
            unit_price: totalPriceInGel,
            unit_discount_price: discountedPriceInGel
              ? Number(discountedPriceInGel.toFixed(2))
              : null,
            product_id: service._id,
          },
        ],
      },
    };

    const requestedBooking = await requestBogBooking(dummyData, token, "en");

    res.status(200).json(requestedBooking);
  } catch (err) {
    console.error(err); // Improved error logging
    res.status(500).json({ error: err.message });
  }
};

exports.bookingStatus = async (req, res) => {
  try {
    const { body } = req.body;
    if (!body) return res.status(404).json({ message: "Something went wrong" });

    const { order_status, external_order_id, purchase_units, redirect_links } =
      body;

    const booking = await skischoolBooking.findById(external_order_id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = order_status.key;
    booking.orderDetails = redirect_links.success;

    if (order_status.key === "completed") {
      booking.paidPrice = purchase_units.transfer_amount;

      await booking.save();

      const emailBody = {
        from: process.env.GMAIL_USER,
        to: booking.email,
        subject: "Booking Confirmation",
        html:
          booking.activityType === "Snowboard Lesson"
            ? snowboardLessonBookingTemplate(booking)
            : skiLessonBookingTemplate(booking),
      };

      const message =
        "Thank you for booking our service. Please check your email for further details.";

      const responseBody = {
        message,
        booking,
      };
      return sendEmail(emailBody, res, responseBody);
    }

    await booking.save();

    res.status(200).json({
      message: "Booking status recieved and  updated successfully",
      booking,
    });
  } catch (err) {
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
