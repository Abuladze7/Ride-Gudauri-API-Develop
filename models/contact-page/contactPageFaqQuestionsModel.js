const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactPageFaqQuestionsSchema = new Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    titleId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "ContactPageFaqTitle",
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model(
  "ContactPageFaqQuestion",
  contactPageFaqQuestionsSchema
);
