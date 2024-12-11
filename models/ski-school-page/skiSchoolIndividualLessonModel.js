const mongoose = require("mongoose");
const { Schema } = mongoose;

const skiSchoolPageIndividualLessonSchema = new Schema(
  {
    title: { type: String },
    subtitle: { type: String },
    locationTitle: { type: String },
    locationInfo: [
      {
        title: { type: String },
        link: { type: String },
      },
    ],
    warning: { type: String },
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
  "SkiSchoolPageIndividualLesson",
  skiSchoolPageIndividualLessonSchema
);
