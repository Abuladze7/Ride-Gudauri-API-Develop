const mongoose = require("mongoose");
const { Schema } = mongoose;

const howToGetThereSchema = new Schema(
  {
    title: { type: String },
    subtitle: { type: String },
    description: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "GudauriHowToGetThereSection",
  howToGetThereSchema
);
