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
    dayOff: {
      type: [String],
      default: null,
      validate: {
        validator: function (arr) {
          if (arr === null) return true;

          return (
            Array.isArray(arr) &&
            arr.length === 2 &&
            !isNaN(new Date(arr[0])) &&
            !isNaN(new Date(arr[1])) &&
            new Date(arr[0]) <= new Date(arr[1])
          );
        },
        message: "dayOff must be an array of exactly 2 strings.",
      },
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("OtherActivitiesDates", otherActivitiesDatesSchema);
