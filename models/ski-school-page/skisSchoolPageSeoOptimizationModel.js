const { Schema, model } = require("mongoose");
const seoSchema = require("../seo/seoModel");

const skiSchoolPageSeoOptimizationSchema = new Schema(
  {
    ...seoSchema.obj,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model(
  "SkiSchoolPageSeoOptimization",
  skiSchoolPageSeoOptimizationSchema
);
