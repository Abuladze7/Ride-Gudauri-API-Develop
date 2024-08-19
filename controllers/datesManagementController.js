const SkiSchoolDates = require("../models/skiSchoolDates");
const ParaglidingDates = require("../models/paraglidingDatesModel");
const OtherActivitiesDates = require("../models/otherActivitiesDatesModel");

exports.getAllDates = async (req, res) => {
  try {
    const [skiSchoolDates, paraglidingDates, otherActivitiesDates] =
      await Promise.all([
        SkiSchoolDates.find(),
        ParaglidingDates.findOne(),
        OtherActivitiesDates.find(),
      ]);

    const allData = {
      skiSchoolDates,
      paraglidingDates,
      otherActivitiesDates,
    };

    res.json(allData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Ski School ========== //

exports.getSkiSchoolDates = async (req, res) => {
  try {
    const dates = await SkiSchoolDates.find();

    res.json(dates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSkiSchoolDates = async (req, res) => {
  try {
    const dates = await SkiSchoolDates.create(req.body);

    res.status(201).json(dates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSkiSchoolDates = async (req, res) => {
  try {
    const dates = await SkiSchoolDates.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!dates)
      return res.status(404).json({ message: "Ski School Dates not found" });

    res.json({ message: "Dates updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Paragliding ========== //

exports.getParaglidingDates = async (req, res) => {
  try {
    const dates = await ParaglidingDates.findOne();

    res.json(dates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createParaglidingDates = async (req, res) => {
  try {
    const dates = await ParaglidingDates.create(req.body);

    res.status(201).json(dates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateParaglidingDates = async (req, res) => {
  try {
    const dates = await ParaglidingDates.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!dates)
      return res.status(404).json({ message: "Paragliding Dates not found" });

    res.json({ message: "Dates updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== OTHER ACTIVITIES ========== //

exports.getOtherActivitiesDates = async (req, res) => {
  try {
    const dates = await OtherActivitiesDates.find();
    res.json(dates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createOtherActivitiesDates = async (req, res) => {
  try {
    const dates = await OtherActivitiesDates.create(req.body);
    res.status(201).json(dates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOtherActivitiesDates = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDates = await OtherActivitiesDates.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedDates) {
      return res
        .status(404)
        .json({ message: "Other Activities Dates not found" });
    }

    res.json({ message: "Dates updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
