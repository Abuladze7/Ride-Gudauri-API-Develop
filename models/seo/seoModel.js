const { Schema, model } = require("mongoose");

const seoSchema = new Schema(
  {
    page_title: { type: String, required: true },
    meta_title: { type: String, required: true },
    meta_description: { type: String, required: true },
    meta_keywords: { type: String, required: true },
    meta_url: { type: String, required: true },
    meta_img: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("SeoOptimizationSettings", seoSchema);
