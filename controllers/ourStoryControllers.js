const HowStartedSection = require("../models/our-story/startedSectionModel");
const HowStartedMiddleSections = require("../models/our-story/startedMiddleSectionsModel");
const BeginningOfParaglidingSection = require("../models/our-story/beginningOfParaglidingModel");
const OurStoryBanner = require("../models/our-story/bannerModel");
const OurStoryCarouselImages = require("../models/our-story/ourStoryImageCarouselModel");

// ========== Banner ========== //

exports.createBanner = async (req, res) => {
  try {
    const banner = await OurStoryBanner.create(req.body);

    res.status(201).json(banner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addImageToBanner = async (req, res) => {
  try {
    const { imgUrl } = req.body;

    const banner = await OurStoryBanner.findOne();

    if (!banner) return res.status(404).json({ message: "Banner not found" });

    banner.images.push(imgUrl);

    await banner.save();

    res.status(200).json({ message: "Image added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBanner = async (req, res) => {
  try {
    const { title, imgUrl } = req.body;
    const { imgIndex } = req.query;

    const banner = await OurStoryBanner.findById(req.params.id);

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

    res.status(200).json({ message: "Banner updated successfuly" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// ========== How It Started Section ========== //
exports.createHowStartedSection = async (req, res) => {
  try {
    const howStartedSection = await HowStartedSection.create(req.body);

    res.status(201).json(howStartedSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateHowStartedSection = async (req, res) => {
  try {
    const howStartedSection = await HowStartedSection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!howStartedSection)
      return res.status(404).json({ message: "Section not found" });

    res.json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== How It Started Middle Sections ========== //

exports.createHowStartedMiddleSections = async (req, res) => {
  try {
    const middleSections = await HowStartedMiddleSections.create(req.body);

    res.status(201).json(middleSections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateHowStartedMiddleSection = async (req, res) => {
  try {
    const middleSection = await HowStartedMiddleSections.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!middleSection)
      return res.status(404).json({ message: "Section not found" });

    res.json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== The Beginning of Paragliding ========== //

exports.createParaglidingSection = async (req, res) => {
  try {
    const paraglidingSection = await BeginningOfParaglidingSection.create(
      req.body
    );

    res.status(201).json(paraglidingSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateParaglidingSection = async (req, res) => {
  try {
    const paraglidingSection =
      await BeginningOfParaglidingSection.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
    if (!paraglidingSection)
      return res.status(404).json({ message: "Section not found" });

    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Carousel Images ========== //

exports.createOurStoryCarouselImage = async (req, res) => {
  try {
    const { images } = req.body;
    let carouselImages = await OurStoryCarouselImages.findOne();
    if (!carouselImages) {
      carouselImages = await OurStoryCarouselImages.create({
        images: [...images],
      });
      return res
        .status(201)
        .json({ message: "Carousel images created successfully" });
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

exports.updateOurStoryCarouselImage = async (req, res) => {
  try {
    const { index } = req.query;
    const { imgUrl } = req.body;

    const images = await OurStoryCarouselImages.findOne();
    if (!images) return res.status(404).json({ message: "Images not found" });

    if (index) {
      if (index > images.images.length - 1 || index < 0) {
        return res.status(400).json({ message: "Invalid index" });
      }

      images.images[index] = imgUrl;
      await images.save();
    }

    res.status(200).json({ message: "Images updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllData = async (req, res) => {
  try {
    const [
      banner,
      howStartedSection,
      middleSections,
      beginningOfParaglidingSection,
      carouselImages,
    ] = await Promise.all([
      OurStoryBanner.findOne().lean(),
      HowStartedSection.findOne().lean(),
      HowStartedMiddleSections.find().lean(),
      BeginningOfParaglidingSection.findOne().lean(),
      OurStoryCarouselImages.findOne().lean(),
    ]);

    const ourStory = {
      banner,
      howStartedSection,
      middleSections,
      beginningOfParaglidingSection,
      carouselImages,
    };

    res.json(ourStory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
