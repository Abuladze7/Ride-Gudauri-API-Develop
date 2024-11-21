const IndividualSkiLessonPrices = require("../models/individualSkiLessonPricesModel");
const IndividualSnowboardPrices = require("../models/individualSnowboardPricesModel");
const GroupSkiLessonPrices = require("../models/groupSkiLessonPricesModel");
const GroupSnowboardPrices = require("../models/groupSnowboardPricesModel");
const ParaglidingPrice = require("../models/paraglidingPricesModel");
const HorseRidingPrices = require("../models/horseRidingPricesModel");
const QuadBikePrices = require("../models/quadBikePricesModel");
const SnowmobilePrices = require("../models/snowmobilePricesModel");
const TransferAndToursPrices = require("../models/transferAndToursPricesModel");
const Coupon = require("../models/couponModel");
const {
  applyDiscount,
  getFormattedUsd,
  convertToSnakeCase,
} = require("../lib");

// ========== INDIVIDUAL SKI LESSON ========== //

exports.getIndividualSkiLessonPrices = async (req, res) => {
  try {
    const { fromDate, toDate, hours, coupon } = req.query;

    if (!fromDate || !toDate || !hours) {
      return res
        .status(400)
        .json({ message: "fromDate, toDate and hours are required" });
    }
    const prices = await IndividualSkiLessonPrices.findOne();

    const getPrice = prices[convertToSnakeCase(hours)];

    if (!getPrice) {
      return res.status(404).json({ message: "Prices not found" });
    }

    const startDay = new Date(fromDate);
    const endDay = new Date(toDate);

    if (startDay > endDay) {
      return res.status(400).json({ message: "Invalid date range" });
    }

    const differencesInDays = (endDay - startDay) / (1000 * 60 * 60 * 24) + 1;

    const priceInGel = getPrice * differencesInDays;
    const priceInUSD = await getFormattedUsd(priceInGel);

    let result = {
      originalUSD: priceInUSD,
      originalGEL: priceInGel,
      discountedUSD: null,
      discountedGEL: null,
    };

    if (coupon) {
      const discountCoupon = await Coupon.findOne({
        name: coupon,
      });

      if (discountCoupon) {
        const isExpired = new Date(discountCoupon.expire) < new Date();

        if (!isExpired && discountCoupon.skiLessonDiscount > 0) {
          const discountRate = discountCoupon.skiLessonDiscount / 100;

          // Apply the discount
          const discountedGel = priceInGel - priceInGel * discountRate;
          const discountedUsd = priceInUSD - priceInUSD * discountRate;

          result.discountedGEL = Math.round(discountedGel);
          result.discountedUSD = Math.round(discountedUsd);
        }
      }
    }

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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

exports.getIndividualSnowboardPricesPrices = async (req, res) => {
  try {
    const { fromDate, toDate, hours, coupon } = req.query;

    if (!fromDate || !toDate || !hours) {
      return res
        .status(400)
        .json({ message: "fromDate, toDate and hours are required" });
    }
    const prices = await IndividualSnowboardPrices.findOne();

    if (!prices) return res.status(404).json({ message: "Prices not found" });

    const getPrice = prices[convertToSnakeCase(hours)];

    if (!getPrice) {
      return res.status(404).json({ message: "Prices not found" });
    }

    const startDay = new Date(fromDate);
    const endDay = new Date(toDate);

    if (startDay > endDay) {
      return res.status(400).json({ message: "Invalid date range" });
    }

    const differencesInDays = (endDay - startDay) / (1000 * 60 * 60 * 24) + 1;

    const priceInGel = getPrice * differencesInDays;
    const priceInUSD = await getFormattedUsd(priceInGel);

    let result = {
      originalUSD: priceInUSD,
      originalGEL: priceInGel,
      discountedUSD: null,
      discountedGEL: null,
    };

    if (coupon) {
      const discountCoupon = await Coupon.findOne({
        name: coupon.toUpperCase(),
      });

      if (discountCoupon) {
        const isExpired = new Date(discountCoupon.expire) < new Date();

        if (!isExpired && discountCoupon.snowboardDiscount > 0) {
          const discountRate = discountCoupon.snowboardDiscount / 100;

          // Apply the discount
          const discountedGel = priceInGel - priceInGel * discountRate;
          const discountedUsd = priceInUSD - priceInUSD * discountRate;

          result.discountedGEL = Math.round(discountedGel);
          result.discountedUSD = Math.round(discountedUsd);
        }
      }
    }

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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

exports.getGroupSkiPrices = async (req, res) => {
  try {
    const { fromDate, toDate, hours, groupMembers, coupon } = req.query;

    if (!fromDate || !toDate || !hours || !groupMembers) {
      return res.status(400).json({
        message: "fromDate, toDate, hours, and groupMembers are required",
      });
    }

    const startDay = new Date(fromDate);
    const endDay = new Date(toDate);

    if (startDay > endDay) {
      return res.status(400).json({ message: "Invalid date range" });
    }

    const groupSize = parseInt(groupMembers, 10);
    if (isNaN(groupSize) || groupSize < 2 || groupSize > 5) {
      return res
        .status(400)
        .json({ message: "groupMembers must be a number between 2 and 5" });
    }

    const prices = await GroupSkiLessonPrices.findOne();
    if (!prices) return res.status(404).json({ message: "Prices not found" });

    const durationKey = convertToSnakeCase(hours); // Converts "two hours" to "two_hours"

    const basePrice = prices[durationKey];
    if (!basePrice) {
      return res.status(400).json({ message: "Invalid hours duration" });
    }

    const differencesInDays = (endDay - startDay) / (1000 * 60 * 60 * 24) + 1;
    // Calculate the total price
    let totalPriceInGel = basePrice * groupSize * differencesInDays;

    // Optional: Apply coupon
    if (coupon) {
      const discountCoupon = await Coupon.findOne({
        name: coupon.toUpperCase(),
      });
      if (discountCoupon) {
        const isExpired = new Date(discountCoupon.expire) < new Date();

        if (!isExpired && discountCoupon.groupSkiLessonDiscount > 0) {
          const discountRate = discountCoupon.groupSkiLessonDiscount / 100;
          totalPriceInGel -= totalPriceInGel * discountRate;
        }
      }
    }

    const totalPriceInUsd = await getFormattedUsd(totalPriceInGel);

    res.status(200).json({
      originalGEL: basePrice * groupSize * differencesInDays,
      originalUSD: await getFormattedUsd(
        basePrice * groupSize * differencesInDays
      ),
      discountedGEL: totalPriceInGel,
      discountedUSD: totalPriceInUsd,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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

exports.getGroupSnowboardPrices = async (req, res) => {
  try {
    const { fromDate, toDate, hours, groupMembers, coupon } = req.query;

    if (!fromDate || !toDate || !hours || !groupMembers) {
      return res.status(400).json({
        message: "fromDate, toDate, hours, and groupMembers are required",
      });
    }

    const startDay = new Date(fromDate);
    const endDay = new Date(toDate);

    if (startDay > endDay) {
      return res.status(400).json({ message: "Invalid date range" });
    }

    const groupSize = parseInt(groupMembers, 10);
    if (isNaN(groupSize) || groupSize < 2 || groupSize > 5) {
      return res
        .status(400)
        .json({ message: "groupMembers must be a number between 2 and 5" });
    }

    const prices = await GroupSnowboardPrices.findOne();
    if (!prices) return res.status(404).json({ message: "Prices not found" });

    const durationKey = convertToSnakeCase(hours); // Converts "two hours" to "two_hours"

    const basePrice = prices[durationKey];
    if (!basePrice) {
      return res.status(400).json({ message: "Invalid hours duration" });
    }

    const differencesInDays = (endDay - startDay) / (1000 * 60 * 60 * 24) + 1;

    // Calculate the total price
    let totalPriceInGel = basePrice * groupSize * differencesInDays;

    // Optional: Apply coupon
    if (coupon) {
      const discountCoupon = await Coupon.findOne({
        name: coupon.toUpperCase(),
      });
      if (discountCoupon) {
        const isExpired = new Date(discountCoupon.expire) < new Date();

        if (!isExpired && discountCoupon.groupSnowboardDiscount > 0) {
          const discountRate = discountCoupon.groupSnowboardDiscount / 100;
          totalPriceInGel -= totalPriceInGel * discountRate;
        }
      }
    }

    const totalPriceInUsd = await getFormattedUsd(totalPriceInGel);

    res.status(200).json({
      originalGEL: basePrice * groupSize * differencesInDays,
      originalUSD: await getFormattedUsd(
        basePrice * groupSize * differencesInDays
      ),
      discountedGEL: totalPriceInGel,
      discountedUSD: totalPriceInUsd,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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

exports.getParaglidingPrices = async (req, res) => {
  try {
    const { participants = 1, coupon } = req.query; // Default participants to 1 if not provided

    // Validate participants only if provided
    const participantsCount = parseInt(participants, 10);
    if (
      isNaN(participantsCount) ||
      participantsCount <= 0 ||
      participantsCount > 50
    ) {
      return res
        .status(400)
        .json({ message: "Invalid number of participants" });
    }

    const prices = await ParaglidingPrice.findOne();
    if (!prices || !prices.paragliding) {
      return res.status(404).json({ message: "Prices not found" });
    }

    let result = {};

    const priceGel = prices.paragliding * participantsCount;
    const priceUsd = await getFormattedUsd(priceGel);

    const discount = await Coupon.findOne({ name: coupon });

    if (discount !== null) {
      const discountExpireDate = new Date(discount.expire);

      if (discountExpireDate > Date.now()) {
        const discountPrice = applyDiscount(
          prices,
          discount.paraglidingDiscount
        );
        const discountGel = discountPrice.paragliding * participantsCount;
        const discountUsd = await getFormattedUsd(discountGel);

        result = {
          originalGel: priceGel,
          originalUSD: priceUsd,
          discountedGEL: discountGel,
          discountedUSD: discountUsd,
        };

        return res.status(200).json(result);
      }
    }

    result = {
      originalGEL: priceGel,
      originalUSD: priceUsd,
      discountedGEL: null,
      discountedUSD: null,
    };

    res.status(200).json(result);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: err.message });
  }
};

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

exports.getHorseRidingPrices = async (req, res) => {
  try {
    const prices = await HorseRidingPrices.findOne();
    if (!prices) return res.status(404).json({ message: "Prices not found" });

    res.status(200).json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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

exports.getQuadBikePrices = async (req, res) => {
  try {
    const prices = await QuadBikePrices.findOne();
    if (!prices) return res.status(404).json({ message: "Prices not found" });

    res.status(200).json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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

exports.getSnowmobilePrices = async (req, res) => {
  try {
    const prices = await SnowmobilePrices.findOne();
    if (!prices) return res.status(404).json({ message: "Prices not found" });

    res.status(200).json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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

exports.getTransferAndTorusPrices = async (req, res) => {
  try {
    const prices = await TransferAndToursPrices.findOne();
    if (!prices) return res.status(404).json({ message: "Prices not found" });

    res.status(200).json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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
