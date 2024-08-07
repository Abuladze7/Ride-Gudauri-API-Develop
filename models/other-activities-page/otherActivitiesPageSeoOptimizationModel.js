const { Schema, model } = require("mongoose");
const seoSchema = require("../seo/seoModel");

const otherActivitiesPageSeoOptimizationSchema = new Schema(
  {
    ...seoSchema.obj,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model(
  "OtherActivitiesPageSeoOptimization",
  otherActivitiesPageSeoOptimizationSchema
);
