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
const Coupon = require("../models/couponModel");
const path = require("path");

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

exports.createOtheractivitiesBooking = async (req, res) => {
  try {
    const { email, type, selector, participants, couponCode } = req.body;

    let basePrice = await getPrice(type, selector);
    let totalGel = basePrice * Number(participants);

    if (couponCode) {
      const coupon = await Coupon.findOne({ name: couponCode.toUpperCase() });
      if (coupon) {
        const discountFieldMap = {
          "Quad Bike": "quadBikeDiscount",
          "Horse Riding": "horseRidingDiscount",
          "Snow Mobile": "snowmobileDiscount",
          "Transfers and tours": "transferToursDiscount",
        };

        const discountField = discountFieldMap[type];
        const discountPercent = coupon[discountField] || 0;
        totalGel -= (totalGel * discountPercent) / 100;
      }
    }

    const totalUsd = await getFormattedUsd(totalGel);
    console.log(totalGel, totalUsd);

    const currency = {
      gel: totalGel,
      usd: totalUsd,
    };

    const newBooking = new otheractivitiesBooking({
      ...req.body,
      currency,
    });

    const notification = await OtherActivitiesNotification.findOne();
    notification.set({ otherActivitiesNotification: true });
    await notification.save();

    const templateRenderer = () => {
      if (type === "Quad Bike")
        return quadBikeBookingTemplate({ ...req.body, currency });
      if (type === "Horse Riding")
        return horseRidingBookingTemplate({ ...req.body, currency });
      if (type === "Snow Mobile")
        return snowmobileBookingTemplate({ ...req.body, currency });
      return transferAndToursBookingTemplate({ ...req.body, currency });
    };

    const body = {
      from: process.env.GMAIL_USER,
      to: `${email}`,
      subject: "Booking Confirmation",
      html: templateRenderer(),
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

    sendEmail(
      body,
      res,
      "Thank you for booking our service. Please check your email."
    );
  } catch (err) {
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
