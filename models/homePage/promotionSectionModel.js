const { Schema, model } = require("mongoose");

const homepagePromotionPopupSchema = new Schema(
  {
    title: { type: String },
    subtitle: { type: String },
    image: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
    isShow: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("HomepagePromotionPopup", homepagePromotionPopupSchema);
