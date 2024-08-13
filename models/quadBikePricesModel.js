const { Schema, model } = require("mongoose");

const quadBikePricesSchema = new Schema(
  {
    quad_bike: { type: Number },
    buggy_2: { type: Number },
    buggy_3: { type: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("QuadBikePrices", quadBikePricesSchema);
