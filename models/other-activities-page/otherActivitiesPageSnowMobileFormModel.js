const mongoose = require("mongoose");
const { Schema } = mongoose;

const otherActivitiesPageSnowMobileFormSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
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
  "OtherActivitiesPageSnowMobileForm",
  otherActivitiesPageSnowMobileFormSchema
);
