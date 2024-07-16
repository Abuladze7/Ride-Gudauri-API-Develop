const mongoose = require("mongoose");
const { Schema } = mongoose;

const whyGudauriSectionSchema = new Schema(
  {
    title: { type: String },
    subtitle: { type: String, required: true },
    imgUrl: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("WhyGudauriSection", whyGudauriSectionSchema);
