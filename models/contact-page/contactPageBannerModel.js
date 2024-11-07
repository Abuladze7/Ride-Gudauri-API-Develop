const mongoose = require("mongoose");
const { Schema } = mongoose;

const gudauriPageBannerSchema = new Schema(
  {
    title: { type: String },
    email: { type: String },
    workDays: { type: String },
    phoneNumber: { type: String },
    location: { type: String },
    locationLink: { type: String },
    images: [
      {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("GudauriPageBanner", gudauriPageBannerSchema);
