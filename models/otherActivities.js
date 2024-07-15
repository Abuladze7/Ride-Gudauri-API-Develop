const mongoose = require('mongoose');

const otheractivitiesBookingSchema = new mongoose.Schema({
    type: { type: String, required: true },
    fullName: { type: String, required: true },
    number: { type: String, required: true },
    email: { type: String, required: true },
    participants: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    selector: { type: String},
    currency: { type: String },
    orderTime: { type: Date },
    additionalDetails: { type: String }
});

module.exports = mongoose.model('otheractivitiesBooking', otheractivitiesBookingSchema);
