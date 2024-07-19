const mongoose = require("mongoose");
const { Schema } = mongoose;

const otherActivitiesPageCarouselImagesSchema = new Schema(
  {
    images: [String],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model(
  "OtherActivitiesPageCarouselImages",
  otherActivitiesPageCarouselImagesSchema
);
