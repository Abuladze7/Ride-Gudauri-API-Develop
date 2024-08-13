const { Schema, model } = require("mongoose");

const snowmobilePricesSchema = new Schema(
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

module.exports = model("SnowmobilePrices", snowmobilePricesSchema);
