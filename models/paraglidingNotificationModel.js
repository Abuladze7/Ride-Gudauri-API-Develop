const { Schema, model } = require("mongoose");

const paraglidingNotificationSchema = new Schema(
  {
    paraglidingNotification: { type: Boolean, default: false },
  },
  { versionKey: false }
);

module.exports = model(
  "ParaglidingNotification",
  paraglidingNotificationSchema
);
