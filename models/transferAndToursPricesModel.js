const { Schema, model } = require("mongoose");

const transferAndToursPricesSchema = new Schema(
  {
    gudauriToTbilisi: { type: Number },
    gudauriToTbilisiAirport: { type: Number },
    tbilisiAirportToGudauri: { type: Number },
    tbilisiFreedomSquareToGudauri: { type: Number },
    gudauriToKazbegi: { type: Number },
    gudauriToGergeti: { type: Number },
    gudauriToKhada: { type: Number },
    tbilisiToKazbegi: { type: Number },
    fullDayTourTbilisiToKazbegi: { type: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("TransferAndToursPrices", transferAndToursPricesSchema);
