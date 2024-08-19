const { Schema, model } = require("mongoose");

const skiSchoolDatesSchema = new Schema(
  {
    name: {
      type: String,
      enum: ["ski", "snowboard"],
      required: true,
    },
    type: {
      type: String,
      enum: ["individual", "group"],
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    dayOff: {
      type: Date,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("SkiSchoolDates", skiSchoolDatesSchema);
