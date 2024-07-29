const mongoose = require("mongoose");
const { Schema } = mongoose;

const benefitsSchema = new Schema(
  {
    title: { type: String, required: true },
    items: [
      {
        subtitle: { type: String, required: true },
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

module.exports = mongoose.model("SkiSchoolPageBenefits", benefitsSchema);
