const HowStartedSection = require("../models/our-story/startedSectionModel");
const HowStartedMiddleSections = require("../models/our-story/startedMiddleSectionsModel");
const BeginningOfParaglidingSection = require("../models/our-story/beginningOfParaglidingModel");
const OurStoryBanner = require("../models/our-story/bannerModel");

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

    const updatedBanner = await banner.save();

    res.status(200).json({ banner: updatedBanner });
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

    const updatedBanner = await banner.save();

    res.status(200).json({ banner: updatedBanner });
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

    res.json(howStartedSection);
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

    res.json(middleSection);
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

    res.status(200).json(paraglidingSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllData = async (req, res) => {
  try {
    const banner = await OurStoryBanner.findOne();
    const howStartedSection = await HowStartedSection.findOne();
    const middleSections = await HowStartedMiddleSections.find();
    const beginningOfParaglidingSection =
      await BeginningOfParaglidingSection.findOne();

    const ourStory = {
      banner,
      howStartedSection,
      middleSections,
      beginningOfParaglidingSection,
    };

    res.json(ourStory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
