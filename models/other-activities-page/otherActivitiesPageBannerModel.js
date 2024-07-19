const mongoose = require("mongoose");
const { Schema } = mongoose;

const otherActivitiesPageBannerSchema = new Schema(
  {
    subtitle: { type: String, required: true },
    images: [String],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "OtherActivitiesPageBanner",
  otherActivitiesPageBannerSchema
);
