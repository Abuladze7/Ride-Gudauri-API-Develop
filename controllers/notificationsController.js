const SkiSchoolNotification = require("../models/skiSchoolNotificationModel");
const OtherActivitiesNotification = require("../models/otherActivitiesNotificationModel");
const ParaglidingNotification = require("../models/paraglidingNotificationModel");
const ContactNotification = require("../models/contactNotificationModel");

// ========= GET ALL NOTIFICATION ========= //
exports.getNotifications = async (req, res) => {
  try {
    const [
      skiNotification,
      otherActivitiesNotification,
      paraglidingNotification,
      contactNotification,
    ] = await Promise.all([
      SkiSchoolNotification.findOne().lean(),
      OtherActivitiesNotification.findOne().lean(),
      ParaglidingNotification.findOne().lean(),
      ContactNotification.findOne().lean(),
    ]);

    const allData = {
      skiNotification,
      otherActivitiesNotification,
      paraglidingNotification,
      contactNotification,
    };

    res.status(200).json(allData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========= Ski School ========= //
exports.updateSkiSchoolNotification = async (req, res) => {
  try {
    const notification = await SkiSchoolNotification.findOne();

    if (!notification) {
      const created = await SkiSchoolNotification.create({
        skiNotification: false,
      });
      return res.status(200).json(created);
    }

    notification.set({ skiNotification: false });
    await notification.save();

    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========= Other Activities ========= //
exports.updateOtherActivitiesNotification = async (req, res) => {
  try {
    const notification = await OtherActivitiesNotification.findOne();

    if (!notification) {
      const created = await OtherActivitiesNotification.create({
        otherActivitiesNotification: false,
      });
      return res.status(200).json(created);
    }

    notification.set({ otherActivitiesNotification: false });
    await notification.save();

    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========= Paragliding ========= //
exports.updateParaglidingNotification = async (req, res) => {
  try {
    const notification = await ParaglidingNotification.findOne();

    if (!notification) {
      const created = await ParaglidingNotification.create({
        paraglidingNotification: false,
      });
      return res.status(200).json(created);
    }

    notification.set({ paraglidingNotification: false });
    await notification.save();

    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========= Contact ========= //
exports.updateContactNotification = async (req, res) => {
  try {
    const notification = await ContactNotification.findOne();

    if (!notification) {
      const created = await ContactNotification.create({
        contactNotification: false,
      });
      return res.status(200).json(created);
    }

    notification.set({ contactNotification: false });
    await notification.save();

    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
