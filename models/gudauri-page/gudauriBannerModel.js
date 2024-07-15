const mongoose = require("mongoose");
const { Schema } = mongoose;

const gudauriBannerSchema = new Schema(
  {
    title: { type: String, required: true },
    images: { type: [String], required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("GudauriBanner", gudauriBannerSchema);
