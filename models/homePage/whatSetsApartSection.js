const mongoose = require("mongoose");
const { Schema } = mongoose;

const whatSetsApartSchema = new Schema(
  {
    title: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model(
  "WhatSetsApartSectionTitle",
  whatSetsApartSchema
);
