const { Schema, model } = require("mongoose");

const subscribeSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  {
    versionKey: false,
  }
);

module.exports = model("SubscribePromotion", subscribeSchema);
