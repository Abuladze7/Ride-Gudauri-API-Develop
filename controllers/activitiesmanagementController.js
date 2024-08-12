const ActivitiesManagement = require("../models/activitiesManagement");

exports.createActivitiesManagement = async (req, res) => {
  try {
    const newBooking = new ActivitiesManagement(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getActivitiesManagement = async (req, res) => {
  try {
    const bookings = await ActivitiesManagement.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateActivitiesManagement = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const updateData = req.body;
    const options = { new: true, runValidators: true };

    const updatedBooking = await ActivitiesManagement.findByIdAndUpdate(
      bookingId,
      updateData,
      options
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json(updatedBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
