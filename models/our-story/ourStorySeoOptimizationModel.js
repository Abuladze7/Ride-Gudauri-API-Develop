const { Schema, model } = require("mongoose");
const seoSchema = require("../seo/seoModel");

const ourStoryPageSeoOptimizationSchema = new Schema(
  {
    ...seoSchema.obj,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model(
  "OurStoryPageSeoOptimization",
  ourStoryPageSeoOptimizationSchema
);
