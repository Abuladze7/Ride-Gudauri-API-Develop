const mongoose = require("mongoose");
const { Schema } = mongoose;

const gudauriPageBannerSchema = new Schema(
  {
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
