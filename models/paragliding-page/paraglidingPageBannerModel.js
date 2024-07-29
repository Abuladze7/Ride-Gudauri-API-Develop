const mongoose = require("mongoose");
const { Schema } = mongoose;

const paraglidingBannerSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
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
