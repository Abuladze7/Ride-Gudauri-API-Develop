const { sendEmail } = require("../lib");
const { paraglidingBookingTemplate } = require("../lib/mail/templates");
const paraglidingBooking = require("../models/paragliding");
const path = require("path");

exports.createParaglidingBooking = async (req, res) => {
  try {
    const newBooking = new paraglidingBooking(req.body);
    const { email } = req.body;
    const body = {
      from: process.env.GMAIL_USER,
      to: `${email}`,
      subject: "Booking Confirmation",
      html: paraglidingBookingTemplate(req.body),
      attachments: [
        {
          filename: "AccountDetail.pdf",
          path: path.join(
            __dirname,
            "../lib/mail/attachments/AccountDetail.pdf"
          ),
        },
      ],
    };

    await newBooking.save();

    const message =
      "Thank you for booking our service. Please check your email";

    sendEmail(body, res, message);
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

    const updatedBooking = await paraglidingBooking.findByIdAndUpdate(
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

exports.deleteParaglidingBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;

    const deletedBooking = await paraglidingBooking.findByIdAndDelete(
      bookingId
    );

    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "Booking successfully deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
