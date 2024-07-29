const mongoose = require("mongoose");
const { Schema } = mongoose;

const otherActivitiesPageHorseRidingSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    warning: String,
    items: [
      {
        image: {
          public_id: { type: String, required: true },
          url: { type: String, required: true },
        },
        description: { type: String, required: true },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "OtherActivitiesPageHorseRidingForm",
  otherActivitiesPageHorseRidingSchema
);
