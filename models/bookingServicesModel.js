const { Schema, model } = require("mongoose");

const bookingServiceSchema = new Schema(
  {
    name: { type: String },
    type: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const bookingService = model("BookingService", bookingServiceSchema);

module.exports = bookingService;
