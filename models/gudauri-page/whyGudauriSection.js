const mongoose = require("mongoose");
const { Schema } = mongoose;

const whyGudauriSectionSchema = new Schema({
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  imgUrl: { type: String, required: true },
});

module.exports = mongoose.model("WhyGudauriSection", whyGudauriSectionSchema);
