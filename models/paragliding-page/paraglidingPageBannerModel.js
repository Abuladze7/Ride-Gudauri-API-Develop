const mongoose = require("mongoose");
const { Schema } = mongoose;

const paraglidingBannerSchema = new Schema(
  {
    subtitle: { type: String, required: true },
    images: [String],
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
