const Contact = require('../models/Contact');


exports.createContact = async (req, res) => {
  try {
    const newBooking = new Contact(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getContact = async (req, res) => {
  try {
    const bookings = await Contact.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

