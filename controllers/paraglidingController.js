const { sendEmail, getFormattedUsd, applyDiscount } = require("../lib");
const { paraglidingBookingTemplate } = require("../lib/mail/templates");
const paraglidingBooking = require("../models/paragliding");
const ParaglidingNotification = require("../models/paraglidingNotificationModel");
const ParaglidingPrice = require("../models/paraglidingPricesModel");
const BookingService = require("../models/bookingServicesModel");
const Coupon = require("../models/couponModel");
const bookingService = require("../models/bookingServicesModel");
const { requestBogBooking, authBog } = require("../bog-api");
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
    const service = await BookingService.findOne({
      type: "paragliding",
      name: "Paragliding",
    });

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

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

    if (!gelPrice || !usdPrice) {
      console.error("Failed to calculate total prices");
      return res.status(500).json({
        message: "Error calculating total price",
      });
    }

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
        }
      }
    }

    const data = await authBog();
    const token = data.access_token;

    const currency = {
      usd: usdPrice,
      gel: gelPrice,
      discountUSD: discountedUsd ? Number(discountedUsd.toFixed(2)) : null,
      discountGEL: discountedGel ? Number(discountedGel.toFixed(2)) : null,
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

    const bookedService = await newBooking.save();

    const notification = await ParaglidingNotification.findOne();
    if (notification) {
      notification.set({ paraglidingNotification: true });
      await notification.save();
    }

    const dummyData = {
      callback_url: `https://api-ridegudauri-develop.vercel.app/api/paragliding/bookingstatus`,
      external_order_id: bookedService._id,
      buyer: {
        full_name: fullName,
        email,
        phone: number,
      },
      purchase_units: {
        currency: "GEL",
        total_amount: 50,
        basket: [
          {
            name: "Paragliding booking",
            quantity: participantsCount,
            unit_price: gelPrice,
            unit_discount_price: discountedGel
              ? Number(discountedGel.toFixed(2))
              : null,
            product_id: service._id,
          },
        ],
      },
    };

    const requestedBooking = await requestBogBooking(dummyData, token, "en");

    res.status(200).json(requestedBooking);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

exports.bookingStatus = async (req, res) => {
  try {
    const { body } = req.body;
    if (!body) return res.status(404).json({ message: "Something went wrong" });

    const { order_status, external_order_id, purchase_units, redirect_links } =
      body;

    const booking = await paraglidingBooking.findById(external_order_id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = order_status.key;
    booking.orderDetails = redirect_links.success;

    if (order_status.key === "completed") {
      booking.paidPrice = purchase_units.transfer_amount;

      await booking.save();

      const eamilBody = {
        from: process.env.GMAIL_USER,
        to: `${booking.email}`,
        subject: "Booking Confirmation",
        html: paraglidingBookingTemplate(booking),
      };

      const message =
        "Thank you for booking our service. Please check your email for further details.";

      const responseBody = {
        message,
        booking,
      };

      return sendEmail(eamilBody, res, responseBody);
    }
    await booking.save();

    res.status(200).json({
      message: "Booking status recieved and  updated successfully",
      booking,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
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
