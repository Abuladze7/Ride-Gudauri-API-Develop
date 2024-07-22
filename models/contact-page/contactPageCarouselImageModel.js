const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactPageCarouselImageSchema = new Schema(
  {
    images: [String],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "ContactPageCarouselImage",
  contactPageCarouselImageSchema
);
