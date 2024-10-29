const mongoose = require("mongoose");
const { Schema } = mongoose;

const otherActivitiesPageQuadBikeForm = new Schema(
  {
    title: { type: String },
    subtitle: { type: String },
    warning: String,
    items: [
      {
        description: { type: String, required: true },
        image: {
          public_id: { type: String, required: true },
          url: { type: String, required: true },
        },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "OtherActivitiesPageQuadBikeForm",
  otherActivitiesPageQuadBikeForm
);
