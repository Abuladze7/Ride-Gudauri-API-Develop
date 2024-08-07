const { Schema, model } = require("mongoose");
const seoSchema = require("../seo/seoModel");

const gudauriPageSeoOptimizationSchema = new Schema(
  {
    ...seoSchema.obj,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model(
  "GudauriPageSeoOptimization",
  gudauriPageSeoOptimizationSchema
);
