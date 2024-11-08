const mongoose = require("mongoose");
const { Schema } = mongoose;

const paraglidingFormSectionSchema = new Schema(
  {
    title: { type: String },
    subtitle: { type: String },
    locationTitle: { type: String },
    locationInfo: [
      {
        link: { type: String },
        title: { type: String },
      },
    ],
    items: [
      {
        description: { type: String, required: true },
        image: {
          public_id: { type: String, required: true },
          url: { type: String, required: true },
        },
      },
    ],
    warningTitle: { type: String },
    warning: { type: String },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model(
  "ParaglidingPageFormSection",
  paraglidingFormSectionSchema
);
