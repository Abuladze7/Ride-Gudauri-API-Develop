const SkiSchoolPageBanner = require("../models/ski-school-page/skiSchoolBannerModel");
const SkiSchoolPageAbout = require("../models/ski-school-page/skiSchoolAboutModel");
const SkiSchoolPageBenefits = require("../models/ski-school-page/skiSchoolBenefitsModel");
const SkiSchoolPageIndividualLesson = require("../models/ski-school-page/skiSchoolIndividualLessonModel");
const SkiSchoolPagePrivateGroupLesson = require("../models/ski-school-page/skiSchoolPrivateLessonModel");
const SkiSchoolPageRentalShop = require("../models/ski-school-page/skiSchoolShopModel");
const SkiSchoolPageRepair = require("../models/ski-school-page/skiSchoolRepairModel");
const SkiSchoolPageTeam = require("../models/ski-school-page/skiSchoolTeamModel");

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
    const { imgUrl } = req.body;
    const banner = await SkiSchoolPageBanner.findOne();

    if (!banner) return res.status(404).json({ message: "Banner not found" });

    banner.images.push(imgUrl);

    const updatedBanner = await banner.save();

    res.status(200).json(updatedBanner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSkiSchoolPageBanner = async (req, res) => {
  try {
    const { subtitle, imgUrl } = req.body;
    const { imgIndex } = req.query;

    const banner = await SkiSchoolPageBanner.findById(req.params.id);

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

    const updatedBanner = await banner.save();

    res.status(200).json(updatedBanner);
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
    const about = await SkiSchoolPageAbout.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!about) return res.status(404).json({ message: "About not found" });

    res.status(200).json(about);
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
    const { title, subtitle, imgUrl, description } = req.body;
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
        if (imgUrl) {
          item.imgUrl = imgUrl;
        }
      } else {
        return res.status(404).json({ message: "Item not found" });
      }
    }

    const updatedLesson = await lesson.save();

    res.status(200).json(updatedLesson);
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
    const { title, subtitle, imgUrl, description } = req.body;
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
        if (imgUrl) {
          item.imgUrl = imgUrl;
        }
      } else {
        return res.status(404).json({ message: "Item not found" });
      }
    }

    const updatedLesson = await lesson.save();

    res.status(200).json(updatedLesson);
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
    const { sectionTitle, subtitle, imgUrl } = req.body;
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
        if (imgUrl) {
          item.imgUrl = imgUrl;
        }
      } else {
        return res.status(404).json({ message: "Item not found" });
      }
    }

    const updatedBenefits = await benefits.save();
    res.status(200).json(updatedBenefits);
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
    const repairSection = await SkiSchoolPageRentalShop.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!repairSection)
      return res.status(404).json({ message: "Section not found" });

    res.status(200).json(repairSection);
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
    const repairSection = await SkiSchoolPageRepair.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!repairSection)
      return res.status(404).json({ message: "Section not found" });

    res.status(200).json(repairSection);
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
    const { sectionTitle, itemTitle, subtitle, imgUrl } = req.body;
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

        if (imgUrl) {
          item.imgUrl = imgUrl;
        }
      } else {
        return res.status(404).json({ message: "Item not found" });
      }
    }

    const updatedTeamSection = await teamSection.save();
    res.status(200).json(updatedTeamSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== All Data =========== //
exports.getAllData = async (req, res) => {
  try {
    const banner = await SkiSchoolPageBanner.findOne().lean();
    const aboutSection = await SkiSchoolPageAbout.findOne().lean();
    const individualLesson =
      await SkiSchoolPageIndividualLesson.findOne().lean();
    const groupLesson = await SkiSchoolPagePrivateGroupLesson.findOne().lean();
    const benefitsSection = await SkiSchoolPageBenefits.findOne().lean();
    const rentalShopSection = await SkiSchoolPageRentalShop.findOne().lean();
    const repairSection = await SkiSchoolPageRepair.findOne().lean();
    const teamSection = await SkiSchoolPageTeam.findOne().lean();

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
