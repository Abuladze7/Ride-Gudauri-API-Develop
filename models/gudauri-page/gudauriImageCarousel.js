const mongoose = require("mongoose");
const { Schema } = mongoose;

const gudauriImageCarouselSchema = new Schema(
  {
    images: [
      {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model(
  "GudauriImageCarousel",
  gudauriImageCarouselSchema
);
