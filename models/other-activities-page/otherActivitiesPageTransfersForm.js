const mongoose = require("mongoose");
const { Schema } = mongoose;

const otherActivitiesPageTransferFormSchema = new Schema(
  {
    title: { type: String },
    gudauriToTbilisiTransferDesc: { type: String },
    gudauriToTbilisiAirportDesc: { type: String },
    tbilisiAirportToGudauriDesc: { type: String },
    tbilisiFreedomSquareToGudauriDesc: { type: String },
    gudauriToKazbegiTourDesc: { type: String },
    gudauriToGergetiExcursionDesc: { type: String },
    gudauriToKhadaExplorationDesc: { type: String },
    transferFromTbilisiToKazbegiDesc: { type: String },
    fullDayTourTbilisiToKazbegiDesc: { type: String },
    warning: String,
    items: [
      {
        description: { type: String, required: true },
        image: {
          public_id: { type: String, required: true },
          url: { type: String, required: true },
        },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "OtherActivitiesPageTransfersForm",
  otherActivitiesPageTransferFormSchema
);
