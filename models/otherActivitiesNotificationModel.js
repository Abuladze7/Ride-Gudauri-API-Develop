const { Schema, model } = require("mongoose");

const otherActivitiesNotificationSchema = new Schema(
  {
    otherActivitiesNotification: { type: Boolean, default: false },
  },
  {
    versionKey: false,
  }
);

module.exports = model(
  "OtherActivitiesNotification",
  otherActivitiesNotificationSchema
);
