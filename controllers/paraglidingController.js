const { sendEmail, getFormattedUsd, applyDiscount } = require("../lib");
const { paraglidingBookingTemplate } = require("../lib/mail/templates");
const paraglidingBooking = require("../models/paragliding");
const ParaglidingNotification = require("../models/paraglidingNotificationModel");
const ParaglidingPrice = require("../models/paraglidingPricesModel");
const path = require("path");
const Coupon = require("../models/couponModel");
exports.createParaglidingBooking = async (req, res) => {
  try {
    const {
      fullName,
      email,
      number,
      date,
      time,
      participants,
      additionalDetails,
      coupon, // Added coupon to handle discount
    } = req.body;

    const priceData = await ParaglidingPrice.findOne();
    if (!priceData) {
      return res.status(404).json({ message: "Price data not found" });
    }

    const participantsCount = parseInt(participants, 10);
    if (
      isNaN(participantsCount) ||
      participantsCount <= 0 ||
      participantsCount > 50
    ) {
      return res
        .status(400)
        .json({ message: "Invalid number of participants" });
    }

    const gelPrice = priceData.paragliding * participantsCount;
    let usdPrice = await getFormattedUsd(gelPrice);

    let discountedGel = null;
    let discountedUsd = null;

    if (coupon) {
      const discount = await Coupon.findOne({ name: coupon });

      if (discount) {
        const discountExpireDate = new Date(discount.expire);

        if (discountExpireDate > Date.now()) {
          const discountPrice = applyDiscount(
            priceData,
            discount.paraglidingDiscount
          );
          discountedGel = discountPrice.paragliding * participantsCount;
          discountedUsd = await getFormattedUsd(discountedGel);
        } else {
          return res.status(400).json({ message: "Coupon has expired" });
        }
      } else {
        return res.status(404).json({ message: "Invalid coupon" });
      }
    }

    const currency = {
      usd: discountedUsd || usdPrice, // Use discounted USD if available
      gel: discountedGel || gelPrice, // Use discounted GEL if available
    };

    const newBooking = new paraglidingBooking({
      fullName,
      email,
      number,
      date,
      time,
      participants: participantsCount,
      currency,
      additionalDetails,
    });

    const body = {
      from: process.env.GMAIL_USER,
      to: `${email}`,
      subject: "Booking Confirmation",
      html: paraglidingBookingTemplate({ ...req.body, currency }),
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

    await newBooking.save();

    const notification = await ParaglidingNotification.findOne();
    if (notification) {
      notification.set({ paraglidingNotification: true });
      await notification.save();
    }
    const message =
      "Thank you for booking our service. Please check your email";

    sendEmail(body, res, { message });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getParaglidingBooking = async (req, res) => {
  try {
    const bookings = await paraglidingBooking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateParaglidingBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const updateData = req.body;
    const options = { new: true, runValidators: true };

    const updatedBooking = await paraglidingBooking.findByIdAndUpdate(
      bookingId,
      updateData,
      options
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json(updatedBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteParaglidingBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;

    const deletedBooking = await paraglidingBooking.findByIdAndDelete(
      bookingId
    );

    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "Booking successfully deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
