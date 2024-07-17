const mongoose = require("mongoose");
const { Schema } = mongoose;

const skiSchoolPagePrivateGroupLessonSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    items: [
      {
        imgUrl: { type: String, required: true },
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
