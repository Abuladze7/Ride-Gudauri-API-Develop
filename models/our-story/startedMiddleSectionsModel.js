const mongoose = require("mongoose");
const { Schema } = mongoose;

const startedMiddleSectionSchema = new Schema(
  {
    subtitle: { type: String, required: true },
    imgUrl: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model(
  "HowStartedMiddleSections",
  startedMiddleSectionSchema
);
