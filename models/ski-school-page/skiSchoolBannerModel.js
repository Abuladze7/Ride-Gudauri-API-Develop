const mongoose = require("mongoose");
const { Schema } = mongoose;

const skiSchoolBannerSchema = new Schema(
  {
    subtitle: { type: String, required: true },
    images: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("SkiSchoolPageBanner", skiSchoolBannerSchema);
