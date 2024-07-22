const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactPageFaqTitlesSchema = new Schema(
  {
    title: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model(
  "ContactPageFaqTitle",
  contactPageFaqTitlesSchema
);
