const mongoose = require("mongoose");
const { Schema } = mongoose;

const activitySchema = new Schema(
  {
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Activity", activitySchema);
