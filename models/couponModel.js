const { Schema, model } = require("mongoose");

const couponSchema = new Schema(
  {
    name: { type: String, unique: true },
    skiLessonDiscount: { type: Number, default: 0 },
    snowboardDiscount: { type: Number, default: 0 },
    groupSkiLessonDiscount: { type: Number, default: 0 },
    groupSnowboardDiscount: { type: Number, default: 0 },
    paraglidingDiscount: { type: Number, default: 0 },
    transferToursDiscount: { type: Number, default: 0 },
    snowmobileDiscount: { type: Number, default: 0 },
    horseRidingDiscount: { type: Number, default: 0 },
    quadBikeDiscount: { type: Number, default: 0 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Coupon", couponSchema);
