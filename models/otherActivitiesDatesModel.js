const { Schema, model } = require("mongoose");

const otherActivitiesDatesSchema = new Schema(
  {
    name: {
      type: String,
      enum: ["transfer", "snowmobile", "horse riding", "quad bike"],
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
    dayOff: { type: Date },
  },
  {
    versionKey: false,
  }
);

module.exports = model("OtherActivitiesDates", otherActivitiesDatesSchema);
