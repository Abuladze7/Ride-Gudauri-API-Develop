const BookingService = require("../models/bookingServicesModel");

exports.getAllBookingServices = async (req, res) => {
  try {
    const filter = {};

    if (req.query.name) {
      filter.name = { $regex: req.query.name, $options: "i" };
    }
    if (req.query.type) {
      filter.type = { $regex: req.query.type, $options: "i" };
    }

    const bookingServices = await BookingService.find(filter);
    res.json(bookingServices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBookingService = async (req, res) => {
  try {
    const bookingService = await BookingService.create(req.body);

    res.status(201).json(bookingService);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBookingService = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBookingService = await BookingService.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedBookingService) {
      return res.status(404).json({ message: "Booking service not found." });
    }

    res.json(updatedBookingService);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBookingService = async (req, res) => {
  try {
    const bookingServiceId = req.params.id;
    const deletedBookingService = await BookingService.findByIdAndDelete(
      bookingServiceId
    );

    if (!deletedBookingService) {
      return res.status(404).json({ message: "Booking service not found." });
    }

    res.json({ message: "Booking service deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
