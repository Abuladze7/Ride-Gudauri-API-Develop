const mongoose = require("mongoose");
const { Schema } = mongoose;

const activitiesSchema = new Schema(
  {
    title: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("OurActivities", activitiesSchema);
