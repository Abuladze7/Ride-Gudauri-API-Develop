const ParaglidingPageBanner = require("../models/paragliding-page/paraglidingPageBannerModel");
const ParaglidingPageMainSection = require("../models/paragliding-page/paraglidingPageParaglidingModel");
const ParaglidingPageFormSection = require("../models/paragliding-page/paraglidingPageFormSectionModel");
const ParaglidingPageCarouselImage = require("../models/paragliding-page/paraglidingPageCarouselImage");
const cloudinary = require("../config/cloudinary");
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
    const { image } = req.body;
    const banner = await ParaglidingPageBanner.findOne();

    if (!banner) return res.status(404).json({ message: "Banner not found" });

    banner.images.push(image);

    await banner.save();
    res.status(200).json({ message: "Image Added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateParaglidingPageBanner = async (req, res) => {
  try {
    const { title, subtitle, image } = req.body;
    const { imgId } = req.query;

    const banner = await ParaglidingPageBanner.findOne();

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

    if (subtitle) banner.subtitle = subtitle;

    await banner.save();

    res.status(200).json({ message: "Banner updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteImageToBanner = async (req, res) => {
  try {
    const { id } = req.params;

    const banner = await ParaglidingPageBanner.findOne();

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
    const { title, subtitle, image } = req.body;
    const section = await ParaglidingPageMainSection.findById(req.params.id);

    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    if (image) {
      const imgId = section.image.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }

    await ParaglidingPageMainSection.findByIdAndUpdate(
      req.params.id,
      { title, subtitle, image },
      { new: true, runValidators: true }
    );

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
    const { title, subtitle, image, description } = req.body;
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
        if (image) {
          const imgId = item.image.public_id;
          if (imgId) {
            await cloudinary.uploader.destroy(imgId);
          }
          item.image = image;
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

exports.updateParaglidingCarouselImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { image } = req.body;

    const carousel = await ParaglidingPageCarouselImage.findOne();
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

exports.deleteParaglidingPageCarouselImage = async (req, res) => {
  try {
    const { id } = req.params;

    const carousel = await ParaglidingPageCarouselImage.findOne();
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
    const [banner, mainSection, formSection, carouselImages] =
      await Promise.all([
        ParaglidingPageBanner.findOne().lean(),
        ParaglidingPageMainSection.findOne().lean(),
        ParaglidingPageFormSection.findOne().lean(),
        ParaglidingPageCarouselImage.findOne().lean(),
      ]);

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
