const mongoose = require("mongoose");

const paraglidingBookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  participants: { type: String, required: true },
  currency: {
    usd: Number,
    gel: Number,
  },
  orderTime: { type: Date, default: Date.now },
  additionalDetails: { type: String },
});

module.exports = mongoose.model("paraglidingBooking", paraglidingBookingSchema);
