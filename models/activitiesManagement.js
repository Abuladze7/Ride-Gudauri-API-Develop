const mongoose = require('mongoose');

const activitiesManagementSchema = new mongoose.Schema({
    horseRiding: { type: String, required: true },
    snowMobile: { type: String, required: true },
    transfersTours: { type: String, required: true },
    paragliding: { type: String, required: true },
    snowSchool: { type: String, required: true },
    quadBike: { type: String, required: true },
});

module.exports = mongoose.model('activitiesManagement', activitiesManagementSchema);
