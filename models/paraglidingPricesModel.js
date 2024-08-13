const { Schema, model } = require("mongoose");

const paraglidingPricesSchema = new Schema(
  {
    paragliding: { type: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("ParaglidingPrice", paraglidingPricesSchema);
