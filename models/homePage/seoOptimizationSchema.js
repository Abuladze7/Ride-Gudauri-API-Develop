const mongoose = require("mongoose");
const seoSchema = require("../seo/seoModel");
const { Schema } = mongoose;

const homePageSeoOptimizationSchema = new Schema(
  {
    ...seoSchema.obj,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "HomePageSeoOptimization",
  homePageSeoOptimizationSchema
);
