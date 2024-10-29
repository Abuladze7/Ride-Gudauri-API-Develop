const mongoose = require("mongoose");
const { Schema } = mongoose;

const paraglidingBannerSchema = new Schema(
  {
    title: { type: String },
    subtitle: { type: String },
    images: [
      {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "ParaglidingPageBanner",
  paraglidingBannerSchema
);
