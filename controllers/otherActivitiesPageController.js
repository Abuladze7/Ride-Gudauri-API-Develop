const OtherActivitiesPageBanner = require("../models/other-activities-page/otherActivitiesPageBannerModel");
const OtherActivitiesPageMainSection = require("../models/other-activities-page/otherActivitiesPageMainSectionModel");
const OtherActivitiesPageTransfersForm = require("../models/other-activities-page/otherActivitiesPageTransfersForm");
const OtherActivitiesPageSnowMobileForm = require("../models/other-activities-page/otherActivitiesPageSnowMobileFormModel");
const OtherActivitiesPageHorseRidingForm = require("../models/other-activities-page/otherActivitiesPageHorseRidingFormModel");
const OtherActivitiesPageQuadBikeForm = require("../models/other-activities-page/otherActivitiesPageQuadBikeFormModel");
const OtherActivitiesPageCarouselImages = require("../models/other-activities-page/otherActivitiesPageCarouselImagesModel");

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
    const { imgUrl } = req.body;
    const banner = await OtherActivitiesPageBanner.findOne();

    if (!banner) return res.status(404).json({ message: "Banner not found" });

    banner.images.push(imgUrl);

    await banner.save();

    res.status(200).json({ message: "Image added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateOtherActivitiesPageBanner = async (req, res) => {
  try {
    const { subtitle, imgUrl } = req.body;
    const { imgIndex } = req.query;

    const banner = await OtherActivitiesPageBanner.findById(req.params.id);

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

    res.status(200).json({ message: "Image updated successfully" });
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
    const { title, subtitle, imgUrl } = req.body;
    const { imgIndex } = req.query;

    const mainSection = await OtherActivitiesPageMainSection.findById(
      req.params.id
    );

    if (!mainSection)
      return res.status(404).json({ message: "Section not found" });

    if (
      imgIndex !== undefined &&
      imgUrl &&
      imgIndex >= 0 &&
      imgIndex < mainSection.images.length
    ) {
      mainSection.images[Number(imgIndex)] = imgUrl;
    }

    if (title) mainSection.title = title;

    if (subtitle) mainSection.subtitle = subtitle;

    await mainSection.save();

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
    const { title, subtitle, warning, description, imgUrl } = req.body;
    const { itemId } = req.query;

    const transfersForm = await OtherActivitiesPageTransfersForm.findOne();

    if (!transfersForm)
      return res.status(404).json({ message: "Section not found" });

    if (itemId) {
      const item = transfersForm.items.id(itemId);

      if (item) {
        if (description) item.description = description;

        if (imgUrl) item.imgUrl = imgUrl;
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
    const { title, subtitle, warning, description, imgUrl } = req.body;
    const { itemId } = req.query;

    const snowMobileForm = await OtherActivitiesPageSnowMobileForm.findOne();

    if (!snowMobileForm)
      return res.status(404).json({ message: "Section not found" });

    if (itemId) {
      const item = snowMobileForm.items.id(itemId);

      if (item) {
        if (description) item.description = description;
        if (imgUrl) item.imgUrl = imgUrl;
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
    const { title, subtitle, warning, description, imgUrl } = req.body;
    const { itemId } = req.query;

    const horseRidingForm = await OtherActivitiesPageHorseRidingForm.findOne();

    if (!horseRidingForm)
      return res.status(404).json({ message: "Section not found" });

    if (itemId) {
      const item = horseRidingForm.items.id(itemId);
      if (item) {
        if (description) item.description = description;
        if (imgUrl) item.imgUrl = imgUrl;
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
    const { title, subtitle, warning, description, imgUrl } = req.body;
    const { itemId } = req.query;

    const quadBikeForm = await OtherActivitiesPageQuadBikeForm.findOne();

    if (!quadBikeForm)
      return res.status(404).json({ message: "Section not found" });

    if (itemId) {
      const item = quadBikeForm.items.id(itemId);
      if (item) {
        if (description) item.description = description;
        if (imgUrl) item.imgUrl = imgUrl;
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

    if (!Array.isArray(images) && typeof images === "string") {
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
    const { index } = req.query;
    const { imgUrl } = req.body;

    const images = await OtherActivitiesPageCarouselImages.findOne();
    if (!images) return res.status(404).json({ message: "Images not found" });

    if (index) {
      if (index > images.images.length - 1 || index < 0) {
        return res.status(400).json({ message: "Invalid index" });
      }

      images.images[index] = imgUrl;
      await images.save();
    }

    res.status(200).json({ message: "Image updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// =========== All Data ============ //

exports.getAllData = async (req, res) => {
  try {
    const [
      banner,
      mainSection,
      transfersForm,
      snowMobileForm,
      horseRidingForm,
      quadBikeForm,
      carouselImages,
    ] = await Promise.all([
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
