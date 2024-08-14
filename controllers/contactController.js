const Contact = require("../models/Contact");
const ContactNotification = require("../models/contactNotificationModel");

exports.createContact = async (req, res) => {
  try {
    const newBooking = new Contact(req.body);
    const notification = await ContactNotification.findOne();

    const savedBooking = await newBooking.save();

    notification.set({ contactNotification: true });
    await notification.save();

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
