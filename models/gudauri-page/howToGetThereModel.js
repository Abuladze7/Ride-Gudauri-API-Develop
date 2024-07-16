const mongoose = require("mongoose");
const { Schema } = mongoose;

const howToGetThereSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("HowToGetThereSection", howToGetThereSchema);
