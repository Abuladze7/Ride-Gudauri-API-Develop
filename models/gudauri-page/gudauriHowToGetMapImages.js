const { Schema, model } = require("mongoose");

const gudauriHowToGetThereMapImagesSchema = new Schema(
  {
    image: {
      public_id: { type: String },
      url: { type: String },
    },
    link: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model(
  "GudauriHowToGetThereMapImages",
  gudauriHowToGetThereMapImagesSchema
);
