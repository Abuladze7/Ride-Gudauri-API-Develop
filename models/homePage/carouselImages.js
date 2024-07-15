const mongoose = require("mongoose");
const { Schema } = mongoose;

const homepageCarouselImages = new Schema(
  {
    images: { type: [String], required: true },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model(
  "HomepageCarouselImages",
  homepageCarouselImages
);
