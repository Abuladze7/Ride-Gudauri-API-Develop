const OtherActivitiesPageBanner = require("../models/other-activities-page/otherActivitiesPageBannerModel");
const OtherActivitiesPageMainSection = require("../models/other-activities-page/otherActivitiesPageMainSectionModel");
const OtherActivitiesPageTransfersForm = require("../models/other-activities-page/otherActivitiesPageTransfersForm");
const OtherActivitiesPageSnowMobileForm = require("../models/other-activities-page/otherActivitiesPageSnowMobileFormModel");
const OtherActivitiesPageHorseRidingForm = require("../models/other-activities-page/otherActivitiesPageHorseRidingFormModel");
const OtherActivitiesPageQuadBikeForm = require("../models/other-activities-page/otherActivitiesPageQuadBikeFormModel");
const OtherActivitiesPageCarouselImages = require("../models/other-activities-page/otherActivitiesPageCarouselImagesModel");
const OtherActivitiesPageSeoOptimization = require("../models/other-activities-page/otherActivitiesPageSeoOptimizationModel");
const cloudinary = require("../config/cloudinary");

// ========== SEO ========== //
exports.createOtherActivitiesPageSeoOptimization = async (req, res) => {
  try {
    const seo = await OtherActivitiesPageSeoOptimization.create(req.body);
    res.status(201).json(seo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOtherActivitiesPageSeoOptimization = async (req, res) => {
  try {
    const { id } = req.params;
    const { meta_img, ...updateData } = req.body;
    const seo = await OtherActivitiesPageSeoOptimization.findById(id);

    if (!seo) return res.status(404).json({ message: "SEO not found" });

    if (meta_img && seo.meta_img.public_id) {
      const imgId = seo.meta_img.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }

    seo.set({ ...updateData, meta_img });

    await seo.save();

    return res
      .status(200)
      .json({ message: "SEO Optimization updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ========== Banner ========== //

exports.createOtherActivitiesPageBanner = async (req, res) => {
  try {
    const banner = await OtherActivitiesPageBanner.create(req.body);

    res.status(201).json(banner);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addImageToBanner = async (req, res) => {
  try {
    const { image } = req.body;
    const banner = await OtherActivitiesPageBanner.findOne();

    if (!banner) return res.status(404).json({ message: "Banner not found" });

    banner.images.push(image);

    await banner.save();

    res.status(200).json({ message: "Image added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateOtherActivitiesPageBanner = async (req, res) => {
  try {
    const { title, subtitle, image } = req.body;
    const { imgId } = req.query;

    const banner = await OtherActivitiesPageBanner.findOne();

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
    res.status(500).json({ message: err.message });
  }
};

exports.deleteImageToBanner = async (req, res) => {
  try {
    const { id } = req.params;

    const banner = await OtherActivitiesPageBanner.findOne();

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

// ========== Main Section =========== //

exports.createOtherActivitiesPageMainSection = async (req, res) => {
  try {
    const mainSection = await OtherActivitiesPageMainSection.create(req.body);

    res.status(201).json(mainSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateOtherActivitiesPageMainSection = async (req, res) => {
  try {
    const { title, subtitle, image } = req.body;
    const { imgId } = req.query;

    const section = await OtherActivitiesPageMainSection.findOne();

    if (imgId && image) {
      const imgIndex = section.images.findIndex(
        (img) => img._id.toString() === imgId
      );

      if (imgIndex === -1)
        return res.status(404).json({ message: "Image not found" });

      const img = section.images[imgIndex];

      if (img && img.public_id) {
        await cloudinary.uploader.destroy(img.public_id);
      }

      if (image.public_id) section.images[imgIndex].public_id = image.public_id;

      if (image.url) section.images[imgIndex].url = image.url;
    }

    if (title) section.title = title;

    if (subtitle) section.subtitle = subtitle;

    await section.save();

    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Transfer and Tours Form ========== //
exports.createOtherActivitiesPageTransfersForm = async (req, res) => {
  try {
    const transfersForm = await OtherActivitiesPageTransfersForm.create(
      req.body
    );

    res.status(201).json(transfersForm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOtherActivitiesPageTransfersForm = async (req, res) => {
  try {
    const { title, subtitle, warning, description, image } = req.body;
    const { itemId } = req.query;

    const transfersForm = await OtherActivitiesPageTransfersForm.findOne();

    if (!transfersForm)
      return res.status(404).json({ message: "Section not found" });

    if (itemId) {
      const item = transfersForm.items.id(itemId);

      if (item) {
        if (description) item.description = description;

        if (image) {
          const imgId = item.image.public_id;
          if (imgId) {
            await cloudinary.uploader.destroy(item.image.public_id);
          }
          item.image = image;
        }
      }
    }

    if (title) transfersForm.title = title;
    if (subtitle) transfersForm.subtitle = subtitle;
    if (warning) transfersForm.warning = warning;

    await transfersForm.save();

    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ========== Snowmobile Form ========== //
exports.createOtherActivitiesPageSnowMobileForm = async (req, res) => {
  try {
    const snowMobileForm = await OtherActivitiesPageSnowMobileForm.create(
      req.body
    );

    res.status(201).json(snowMobileForm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOtherActivitiesPageSnowMobileForm = async (req, res) => {
  try {
    const { title, subtitle, warning, description, image } = req.body;
    const { itemId } = req.query;

    const snowMobileForm = await OtherActivitiesPageSnowMobileForm.findOne();

    if (!snowMobileForm)
      return res.status(404).json({ message: "Section not found" });

    if (itemId) {
      const item = snowMobileForm.items.id(itemId);

      if (item) {
        if (description) item.description = description;

        if (image) {
          const imgId = item.image.public_id;

          if (imgId) {
            await cloudinary.uploader.destroy(item.image.public_id);
          }

          item.image = image;
        }
      }
    }

    if (title) snowMobileForm.title = title;
    if (subtitle) snowMobileForm.subtitle = subtitle;
    if (warning) snowMobileForm.warning = warning;

    await snowMobileForm.save();
    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ========== Horse Riding Form ========== //
exports.createOtherActivitiesPageHorseRidingForm = async (req, res) => {
  try {
    const horseRidingForm = await OtherActivitiesPageHorseRidingForm.create(
      req.body
    );

    res.status(201).json(horseRidingForm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOtherActivitiesPageHorseRidingForm = async (req, res) => {
  try {
    const { title, subtitle, warning, description, image } = req.body;
    const { itemId } = req.query;

    const horseRidingForm = await OtherActivitiesPageHorseRidingForm.findOne();

    if (!horseRidingForm)
      return res.status(404).json({ message: "Section not found" });

    if (itemId) {
      const item = horseRidingForm.items.id(itemId);

      if (item) {
        if (description) item.description = description;

        if (image) {
          const imgId = item.image.public_id;

          if (imgId) await cloudinary.uploader.destroy(imgId);

          item.image = image;
        }
      }
    }

    if (title) horseRidingForm.title = title;
    if (subtitle) horseRidingForm.subtitle = subtitle;
    if (warning) horseRidingForm.warning = warning;

    await horseRidingForm.save();
    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ============ Quad Bike Form =========== //

exports.createOtherActivitiesPageQuadBikeForm = async (req, res) => {
  try {
    const quadBikeForm = await OtherActivitiesPageQuadBikeForm.create(req.body);

    res.status(201).json(quadBikeForm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOtherActivitiesPageQuadBikeForm = async (req, res) => {
  try {
    const { title, subtitle, warning, description, image } = req.body;
    const { itemId } = req.query;

    const quadBikeForm = await OtherActivitiesPageQuadBikeForm.findOne();

    if (!quadBikeForm)
      return res.status(404).json({ message: "Section not found" });

    if (itemId) {
      const item = quadBikeForm.items.id(itemId);

      if (item) {
        if (description) item.description = description;

        if (image) {
          const imgId = item.image.public_id;

          if (imgId) await cloudinary.uploader.destroy(imgId);

          item.image = image;
        }
      }
    }

    if (title) quadBikeForm.title = title;
    if (subtitle) quadBikeForm.subtitle = subtitle;
    if (warning) quadBikeForm.warning = warning;

    await quadBikeForm.save();
    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =========== Carousel Image =========== //
exports.createOtherActivitiesCarouselImage = async (req, res) => {
  try {
    const { images } = req.body;
    let carouselImages = await OtherActivitiesPageCarouselImages.findOne();
    if (!carouselImages) {
      carouselImages = await OtherActivitiesPageCarouselImages.create({
        images: [...images],
      });
      return res
        .status(200)
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
    res.status(500).json({ error: err.message });
  }
};

exports.updateOtherActivitiesCarouselImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { image } = req.body;

    const carousel = await OtherActivitiesPageCarouselImages.findOne();
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

exports.deleteOtherActivitiesPageCarouselImage = async (req, res) => {
  try {
    const { id } = req.params;

    const carousel = await OtherActivitiesPageCarouselImages.findOne();
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

// =========== All Data ============ //

exports.getAllData = async (req, res) => {
  try {
    const [
      seo,
      banner,
      mainSection,
      transfersForm,
      snowMobileForm,
      horseRidingForm,
      quadBikeForm,
      carouselImages,
    ] = await Promise.all([
      OtherActivitiesPageSeoOptimization.findOne().lean(),
      OtherActivitiesPageBanner.findOne().lean(),
      OtherActivitiesPageMainSection.findOne().lean(),
      OtherActivitiesPageTransfersForm.findOne().lean(),
      OtherActivitiesPageSnowMobileForm.findOne().lean(),
      OtherActivitiesPageHorseRidingForm.findOne().lean(),
      OtherActivitiesPageQuadBikeForm.findOne().lean(),
      OtherActivitiesPageCarouselImages.findOne().lean(),
    ]);

    const activities = {
      transfersForm,
      snowMobileForm,
      horseRidingForm,
      quadBikeForm,
    };

    const otherActivitiesPage = {
      seo,
      banner,
      mainSection,
      activities,
      carouselImages,
    };

    res.status(200).json(otherActivitiesPage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
