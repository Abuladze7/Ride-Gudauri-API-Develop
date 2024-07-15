const paraglidingBooking = require('../models/paragliding');

exports.createParaglidingBooking = async (req, res) => {
  try {
    const newBooking = new paraglidingBooking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getParaglidingBooking = async (req, res) => {
  try {
    const bookings = await paraglidingBooking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateParaglidingBooking = async (req, res) => {
  try {
    const bookingId = req.params.id; 
    const updateData = req.body;
    const options = { new: true, runValidators: true }; 

    const updatedBooking = await paraglidingBooking.findByIdAndUpdate(bookingId, updateData, options);

    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json(updatedBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteParaglidingBooking = async (req, res) => {
  try {
      const bookingId = req.params.id;

      const deletedBooking = await paraglidingBooking.findByIdAndDelete(bookingId);

      if (!deletedBooking) {
          return res.status(404).json({ message: 'Booking not found' });
      }

      res.json({ message: 'Booking successfully deleted' });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};