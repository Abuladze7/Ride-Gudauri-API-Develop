const { Schema, model } = require("mongoose");

const skiSchoolNotificationSchema = new Schema(
  {
    skiNotification: { type: Boolean, default: false },
  },
  {
    versionKey: false,
  }
);

module.exports = model("SkiSchoolNotification", skiSchoolNotificationSchema);
