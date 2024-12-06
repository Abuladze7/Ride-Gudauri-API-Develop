const { sendEmail, getFormattedUsd } = require("../lib");
const {
  quadBikeBookingTemplate,
  horseRidingBookingTemplate,
  snowmobileBookingTemplate,
  transferAndToursBookingTemplate,
} = require("../lib/mail/templates");
const otheractivitiesBooking = require("../models/otherActivities");
const OtherActivitiesNotification = require("../models/otherActivitiesNotificationModel");
const QuadBikePrices = require("../models/quadBikePricesModel");
const HorseRidingPrices = require("../models/horseRidingPricesModel");
const SnowmobilePrices = require("../models/snowmobilePricesModel");
const TransferAndToursPrices = require("../models/transferAndToursPricesModel");
const BookingService = require("../models/bookingServicesModel");
const Coupon = require("../models/couponModel");
const path = require("path");
const { authBog, requestBogBooking } = require("../bog-api");

const priceModels = {
  "Quad Bike": {
    model: QuadBikePrices,
    selectors: {
      "Quad Bike": "quad_bike",
      "2 Person Buggy": "buggy_2",
      "3 Person Buggy": "buggy_3",
    },
  },
  "Horse Riding": {
    model: HorseRidingPrices,
    selectors: {
      "15 Mins": "minutes_15",
      "30 Mins": "minutes_30",
      "1 Hour": "hour",
    },
  },
  "Snow Mobile": {
    model: SnowmobilePrices,
    selectors: {
      "15 Mins": "minutes_15",
      "30 Mins": "minutes_30",
      "1 Hour": "hour",
    },
  },
  "Transfers and tours": {
    model: TransferAndToursPrices,
    selectors: {
      "Gudauri to Tbilisi Transfer": "gudauriToTbilisi",
      "Gudauri to Tbilisi Airport Transfer": "gudauriToTbilisiAirport",
      "Tbilisi Airport to Gudauri Transfer": "tbilisiAirportToGudauri",
      "Tbilisi Freedom Square to Gudauri Transfer":
        "tbilisiFreedomSquareToGudauri",
      "Gudauri to Kazbegi Tour": "gudauriToKazbegi",
      "Gudauri to Gergeti Excursion": "gudauriToGergeti",
      "Gudauri to Khada Exploration": "gudauriToKhada",
      "Transfer from Tbilisi to Kazbegi": "tbilisiToKazbegi",
      "Full day journey - Tour from Tbilisi to kazbegi":
        "fullDayTourTbilisiToKazbegi",
    },
  },
};

const getPrice = async (type, selector) => {
  const priceData = priceModels[type];
  if (!priceData) throw new Error("Invalid type");

  const { model, selectors } = priceData;
  const priceField = selectors[selector];
  if (!priceField) throw new Error("Invalid selector");

  const prices = await model.findOne();
  if (!prices) throw new Error("Prices not found");

  return prices[priceField];
};

function generateEmailTemplate(type, data) {
  switch (type) {
    case "Quad Bike":
      return quadBikeBookingTemplate(data);
    case "Horse Riding":
      return horseRidingBookingTemplate(data);
    case "Snow Mobile":
      return snowmobileBookingTemplate(data);
    default:
      return transferAndToursBookingTemplate(data);
  }
}

exports.createOtheractivitiesBooking = async (req, res) => {
  try {
    const {
      fullName,
      email,
      number,
      type,
      selector,
      participants,
      couponCode,
    } = req.body;

    if (!type || !selector || !participants) {
      return res.status(400).json({
        message: "type, selector, and participants are required",
      });
    }

    const service = await BookingService.findOne({
      name: type,
      type: "other",
    });

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    // Calculate base price in GEL
    const basePrice = await getPrice(type, selector);
    if (!basePrice) {
      return res.status(400).json({ message: "Invalid selector or type" });
    }

    let totalPriceInGel =
      type === "Transfers and tours"
        ? basePrice
        : basePrice * parseInt(participants, 10);

    let discountedPriceInGel = null;

    // Apply coupon if provided and valid
    if (couponCode) {
      const coupon = await Coupon.findOne({
        name: couponCode.toUpperCase(),
      });

      if (coupon && new Date(coupon.expire) > new Date()) {
        const discountFieldMap = {
          "Quad Bike": "quadBikeDiscount",
          "Horse Riding": "horseRidingDiscount",
          "Snow Mobile": "snowmobileDiscount",
          "Transfers and tours": "transferToursDiscount",
        };

        const discountField = discountFieldMap[type];
        const discountRate = coupon[discountField] / 100 || 0;

        if (discountRate > 0) {
          discountedPriceInGel = totalPriceInGel * (1 - discountRate);
        }
      }
    }

    // Convert prices to USD
    const totalPriceInUsd = await getFormattedUsd(totalPriceInGel);
    const discountedPriceInUsd = discountedPriceInGel
      ? await getFormattedUsd(discountedPriceInGel)
      : null;

    const data = await authBog();
    const token = data.access_token;

    // Currency object
    const currency = {
      usd: Number(totalPriceInUsd.toFixed(2)),
      gel: Number(totalPriceInGel.toFixed(2)),
      discountUSD: discountedPriceInUsd
        ? Number(discountedPriceInUsd.toFixed(2))
        : null,
      discountGEL: discountedPriceInGel
        ? Number(discountedPriceInGel.toFixed(2))
        : null,
    };

    // Save booking
    const newBooking = new otheractivitiesBooking({
      ...req.body,
      currency,
      orderTime: new Date(),
    });

    const bookedService = await newBooking.save();

    // Update notification
    const notification = await OtherActivitiesNotification.findOne();
    if (notification) {
      notification.set({ otherActivitiesNotification: true });
      await notification.save();
    }

    const dummyData = {
      // callback_url: "https://webhook.site/2818a018-dfb0-4084-ad30-e6c02fe9b296",
      callback_url: `https://api-ridegudauri-develop.vercel.app/api/otheractivities/bookingstatus`,
      external_order_id: bookedService._id,
      buyer: {
        full_name: fullName,
        email,
        phone: number,
      },
      purchase_units: {
        currency: "GEL",
        total_amount: 0.5,
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
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.bookingStatus = async (req, res) => {
  try {
    const { body } = req.body;
    if (!body) return res.status(404).json({ message: "Something went wrong" });

    const { order_status, external_order_id, purchase_units, redirect_links } =
      body;

    const booking = await otheractivitiesBooking.findById(external_order_id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    booking.status = order_status.key;
    booking.orderDetails = redirect_links.success;

    if (order_status.key === "completed") {
      booking.paidPrice = purchase_units.transfer_amount;

      await booking.save();

      const emailTemplate = generateEmailTemplate(booking.type, booking);

      const emailBody = {
        frin: process.env.GMAIL_USER,
        to: booking.email,
        subject: "Booking Status Update",
        html: emailTemplate,
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
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

exports.getOtheractivitiesBooking = async (req, res) => {
  try {
    const bookings = await otheractivitiesBooking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOtheractivitiesBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const updateData = req.body;
    const options = { new: true, runValidators: true };

    const updatedBooking = await otheractivitiesBooking.findByIdAndUpdate(
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

exports.deleteOtheractivitiesBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;

    const deletedBooking = await otheractivitiesBooking.findByIdAndDelete(
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
