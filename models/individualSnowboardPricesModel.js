const { Schema, model } = require("mongoose");

const individualSnowboardPricesSchema = new Schema(
  {
    one_hour: { type: Number },
    two_hours: { type: Number },
    three_hours: { type: Number },
    full_day: { type: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model(
  "IndividualSnowboardPrices",
  individualSnowboardPricesSchema
);
