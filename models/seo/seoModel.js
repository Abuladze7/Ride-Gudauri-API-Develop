const { Schema } = require("mongoose");

const seoSchema = new Schema(
  {
    page_title: { type: String, required: true },
    meta_title: { type: String, required: true },
    meta_description: { type: String, required: true },
    meta_keywords: { type: String, required: true },
    meta_url: { type: String, required: true },
    meta_img: { type: String, required: true },
  },
  {
    _id: false,
  }
);

module.exports = seoSchema;
