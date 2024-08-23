const SubscribePromotion = require("../models/subscribeModel");
const Coupon = require("../models/couponModel");
const { sendEmail } = require("../lib");
const path = require("path");
const { subscriptionPromotionTemplate } = require("../lib/mail/templates");

exports.getSubscribePromotion = async (req, res) => {
  try {
    const promotion = await SubscribePromotion.find();

    res.json(promotion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.subscribePromotion = async (req, res) => {
  try {
    const { email } = req.body;
    const coupon = await Coupon.findOne({
      expire: { $gt: new Date().toISOString() },
    });
    if (!coupon) {
      return res.status(404).json({ message: "No valid coupon available" });
    }

    if (await SubscribePromotion.findOne({ email })) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    await SubscribePromotion.create({ email });

    const body = {
      to: email,
      from: process.env.GMAIL_USER,
      subject: "Promotion",
      html: subscriptionPromotionTemplate(),
    };

    const message = "Thanks for subscribing, please check your E-mail";

    sendEmail(body, res, message);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteSubscribePromotion = async (req, res) => {
  try {
    const { id } = req.params;
    const promotion = await SubscribePromotion.findByIdAndDelete(id);

    if (!promotion) return res.status(404).json({ message: "Not Found" });

    res.json({ message: "Subscribed user deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
