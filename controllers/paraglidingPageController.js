const ParaglidingPageBanner = require("../models/paragliding-page/paraglidingPageBannerModel");
const ParaglidingPageMainSection = require("../models/paragliding-page/paraglidingPageParaglidingModel");
const ParaglidingPageFormSection = require("../models/paragliding-page/paraglidingPageFormSectionModel");
const ParaglidingPageCarouselImage = require("../models/paragliding-page/paraglidingPageCarouselImage");

// ========== Banner ========== //

exports.createParaglidingPageBanner = async (req, res) => {
  try {
    const banner = await ParaglidingPageBanner.create(req.body);

    res.status(201).json(banner);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addImageToBanner = async (req, res) => {
  try {
    const { imgUrl } = req.body;
    const banner = await ParaglidingPageBanner.findOne();

    if (!banner) return res.status(404).json({ message: "Banner not found" });

    banner.images.push(imgUrl);

    await banner.save();
    res.status(200).json({ message: "Image Added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateParaglidingPageBanner = async (req, res) => {
  try {
    const { subtitle, imgUrl } = req.body;
    const { imgIndex } = req.query;

    const banner = await ParaglidingPageBanner.findById(req.params.id);

    if (!banner) return res.status(404).json({ message: "Banner not found" });

    if (
      imgIndex !== undefined &&
      imgUrl &&
      imgIndex >= 0 &&
      imgIndex < banner.images.length
    ) {
      banner.images[Number(imgIndex)] = imgUrl;
    }

    if (subtitle) banner.subtitle = subtitle;

    await banner.save();

    res.status(200).json({ message: "Banner updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ========== Main Section ========== //

exports.createParaglidingPageMainSection = async (req, res) => {
  try {
    const section = await ParaglidingPageMainSection.create(req.body);

    res.status(201).json(section);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateParaglidingMainSectionSection = async (req, res) => {
  try {
    const section = await ParaglidingPageMainSection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    res.status(200).json({ message: "Sections updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ========== Paragliding Form Section ========== //

exports.createParaglidingFormSection = async (req, res) => {
  try {
    const formSection = await ParaglidingPageFormSection.create(req.body);

    res.status(201).json(formSection);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateParaglidingFormSection = async (req, res) => {
  try {
    const { title, subtitle, imgUrl, description } = req.body;
    const { itemId } = req.query;

    const formSection = await ParaglidingPageFormSection.findOne();

    if (!formSection)
      return res.status(404).json({ message: "Section not found" });

    if (title) formSection.title = title;

    if (subtitle) formSection.subtitle = subtitle;

    if (itemId) {
      const item = formSection.items.id(itemId);
      if (item) {
        if (description) {
          item.description = description;
        }
        if (imgUrl) {
          item.imgUrl = imgUrl;
        }
      } else {
        return res.status(404).json({ message: "Item not found" });
      }
    }

    await formSection.save();

    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Carousel Images ========== //

exports.createParaglidingCarouselImage = async (req, res) => {
  try {
    const { images } = req.body;
    let carouselImages = await ParaglidingPageCarouselImage.findOne();
    if (!carouselImages) {
      carouselImages = await ParaglidingPageCarouselImage.create({
        images: [...images],
      });
      return res
        .status(201)
        .json({ message: "Carousel Images Created Successfully" });
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

exports.updateParaglidingCarouselImage = async (req, res) => {
  try {
    const { index } = req.query;
    const { imgUrl } = req.body;

    const images = await ParaglidingPageCarouselImage.findOne();
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
    const banner = await ParaglidingPageBanner.findOne().lean();
    const mainSection = await ParaglidingPageMainSection.findOne().lean();
    const formSection = await ParaglidingPageFormSection.findOne().lean();
    const carouselImages = await ParaglidingPageCarouselImage.findOne().lean();

    const allData = {
      banner,
      mainSection,
      formSection,
      carouselImages,
    };

    res.status(200).json(allData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
