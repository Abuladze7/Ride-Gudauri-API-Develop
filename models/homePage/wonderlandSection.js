const mongoose = require("mongoose");
const { Schema } = mongoose;

const wonderlandSectionSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    imgUrl: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "HomePageWonderlandSection",
  wonderlandSectionSchema
);
