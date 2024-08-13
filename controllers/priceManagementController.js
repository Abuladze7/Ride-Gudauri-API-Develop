const IndividualSkiLessonPrices = require("../models/individualSkiLessonPricesModel");
const IndividualSnowboardPrices = require("../models/individualSnowboardPricesModel");
const GroupSkiLessonPrices = require("../models/groupSkiLessonPricesModel");
const GroupSnowboardPrices = require("../models/groupSnowboardPricesModel");
const ParaglidingPrice = require("../models/paraglidingPricesModel");
const HorseRidingPrices = require("../models/horseRidingPricesModel");
const QuadBikePrices = require("../models/quadBikePricesModel");
const SnowmobilePrices = require("../models/snowmobilePricesModel");
const TransferAndToursPrices = require("../models/transferAndToursPricesModel");

// ========== INDIVIDUAL SKI LESSON ========== //

exports.createIndividualSkiLessonPrices = async (req, res) => {
  try {
    const prices = await IndividualSkiLessonPrices.create(req.body);

    res.status(201).json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateIndividualSkiLessonPrices = async (req, res) => {
  try {
    const updatedPrices = await IndividualSkiLessonPrices.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedPrices) {
      return res.status(404).json({ message: "Prices not found" });
    }

    res.json({
      message: "Private Individual Ski Lesson prices updated successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ========== INDIVIDUAL SNOWBOARD LESSON ========== //

exports.createIndividualSnowboardLessonPrices = async (req, res) => {
  try {
    const prices = await IndividualSnowboardPrices.create(req.body);

    res.status(201).json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateIndividualSnowboardLessonPrices = async (req, res) => {
  try {
    const updatedPrices = await IndividualSnowboardPrices.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedPrices) {
      return res.status(404).json({ message: "Prices not found" });
    }

    res.json({
      message:
        "Private Individual Snowboard Lesson prices updated successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ========== GROUP SKI LESSON ========== //

exports.createGroupSkiLessonPrices = async (req, res) => {
  try {
    const prices = await GroupSkiLessonPrices.create(req.body);

    res.status(201).json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateGroupSkiLessonPrices = async (req, res) => {
  try {
    const updatedPrices = await GroupSkiLessonPrices.findById(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedPrices) {
      return res.status(404).json({ message: "Prices not found" });
    }

    res.json({
      message: "Private Group Ski Lesson prices updated successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ========== GROUP SNOWBOARD LESSON ========== //

exports.createGroupSnowboardLessonPrices = async (req, res) => {
  try {
    const prices = await GroupSnowboardPrices.create(req.body);

    res.status(201).json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateGroupSnowboardLessonPrices = async (req, res) => {
  try {
    const updatedPrices = await GroupSnowboardPrices.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedPrices) {
      return res.status(404).json({ message: "Prices not found" });
    }

    res.json({
      message: "Private Group Snowboard Lesson prices updated successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ========== PARAGLIDING PRICES ========== //
exports.createParaglidingPrices = async (req, res) => {
  try {
    const prices = await ParaglidingPrice.create(req.body);

    res.status(201).json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateParaglidingPrices = async (req, res) => {
  try {
    const updatedPrices = await ParaglidingPrice.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedPrices) {
      return res.status(404).json({ message: "Prices not found" });
    }

    res.json({ message: "Paragliding prices updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ※※※※※※ OTHER ACTIVITIES ※※※※※※ //

// ========== HOSE Riding PRICES ========== //

exports.createHorseRidingPrices = async (req, res) => {
  try {
    const prices = await HorseRidingPrices.create(req.body);

    res.status(201).json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateHorseRidingPrices = async (req, res) => {
  try {
    const updatedPrices = await HorseRidingPrices.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedPrices) {
      return res.status(404).json({ message: "Prices not found" });
    }

    res.json({ message: "Horse Riding prices updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ========== QUADBIKE PRICES ========== //

exports.createQuadBikePrices = async (req, res) => {
  try {
    const prices = await QuadBikePrices.create(req.body);

    res.status(201).json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateQuadBikePrices = async (req, res) => {
  try {
    const updatedPrices = await QuadBikePrices.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedPrices) {
      return res.status(404).json({ message: "Prices not found" });
    }

    res.json({ message: "Quad Bike prices updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ========== SNOWMOBILE PRICES ========== //

exports.createSnowmobilePrices = async (req, res) => {
  try {
    const prices = await SnowmobilePrices.create(req.body);

    res.status(201).json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSnowmobilePrices = async (req, res) => {
  try {
    const updatedPrices = await SnowmobilePrices.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedPrices) {
      return res.status(404).json({ message: "Prices not found" });
    }

    res.json({ message: "Snowmobile prices updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ========== TRANSFER AND TOURS PRICES ========== //

exports.createTransferAndToursPrices = async (req, res) => {
  try {
    const prices = await TransferAndToursPrices.create(req.body);

    res.status(201).json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTransferAndToursPrices = async (req, res) => {
  try {
    const updatedPrices = await TransferAndToursPrices.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedPrices) {
      return res.status(404).json({ message: "Prices not found" });
    }

    res.json({ message: "Transfer and Tours prices updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ========== GET ALL PRICES ========== //

exports.getAllPrices = async (req, res) => {
  try {
    const [
      individualSkiLesson,
      individualSnowboard,
      groupSkiLesson,
      groupSnowboard,
      paragliding,
      transfer,
      snowmobile,
      horseRiding,
      quadBike,
    ] = await Promise.all([
      IndividualSkiLessonPrices.findOne().lean(),
      IndividualSnowboardPrices.findOne().lean(),
      GroupSkiLessonPrices.findOne().lean(),
      GroupSnowboardPrices.findOne().lean(),
      ParaglidingPrice.findOne().lean(),
      TransferAndToursPrices.findOne().lean(),
      SnowmobilePrices.findOne().lean(),
      HorseRidingPrices.findOne().lean(),
      QuadBikePrices.findOne().lean(),
    ]);

    const allData = {
      individualSkiLesson,
      individualSnowboard,
      groupSkiLesson,
      groupSnowboard,
      paragliding,
      transfer,
      snowmobile,
      horseRiding,
      quadBike,
    };

    res.status(200).json(allData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
