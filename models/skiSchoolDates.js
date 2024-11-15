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

module.exports = model("SkiSchoolDates", skiSchoolDatesSchema);
