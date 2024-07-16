const mongoose = require("mongoose");
const { Schema } = mongoose;

const gudauriImageCarouselSchema = new Schema(
  {
    images: [String],
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model(
  "GudauriImageCarousel",
  gudauriImageCarouselSchema
);
