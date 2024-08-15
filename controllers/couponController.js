const Coupon = require("../models/couponModel");
const IndividualSkiLessonPrices = require("../models/individualSkiLessonPricesModel");
const IndividualSnowboardPrices = require("../models/individualSnowboardPricesModel");
const GroupSkiLessonPrices = require("../models/groupSkiLessonPricesModel");
const GroupSnowboardPrices = require("../models/groupSnowboardPricesModel");
const ParaglidingPrice = require("../models/paraglidingPricesModel");
const HorseRidingPrices = require("../models/horseRidingPricesModel");
const QuadBikePrices = require("../models/quadBikePricesModel");
const SnowmobilePrices = require("../models/snowmobilePricesModel");
const TransferAndToursPrices = require("../models/transferAndToursPricesModel");

exports.getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();

    res.json(coupons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCoupon = async (req, res) => {
  try {
    let { expire, ...others } = req.body;

    if (expire) {
      expire = new Date(expire).toLocaleString();
    }

    const savedCoupon = await Coupon.create({ expire, ...others });

    res.status(201).json(savedCoupon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCoupon = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedCoupon) {
      return res.status(404).json({ message: "Coupon not found" });
    }

    res.json(updatedCoupon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCoupon = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCoupon = await Coupon.findByIdAndDelete(id);

    if (!deletedCoupon) {
      return res.status(404).json({ message: "Coupon not found" });
    }

    res.json({ message: "Coupon successfully deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.applyCoupon = async (req, res) => {
  try {
    const { name } = req.body;
    const coupon = await Coupon.findOne({ name });

    if (!coupon)
      return res.status(404).json({ message: "Coupon doesn't exists" });

    if (coupon.expire < Date.now()) {
      return res.status(403).json({ message: "Coupon has expired" });
    }

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
      IndividualSkiLessonPrices.findOne(),
      IndividualSnowboardPrices.findOne(),
      GroupSkiLessonPrices.findOne(),
      GroupSnowboardPrices.findOne(),
      ParaglidingPrice.findOne(),
      TransferAndToursPrices.findOne(),
      SnowmobilePrices.findOne(),
      HorseRidingPrices.findOne(),
      QuadBikePrices.findOne(),
    ]);

    const applyDiscount = (priceObj, discount) => {
      if (!priceObj) return null;

      for (const key in priceObj.toObject()) {
        if (priceObj[key] && typeof priceObj[key] === "number") {
          priceObj[key] = priceObj[key] - (priceObj[key] * discount) / 100;
        }
      }
      return priceObj;
    };

    const discountedIndividualSkiLesson = applyDiscount(
      individualSkiLesson,
      coupon.skiLessonDiscount
    );
    const discountedIndividualSnowboard = applyDiscount(
      individualSnowboard,
      coupon.snowboardDiscount
    );
    const discountedGroupSkiLesson = applyDiscount(
      groupSkiLesson,
      coupon.groupSkiLessonDiscount
    );
    const discountedGroupSnowboard = applyDiscount(
      groupSnowboard,
      coupon.groupSnowboardDiscount
    );
    const discountedParagliding = applyDiscount(
      paragliding,
      coupon.paraglidingDiscount
    );
    const discountedTransfer = applyDiscount(
      transfer,
      coupon.transferToursDiscount
    );
    const discountedSnowmobile = applyDiscount(
      snowmobile,
      coupon.snowmobileDiscount
    );
    const discountedHorseRiding = applyDiscount(
      horseRiding,
      coupon.horseRidingDiscount
    );
    const discountedQuadBike = applyDiscount(quadBike, coupon.quadBikeDiscount);

    const data = {
      discountedIndividualSkiLesson,
      discountedIndividualSnowboard,
      discountedGroupSkiLesson,
      discountedGroupSnowboard,
      discountedParagliding,
      discountedTransfer,
      discountedSnowmobile,
      discountedHorseRiding,
      discountedQuadBike,
    };

    res.status(200).json({
      message: "Coupon applied successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
