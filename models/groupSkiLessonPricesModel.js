const { Schema, model } = require("mongoose");

const groupSkiLessonPricesSchema = new Schema(
  {
    two_hours: { type: Number },
    three_hours: { type: Number },
    four_hours: { type: Number },
    full_day: { type: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("GroupSkiLessonPrices", groupSkiLessonPricesSchema);
