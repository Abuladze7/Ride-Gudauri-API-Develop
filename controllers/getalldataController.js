const ParaglidingBooking = require('../models/paragliding');
const SkischoolBooking = require('../models/skischool');
const OtheractivitiesBooking = require('../models/otherActivities');
const Contactmessages = require('../models/Contact');

exports.getAllData = async (req, res) => {
    try {
        const paraglidingBookings = await ParaglidingBooking.find();
        const skischoolBookings = await SkischoolBooking.find();
        const otherActivitiesBookings = await OtheractivitiesBooking.find();
        const contactmessages = await Contactmessages.find();

        const allData = {
            paraglidingBookings,
            skischoolBookings,
            otherActivitiesBookings,
            contactmessages
        };

        res.json(allData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
