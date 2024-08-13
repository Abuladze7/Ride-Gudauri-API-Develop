const { Schema, model } = require("mongoose");

const horseRidingPricesSchema = new Schema(
  {
    minutes_15: { type: Number },
    minutes_30: { type: Number },
    hour: { type: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("HorseRidingPrices", horseRidingPricesSchema);
