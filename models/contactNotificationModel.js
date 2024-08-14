const { Schema, model } = require("mongoose");

const contactNotificationSchema = new Schema(
  {
    contactNotification: { type: Boolean, default: false },
  },
  {
    versionKey: false,
  }
);

module.exports = model("ContactNotification", contactNotificationSchema);
