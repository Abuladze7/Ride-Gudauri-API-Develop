const GudauriBanner = require("../models/gudauri-page/gudauriBannerModel");
const GudauriWonderlandSection = require("../models/gudauri-page/wonderlandSectionModel");
const PlanTripSection = require("../models/gudauri-page/planTripSectionModel");
const WhyGudauriSection = require("../models/gudauri-page/whyGudauriSection");
const GudauriSpiritSection = require("../models/gudauri-page/gudauriSpiritModel");
const GudauriHowToGetThereSection = require("../models/gudauri-page/howToGetThereModel");
const GudauriImageCarousel = require("../models/gudauri-page/gudauriImageCarousel");
const GudauriHowToGetThereMapImages = require("../models/gudauri-page/gudauriHowToGetMapImages");
const cloudinary = require("../config/cloudinary");

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
    const { image } = req.body;

    const banner = await GudauriBanner.findOne();

    if (!banner) return res.status(404).json({ message: "Banner not found" });

    banner.images.push(image);

    await banner.save();

    res.status(200).json({ message: "Image Added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteImageToBanner = async (req, res) => {
  try {
    const { id } = req.params;

    const banner = await GudauriBanner.findOne();

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

exports.updateGudauriBanner = async (req, res) => {
  try {
    const { title, image } = req.body;
    const { imgId } = req.query;

    const banner = await GudauriBanner.findOne();

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
    const { title, subtitle, image } = req.body;

    const wonderlandSection = await GudauriWonderlandSection.findById(
      req.params.id
    );

    if (!wonderlandSection)
      return res.status(404).json({ message: "Section not found" });

    if (image) {
      const imgId = wonderlandSection.image.public_id;
      await cloudinary.uploader.destroy(imgId);
    }

    await GudauriWonderlandSection.findByIdAndUpdate(
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
    const { title, subtitle, image } = req.body;
    const planTripSection = await PlanTripSection.findById(req.params.id);

    if (!planTripSection) {
      return res.status(404).json({ message: "Section not found" });
    }

    if (image) {
      const imgId = planTripSection.image.public_id;
      await cloudinary.uploader.destroy(imgId);
    }

    await PlanTripSection.findByIdAndUpdate(
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
    const { title, subtitle, image } = req.body;

    const section = await WhyGudauriSection.findById(req.params.id);

    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    if (image) {
      const imgId = section.image.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }

    await WhyGudauriSection.findByIdAndUpdate(
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
    const { title, subtitle, image } = req.body;
    const spiritSection = await GudauriSpiritSection.findById(req.params.id);

    if (!spiritSection) {
      return res
        .status(404)
        .json({ message: "Gudauri spirit section not found" });
    }

    if (image) {
      const imgId = spiritSection.image.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }

    await GudauriSpiritSection.findByIdAndUpdate(
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

exports.createHowToGetThereMapImages = async (req, res) => {
  try {
    const image = await GudauriHowToGetThereMapImages.create(req.body);

    res.status(201).json(image);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateHowToGetThereMapImage = async (req, res) => {
  try {
    const image = await GudauriHowToGetThereMapImages.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!image) return res.status(404).json({ message: "Image not found" });

    res.status(200).json({ message: "Image updated successfully " });
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

exports.updateGudauriCarouselImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { image } = req.body;

    const carousel = await GudauriImageCarousel.findOne();
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

exports.deleteGudauriCarouselImage = async (req, res) => {
  try {
    const { id } = req.params;

    const carousel = await GudauriImageCarousel.findOne();
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
      banner,
      wonderlandSection,
      planTripSection,
      whyGudauriSection,
      spiritSection,
      howToGetThereSection,
      howToGetThereMapImages,
      carouselImages,
    ] = await Promise.all([
      GudauriBanner.findOne().select("-updatedAt -createdAt").lean(),
      GudauriWonderlandSection.findOne().select("-updatedAt -createdAt").lean(),
      PlanTripSection.findOne().select("-updatedAt -createdAt").lean(),
      WhyGudauriSection.find().select("-updatedAt -createdAt").lean(),
      GudauriSpiritSection.findOne().select("-updatedAt -createdAt").lean(),
      GudauriHowToGetThereSection.findOne()
        .select("-updatedAt -createdAt")
        .lean(),
      GudauriHowToGetThereMapImages.find()
        .select("-updatedAt -createdAt")
        .lean(),
      GudauriImageCarousel.findOne().select("-updatedAt -createdAt").lean(),
    ]);

    const gudauriPage = {
      banner,
      wonderlandSection,
      planTripSection,
      whyGudauriSection,
      spiritSection,
      howToGetThereSection: {
        ...howToGetThereSection,
        maps: howToGetThereMapImages,
      },
      carouselImages,
    };

    res.status(200).json(gudauriPage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
