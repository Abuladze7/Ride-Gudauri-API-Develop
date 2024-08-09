const { sendEmail } = require("../lib");
const {
  skiSchoolIndividualSessionBookingsTemplate,
} = require("../lib/mail/templates");
const skischoolBooking = require("../models/skischool");

exports.createskischoolBooking = async (req, res) => {
  try {
    const newBooking = new skischoolBooking(req.body);

    const body = {
      from: "Confirmation <noreplayridegudauri@gmail.com>",
      to: `${req.body.email}`,
      subject: "Ski School Booking Confirmation",
      html: skiSchoolIndividualSessionBookingsTemplate(req.body),
    };

    await newBooking.save();

    const message =
      "Thank you for booking our service. Please check your email";

    sendEmail(body, res, message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getskischoolBooking = async (req, res) => {
  try {
    const bookings = await skischoolBooking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSkischoolBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const updateData = req.body;
    const updatedBooking = await skischoolBooking.findByIdAndUpdate(
      bookingId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json(updatedBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSkischoolBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;

    const deletedBooking = await skischoolBooking.findByIdAndDelete(bookingId);

    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "Booking successfully deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
