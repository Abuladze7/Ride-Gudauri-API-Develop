const { sendEmail } = require("../lib");
const { quadBikeBookingTemplate } = require("../lib/mail/templates");
const otheractivitiesBooking = require("../models/otherActivities");
const path = require("path");

exports.createOtheractivitiesBooking = async (req, res) => {
  try {
    const newBooking = new otheractivitiesBooking(req.body);
    const { email, type } = req.body;

    const templateRenderer = () => {
      if (type === "Quad Bike") return quadBikeBookingTemplate(req.body);

      if (type === "Horse Riding") return "Hello";
    };

    const body = {
      from: process.env.GMAIL_USER,
      to: `${email}`,
      subject: "Booking Confirmation",
      html: templateRenderer(),
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

    const updatedBooking = await otheractivitiesBooking.findByIdAndUpdate(
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

exports.deleteOtheractivitiesBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;

    const deletedBooking = await otheractivitiesBooking.findByIdAndDelete(
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
