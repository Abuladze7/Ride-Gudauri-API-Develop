const mongoose = require("mongoose");

const skischoolBookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
  lessonType: { type: String, required: true },
  additional: { type: String },
  age: { type: String },
  activityType: { type: String, required: true },
  experience: { type: String, required: true },
  groupMembers: { type: String },
  hours: { type: String },
  fromDate: { type: String },
  toDate: { type: String },
  fromHour: { type: String },
  toHour: { type: String },
  currency: { usd: Number, gel: Number },
  orderTime: { type: Date },
  location: { type: String },
});

module.exports = mongoose.model("skischoolBooking", skischoolBookingSchema);
