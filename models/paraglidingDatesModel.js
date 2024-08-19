const { Schema, model } = require("mongoose");

const paraglidingDateSchema = new Schema(
  {
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    dayOff: { type: Date },
  },
  {
    versionKey: false,
  }
);

module.exports = model("ParaglidingDates", paraglidingDateSchema);
