const mongoose = require("mongoose");
const { Schema } = mongoose;

const carouselImagesSchema = new Schema(
  {
    images: { type: [String], required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("OurStoryCarouselImages", carouselImagesSchema);
