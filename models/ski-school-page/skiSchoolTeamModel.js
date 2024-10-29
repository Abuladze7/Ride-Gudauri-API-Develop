const mongoose = require("mongoose");
const { Schema } = mongoose;

const skiSchoolModelSchema = new Schema(
  {
    title: { type: String },
    items: [
      {
        title: { type: String },
        subtitle: { type: String },
        image: {
          public_id: { type: String, required: true },
          url: { type: String, required: true },
        },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("SkiSchoolPageTeam", skiSchoolModelSchema);
