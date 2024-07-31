const SkiSchoolPageBanner = require("../models/ski-school-page/skiSchoolBannerModel");
const SkiSchoolPageAbout = require("../models/ski-school-page/skiSchoolAboutModel");
const SkiSchoolPageBenefits = require("../models/ski-school-page/skiSchoolBenefitsModel");
const SkiSchoolPageIndividualLesson = require("../models/ski-school-page/skiSchoolIndividualLessonModel");
const SkiSchoolPagePrivateGroupLesson = require("../models/ski-school-page/skiSchoolPrivateLessonModel");
const SkiSchoolPageRentalShop = require("../models/ski-school-page/skiSchoolShopModel");
const SkiSchoolPageRepair = require("../models/ski-school-page/skiSchoolRepairModel");
const SkiSchoolPageTeam = require("../models/ski-school-page/skiSchoolTeamModel");
const cloudinary = require("../config/cloudinary");
// ========== Banner ========== //

exports.createSkiSchoolPageBanner = async (req, res) => {
  try {
    const banner = await SkiSchoolPageBanner.create(req.body);

    res.status(201).json(banner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addImageToBanner = async (req, res) => {
  try {
    const { image } = req.body;
    const banner = await SkiSchoolPageBanner.findOne();
    if (!banner) return res.status(404).json({ message: "Banner not found" });

    banner.images.push(image);

    await banner.save();

    res.status(200).json({ message: "Image added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSkiSchoolPageBanner = async (req, res) => {
  try {
    const { title, subtitle, image } = req.body;
    const { imgId } = req.query;

    const banner = await SkiSchoolPageBanner.findOne();

    if (!banner) return res.status(404).json({ message: "Banner not found" });

    if (imgId && image && banner.images) {
      const imgIndex = banner.images.findIndex(
        (img) => img && img._id && img._id.toString() === imgId
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

exports.deleteImageToSkiSchoolPageBanner = async (req, res) => {
  try {
    const { id } = req.params;

    const banner = await SkiSchoolPageBanner.findOne();

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

// ========== About ========== //

exports.createSkiSchoolPageAbout = async (req, res) => {
  try {
    const about = await SkiSchoolPageAbout.create(req.body);

    res.status(201).json(about);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSkiSchoolPageAbout = async (req, res) => {
  try {
    const { title, subtitle, image } = req.body;
    const about = await SkiSchoolPageAbout.findById(req.params.id);

    if (!about) return res.status(404).json({ message: "About not found" });

    if (image) {
      const imgId = about.image.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }

    await SkiSchoolPageAbout.findByIdAndUpdate(
      req.params.id,
      {
        title,
        subtitle,
        image,
      },
      {
        new: true,
      }
    );

    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Individual Lessons ========== //

exports.createSkiSchoolIndividualLesson = async (req, res) => {
  try {
    const lesson = await SkiSchoolPageIndividualLesson.create(req.body);

    res.status(201).json(lesson);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSkiSchoolIndividualLesson = async (req, res) => {
  try {
    const { title, subtitle, image, description } = req.body;
    const { itemId } = req.query;

    const lesson = await SkiSchoolPageIndividualLesson.findOne();

    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    if (title) lesson.title = title;

    if (subtitle) lesson.subtitle = subtitle;

    if (itemId) {
      const item = lesson.items.id(itemId);

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

    await lesson.save();

    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Private Group Lessons ========== //

exports.createSkiSchoolPrivateGroupLesson = async (req, res) => {
  try {
    const lesson = await SkiSchoolPagePrivateGroupLesson.create(req.body);

    res.status(201).json(lesson);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSkiSchoolPrivateGroupLesson = async (req, res) => {
  try {
    const { title, subtitle, image, description } = req.body;
    const { itemId } = req.query;

    const lesson = await SkiSchoolPagePrivateGroupLesson.findOne();

    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    if (title) lesson.title = title;

    if (subtitle) lesson.subtitle = subtitle;

    if (itemId) {
      const item = lesson.items.id(itemId);
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

    await lesson.save();

    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Ski School Benefits ========== //

exports.createSkiSchoolPageBenefits = async (req, res) => {
  try {
    const benefits = await SkiSchoolPageBenefits.create(req.body);

    res.status(201).json(benefits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSkiSchoolPageBenefits = async (req, res) => {
  try {
    const { sectionTitle, subtitle, image } = req.body;
    const { itemId } = req.query;
    const benefits = await SkiSchoolPageBenefits.findOne();

    if (sectionTitle) {
      benefits.title = sectionTitle;
    }

    if (itemId) {
      const item = benefits.items.id(itemId);
      if (item) {
        if (subtitle) {
          item.subtitle = subtitle;
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

    await benefits.save();
    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Ski School Rental Section ========== //

exports.createSkiSchoolRentalShopSection = async (req, res) => {
  try {
    const repairSection = await SkiSchoolPageRentalShop.create(req.body);

    res.status(201).json(repairSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSkiSchoolRentalShopSection = async (req, res) => {
  try {
    const { title, subtitle, image } = req.body;
    const section = await SkiSchoolPageRentalShop.findById(req.params.id);

    if (!section) return res.status(404).json({ message: "Section not found" });

    if (image) {
      const imgId = section.image.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }

    await SkiSchoolPageRentalShop.findByIdAndUpdate(
      req.params.id,
      { title, subtitle, image },
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

// ========== Ski School Repair Section ========== //

exports.createSkiSchoolRepairSection = async (req, res) => {
  try {
    const repairSection = await SkiSchoolPageRepair.create(req.body);

    res.status(201).json(repairSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSkiSchoolRepairSection = async (req, res) => {
  try {
    const { title, subtitle, image } = req.body;
    const section = await SkiSchoolPageRepair.findById(req.params.id);

    if (!section) return res.status(404).json({ message: "Section not found" });

    if (image && section.image) {
      const imgId = section.image.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }

    await SkiSchoolPageRepair.findByIdAndUpdate(
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

// ========== Ski School Team Section ========== //

exports.createSkiSchoolTeamSection = async (req, res) => {
  try {
    const teamSection = await SkiSchoolPageTeam.create(req.body);

    res.status(201).json(teamSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSkiSchoolTEamSection = async (req, res) => {
  try {
    const { sectionTitle, itemTitle, subtitle, image } = req.body;
    const { itemId } = req.query;
    const teamSection = await SkiSchoolPageTeam.findOne();

    if (!teamSection)
      return res.status(404).json({ message: "Section not found." });

    if (sectionTitle) {
      teamSection.title = sectionTitle;
    }

    if (itemId) {
      const item = teamSection.items.id(itemId);

      if (item) {
        if (itemTitle) {
          item.title = itemTitle;
        }

        if (subtitle) {
          item.subtitle = subtitle;
        }

        if (image) {
          const imgId = item.image.public_id;
          if (imgId) await cloudinary.uploader.destroy(imgId);

          item.image = image;
        }
      } else {
        return res.status(404).json({ message: "Item not found" });
      }
    }

    await teamSection.save();
    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== All Data =========== //
exports.getAllData = async (req, res) => {
  try {
    const [
      banner,
      aboutSection,
      individualLesson,
      groupLesson,
      benefitsSection,
      rentalShopSection,
      repairSection,
      teamSection,
    ] = await Promise.all([
      SkiSchoolPageBanner.findOne().lean(),
      SkiSchoolPageAbout.findOne().lean(),
      SkiSchoolPageIndividualLesson.findOne().lean(),
      SkiSchoolPagePrivateGroupLesson.findOne().lean(),
      SkiSchoolPageBenefits.findOne().lean(),
      SkiSchoolPageRentalShop.findOne().lean(),
      SkiSchoolPageRepair.findOne().lean(),
      SkiSchoolPageTeam.findOne().lean(),
    ]);

    const skiSchoolPage = {
      banner,
      aboutSection,
      lessons: {
        individualLesson,
        groupLesson,
      },
      benefitsSection,
      rentalShopSection,
      repairSection,
      teamSection,
    };

    res.status(200).json(skiSchoolPage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
