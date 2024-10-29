const mongoose = require("mongoose");
const { Schema } = mongoose;

const planTripSectionSchema = new Schema(
  {
    title: { type: String },
    subtitle: { type: String },
    image: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("PlanTripSection", planTripSectionSchema);
