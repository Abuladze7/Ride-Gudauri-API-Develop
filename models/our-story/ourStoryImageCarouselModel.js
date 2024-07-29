const mongoose = require("mongoose");
const { Schema } = mongoose;

const carouselImagesSchema = new Schema(
  {
    images: [
      {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("OurStoryCarouselImages", carouselImagesSchema);
