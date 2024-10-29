const mongoose = require("mongoose");
const { Schema } = mongoose;

const skiSchoolPagePrivateGroupLessonSchema = new Schema(
  {
    title: { type: String },
    subtitle: { type: String },
    items: [
      {
        image: {
          public_id: { type: String, required: true },
          url: { type: String, required: true },
        },
        description: { type: String, required: true },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "SkiSchoolPagePrivateGroupLesson",
  skiSchoolPagePrivateGroupLessonSchema
);
