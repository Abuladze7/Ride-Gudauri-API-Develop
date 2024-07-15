const mongoose = require("mongoose");
const { Schema } = mongoose;

const homepageCarouselImages = new Schema(
  {
    imgUrls: [String],
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model(
  "HomepageCarouselImages",
  homepageCarouselImages
);
