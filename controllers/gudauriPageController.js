const GudauriBanner = require("../models/gudauri-page/gudauriBannerModel");
const GudauriWonderlandSection = require("../models/gudauri-page/wonderlandSectionModel");
const PlanTripSection = require("../models/gudauri-page/planTripSectionModel");
const WhyGudauriSection = require("../models/gudauri-page/whyGudauriSection");
const GudauriSpiritSection = require("../models/gudauri-page/gudauriSpiritModel");
const GudauriHowToGetThereSection = require("../models/gudauri-page/howToGetThereModel");

// ========== Banner ========== //

exports.createGudauriBanner = async (req, res) => {
  try {
    const banner = await GudauriBanner.create(req.body);

    res.status(201).json(banner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addImageToBanner = async (req, res) => {
  try {
    const { imgUrl } = req.body;

    const banner = await GudauriBanner.findOne();

    if (!banner) return res.status(404).json({ message: "Banner not found" });

    banner.images.push(imgUrl);

    const updatedBanner = await banner.save();

    res.status(200).json(updatedBanner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateGudauriBanner = async (req, res) => {
  try {
    const { title, imgUrl } = req.body;
    const { imgIndex } = req.query;

    const banner = await GudauriBanner.findById(req.params.id);

    if (!banner) return res.status(404).json({ message: "Banner not found" });

    if (
      imgIndex !== undefined &&
      imgUrl &&
      imgIndex >= 0 &&
      imgIndex < banner.images.length
    ) {
      banner.images[Number(imgIndex)] = imgUrl;
    }

    if (title) banner.title = title;

    const updatedBanner = await banner.save();

    res.status(200).json(updatedBanner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Gudauri Wonderland Section ========== //

exports.createGudauriWonderlandSection = async (req, res) => {
  try {
    const wonderlandSection = await GudauriWonderlandSection.create(req.body);

    res.status(201).json(wonderlandSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateGudauriWonderlandSection = async (req, res) => {
  try {
    const wonderlandSection = await GudauriWonderlandSection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!wonderlandSection) {
      return res.status(404).json({ message: "Wonderland section not found" });
    }

    res.status(200).json(wonderlandSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Plan Trip Section ========== //

exports.createPlanTripSection = async (req, res) => {
  try {
    const planTripSection = await PlanTripSection.create(req.body);

    res.status(201).json(planTripSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatePlanTripSection = async (req, res) => {
  try {
    const planTripSection = await PlanTripSection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!planTripSection) {
      return res.status(404).json({ message: "Plan trip section not found" });
    }

    res.status(200).json(planTripSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Why Gudauri Section ========== //

exports.createWhyGudauriSection = async (req, res) => {
  try {
    const whyGudauriSection = await WhyGudauriSection.create(req.body);

    res.status(201).json(whyGudauriSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateWhyGudauriSection = async (req, res) => {
  try {
    const whyGudauriSection = await WhyGudauriSection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!whyGudauriSection) {
      return res.status(404).json({ message: "Why Gudauri section not found" });
    }

    res.status(200).json(whyGudauriSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Gudauri Spirit Section ========== //

exports.createGudauriSpiritSection = async (req, res) => {
  try {
    const spiritSection = await GudauriSpiritSection.create(req.body);

    res.status(201).json(spiritSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateGudauriSpiritSection = async (req, res) => {
  try {
    const spiritSection = await GudauriSpiritSection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!spiritSection) {
      return res
        .status(404)
        .json({ message: "Gudauri spirit section not found" });
    }

    res.status(200).json(spiritSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// =========== How To Get There Section ========== //

exports.createHowToGetThereSection = async (req, res) => {
  try {
    const howToGetThereSection = await GudauriHowToGetThereSection.create(
      req.body
    );

    res.status(201).json(howToGetThereSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateHowToGetThereSection = async (req, res) => {
  try {
    const howToGetThereSection =
      await GudauriHowToGetThereSection.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );

    if (!howToGetThereSection) {
      return res
        .status(404)
        .json({ message: "How to get there section not found" });
    }

    res.status(200).json(howToGetThereSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllData = async (req, res) => {
  try {
    const banner = await GudauriBanner.findOne();
    const wonderlandSection = await GudauriWonderlandSection.findOne();
    const planTripSection = await PlanTripSection.findOne();
    const whyGudauriSection = await WhyGudauriSection.find();
    const spiritSection = await GudauriSpiritSection.findOne();
    const howToGetThereSection = await HowToGetThereSection.findOne();

    const gudauriPage = {
      banner,
      wonderlandSection,
      planTripSection,
      whyGudauriSection,
      spiritSection,
      howToGetThereSection,
    };

    res.status(200).json(gudauriPage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
