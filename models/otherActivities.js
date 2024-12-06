const mongoose = require("mongoose");

const otheractivitiesBookingSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    fullName: { type: String, required: true },
    number: { type: String, required: true },
    email: { type: String, required: true },
    participants: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    selector: { type: String },
    currency: {
      usd: Number,
      gel: Number,
      discountUSD: { type: Number, default: null },
      discountGEL: { type: Number, default: null },
    },
    paidPrice: { type: Number, default: null },
    orderTime: { type: Date },
    orderTime: { type: Date },
    additionalDetails: { type: String },
    status: { type: String, default: "pending" },
    orderDetails: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "otheractivitiesBooking",
  otheractivitiesBookingSchema
);
