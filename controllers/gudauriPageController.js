const GudauriBanner = require("../models/gudauri-page/gudauriBannerModel");
const GudauriWonderlandSection = require("../models/gudauri-page/wonderlandSectionModel");
const PlanTripSection = require("../models/gudauri-page/planTripSectionModel");
const WhyGudauriSection = require("../models/gudauri-page/whyGudauriSection");
const GudauriSpiritSection = require("../models/gudauri-page/gudauriSpiritModel");
const GudauriHowToGetThereSection = require("../models/gudauri-page/howToGetThereModel");
const GudauriImageCarousel = require("../models/gudauri-page/gudauriImageCarousel");

// ========== Banner ========== //

exports.createGudauriBanner = async (req, res) => {
  try {
    await GudauriBanner.create(req.body);

    res.status(201).json({ message: "Banner created successfully" });
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

    await banner.save();

    res.status(200).json({ message: "Image Added successfully" });
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

    await banner.save();

    res.status(200).json({ message: "Banner updated successfully" });
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

    res.status(200).json({ message: "Sections updated successfully" });
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

    res.status(200).json({ message: "Section updated successfully" });
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

    res.status(200).json({ message: "Sections updated successfully" });
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

    res.status(200).json({ message: "Section updated successfully" });
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
      return res.status(404).json({ message: "Section not found" });
    }

    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Carousel Images ========== //

exports.createGudauriCarouselImage = async (req, res) => {
  try {
    const { images } = req.body;
    let carouselImages = await GudauriImageCarousel.findOne();
    if (!carouselImages) {
      carouselImages = await GudauriImageCarousel.create({
        images: [...images],
      });

      return res.status(201).json({ message: "Images added successfully" });
    }

    if (!Array.isArray(images) && typeof images === "string") {
      carouselImages.images.push(images);
      await carouselImages.save();

      return res.status(201).json({ message: "Image added successfully" });
    }

    carouselImages.images = [...carouselImages.images, ...images];
    await carouselImages.save();
    res.status(201).json({ message: "Images added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateGudauriCarouselImage = async (req, res) => {
  try {
    const { index } = req.query;
    const { imgUrl } = req.body;

    const images = await GudauriImageCarousel.findOne();
    if (!images) return res.status(404).json({ message: "Images not found" });

    let carouselImages;
    if (index) {
      if (index > images.images.length - 1 || index < 0) {
        return res.status(400).json({ message: "Invalid index" });
      }

      images.images[index] = imgUrl;
      carouselImages = await images.save();
    }

    res.status(200).json(carouselImages);
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
    const howToGetThereSection = await GudauriHowToGetThereSection.findOne();
    const carouselImages = await GudauriImageCarousel.findOne();

    const gudauriPage = {
      banner,
      wonderlandSection,
      planTripSection,
      whyGudauriSection,
      spiritSection,
      howToGetThereSection,
      carouselImages,
    };

    res.status(200).json(gudauriPage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
