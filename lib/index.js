const nodemailer = require("nodemailer");

exports.sendEmail = async (body, res, message) => {
  const transporter = nodemailer.createTransport({
    host: process.env.GMAIL_HOST,
    port: 587,
    secure: false,
    service: process.env.GMAIL_HOST,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  transporter.sendMail(body, (err) => {
    if (err) {
      console.log(err.message);
      return res.status(403).json({ message: "Error sending email" });
    }

    res.status(200).json({ message });
  });
};
