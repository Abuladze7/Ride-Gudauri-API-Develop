const { Schema, model } = require("mongoose");
const seoSchema = require("../seo/seoModel");

const contactPageSeoOptimizationSchema = new Schema(
  {
    ...seoSchema.obj,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model(
  "ContactPageSeoOptimization",
  contactPageSeoOptimizationSchema
);
