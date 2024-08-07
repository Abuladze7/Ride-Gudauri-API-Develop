const { Schema, model } = require("mongoose");
const seoSchema = require("../seo/seoModel");

const paraglidingPageSeoOptimizationModel = new Schema(
  {
    ...seoSchema.obj,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model(
  "ParaglidingPageSeoOptimization",
  paraglidingPageSeoOptimizationModel
);
