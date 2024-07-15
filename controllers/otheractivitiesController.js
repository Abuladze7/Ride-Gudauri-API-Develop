const otheractivitiesBooking = require('../models/otherActivities');

exports.createOtheractivitiesBooking = async (req, res) => {
    try {
      const newBooking = new otheractivitiesBooking(req.body);
      const savedBooking = await newBooking.save();
      res.status(201).json(savedBooking);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.getOtheractivitiesBooking = async (req, res) => {
    try {
      const bookings = await otheractivitiesBooking.find();
      res.json(bookings);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  exports.updateOtheractivitiesBooking = async (req, res) => {
    try {
        const bookingId = req.params.id;
        const updateData = req.body; 
        const options = { new: true, runValidators: true }; 

        const updatedBooking = await otheractivitiesBooking.findByIdAndUpdate(bookingId, updateData, options);

        if (!updatedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.json(updatedBooking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
  
exports.deleteOtheractivitiesBooking = async (req, res) => {
  try {
      const bookingId = req.params.id;

      const deletedBooking = await otheractivitiesBooking.findByIdAndDelete(bookingId);

      if (!deletedBooking) {
          return res.status(404).json({ message: 'Booking not found' });
      }

      res.json({ message: 'Booking successfully deleted' });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

  
  