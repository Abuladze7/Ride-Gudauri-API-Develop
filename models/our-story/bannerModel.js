const mongoose = require("mongoose");
const { Schema } = mongoose;

const bannerSchema = new Schema(
  {
    title: { type: String, required: true },
    images: { type: [String], required: true },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("OurStoryBanner", bannerSchema);
