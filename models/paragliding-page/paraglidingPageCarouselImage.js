const mongoose = require("mongoose");
const { Schema } = mongoose;

const paraglidingPageCarouselImage = new Schema(
  {
    images: [String],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "ParaglidingPageCarouselImage",
  paraglidingPageCarouselImage
);
