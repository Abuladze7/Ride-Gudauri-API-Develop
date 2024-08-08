const HowStartedSection = require("../models/our-story/startedSectionModel");
const HowStartedMiddleSections = require("../models/our-story/startedMiddleSectionsModel");
const BeginningOfParaglidingSection = require("../models/our-story/beginningOfParaglidingModel");
const OurStoryBanner = require("../models/our-story/bannerModel");
const OurStoryCarouselImages = require("../models/our-story/ourStoryImageCarouselModel");
const OurStoryPageSeoOptimization = require("../models/our-story/ourStorySeoOptimizationModel");
const cloudinary = require("../config/cloudinary");

// ========== SEO ========== //
exports.createOurStoryPageSeoOptimization = async (req, res) => {
  try {
    const seoOptimization = await OurStoryPageSeoOptimization.create(req.body);

    res.status(201).json(seoOptimization);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateOurStoryPageSeoOptimization = async (req, res) => {
  try {
    const { id } = req.params;
    const { meta_img, ...updateData } = req.body;
    const seo = await OurStoryPageSeoOptimization.findById(id);

    if (!seo) {
      return res.status(404).json({ message: "SEO not found" });
    }

    if (meta_img && seo.meta_img.public_id) {
      const imgId = seo.meta_img.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }

    seo.set({ ...updateData, meta_img });

    await seo.save();

    res.json({ message: "SEO optimization updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

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
    const { image } = req.body;

    const banner = await OurStoryBanner.findOne();

    if (!banner) return res.status(404).json({ message: "Banner not found" });

    banner.images.push(image);

    await banner.save();

    res.status(200).json({ message: "Image added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBanner = async (req, res) => {
  try {
    const { title, image } = req.body;
    const { imgId } = req.query;

    const banner = await OurStoryBanner.findOne();

    if (!banner) return res.status(404).json({ message: "Banner not found" });

    if (imgId && image) {
      const imgIndex = banner.images.findIndex(
        (img) => img._id.toString() === imgId
      );

      if (imgIndex === -1)
        return res.status(404).json({ message: "Image not found" });

      const img = banner.images[imgIndex];

      if (img && img.public_id) {
        await cloudinary.uploader.destroy(img.public_id);
      }

      if (image.public_id) banner.images[imgIndex].public_id = image.public_id;

      if (image.url) banner.images[imgIndex].url = image.url;
    }

    if (title) banner.title = title;

    await banner.save();

    res.status(200).json({ message: "Banner updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteImageToBanner = async (req, res) => {
  try {
    const { id } = req.params;

    const banner = await OurStoryBanner.findOne();

    if (!banner) return res.status(404).json({ message: "Banner not found" });

    const index = banner.images.findIndex((img) => img._id.toString() === id);

    if (index === -1) {
      return res.status(404).json({ message: "Image not found" });
    }

    const img = banner.images[index];
    if (img && img.public_id) {
      await cloudinary.uploader.destroy(img.public_id);
    }

    banner.images.splice(index, 1);
    await banner.save();

    res.status(200).json({ message: "Image deleted successfully" });
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
    const { title, subtitle, image } = req.body;

    const section = HowStartedSection.findById(req.params.id);

    if (!section) return res.status(404).json({ message: "Section not found" });

    if (image && section.image) {
      const imgId = section.image.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }

    await HowStartedSection.findByIdAndUpdate(
      req.params.id,
      {
        title,
        subtitle,
        image,
      },
      {
        new: true,
        runValidators: true,
      }
    );

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
    const { subtitle, image } = req.body;
    const section = HowStartedMiddleSections.findById(req.params.id);

    if (!section) return res.status(404).json({ message: "Section not found" });

    if (image && section.image) {
      const imgId = section.image.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }

    await HowStartedMiddleSections.findByIdAndUpdate(
      req.params.id,
      {
        subtitle,
        image,
      },
      {
        new: true,
        runValidators: true,
      }
    );

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
    const { title, subtitle, image } = req.body;
    const section = await BeginningOfParaglidingSection.findById(req.params.id);

    if (!section) return res.status(404).json({ message: "Section not found" });

    if (image && section.image) {
      const imgId = section.image.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }

    await BeginningOfParaglidingSection.findByIdAndUpdate(
      req.params.id,
      { title, subtitle, image },
      { new: true, runValidators: true }
    );

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

    if (!Array.isArray(images) && typeof images === "object") {
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
    const { id } = req.params;
    const { image } = req.body;

    const carousel = await OurStoryCarouselImages.findOne();
    if (!carousel) return res.status(404).json({ message: "Images not found" });

    const img = carousel.images.id(id);
    if (!img) return res.status(404).json({ message: "Image not found" });

    if (img.public_id) {
      await cloudinary.uploader.destroy(img.public_id);
    }

    img.public_id = image.public_id;
    img.url = image.url;

    await carousel.save();

    res.status(200).json({ message: "Image updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteOurStoryCarouselImage = async (req, res) => {
  try {
    const { id } = req.params;

    const carousel = await OurStoryCarouselImages.findOne();
    if (!carousel) {
      return res.status(404).json({ message: "Images not found" });
    }

    const index = carousel.images.findIndex((img) => img._id.toString() === id);

    if (index === -1) {
      return res.status(404).json({ message: "Image not found" });
    }

    const img = carousel.images[index];

    if (img.public_id) {
      await cloudinary.uploader.destroy(img.public_id);
    }

    carousel.images.splice(index, 1);
    await carousel.save();

    res.status(200).json({ message: "Image deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllData = async (req, res) => {
  try {
    const [
      seo,
      banner,
      howStartedSection,
      middleSections,
      beginningOfParaglidingSection,
      carouselImages,
    ] = await Promise.all([
      OurStoryPageSeoOptimization.findOne().lean(),
      OurStoryBanner.findOne().lean(),
      HowStartedSection.findOne().lean(),
      HowStartedMiddleSections.find().lean(),
      BeginningOfParaglidingSection.findOne().lean(),
      OurStoryCarouselImages.findOne().lean(),
    ]);

    const ourStory = {
      seo,
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
