const ContactPageFaqTitles = require("../models/contact-page/contactPageFaqTitlesModel");
const ContactPageFaqQuestion = require("../models/contact-page/contactPageFaqQuestionsModel");
const ContactPageCarouselImage = require("../models/contact-page/contactPageCarouselImageModel");
const ContactPageBanner = require("../models/contact-page/contactPageBannerModel");
const cloudinary = require("../config/cloudinary");

// ========== SEO =========== //

// ========== Banner ========== //
exports.createContactPageBanner = async (req, res) => {
  try {
    const { images } = req.body;
    let banner = await ContactPageBanner.findOne();
    if (!banner) {
      banner = await ContactPageBanner.create({
        images: [...images],
      });

      return res.status(201).json({ message: "Images Created successfully" });
    }

    if (!Array.isArray(images) && typeof images === "object") {
      banner.images.push(images);
      await banner.save();

      return res.status(201).json({ message: "Image added successfully" });
    }

    banner.images = [...banner.images, ...images];
    await banner.save();
    res.status(201).json({ message: "Images added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateContactPageBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const { image } = req.body;

    const banner = await ContactPageBanner.findOne();
    if (!banner) return res.status(404).json({ message: "Images not found" });

    const img = banner.images.id(id);
    if (!img) return res.status(404).json({ message: "Image not found" });

    if (img.public_id) {
      await cloudinary.uploader.destroy(img.public_id);
    }

    img.public_id = image.public_id;
    img.url = image.url;

    await banner.save();

    res.status(200).json({ message: "Image updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteContactPageBanner = async (req, res) => {
  try {
    const { id } = req.params;

    const banner = await ContactPageBanner.findOne();
    if (!banner) return res.status(404).json({ message: "Images not found" });

    const index = banner.images.findIndex((img) => img._id.toString() === id);

    if (index === -1)
      return res.status(404).json({ message: "Images not found" });

    const img = banner.images[index];

    if (!img) return res.status(404).json({ message: "Image not found" });

    if (img.public_id) {
      await cloudinary.uploader.destroy(img.public_id);
    }

    banner.images.splice(index, 1);
    await banner.save();

    res.status(200).json({ message: "Image deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ========== FAQ Title ========== //

exports.createContactPageFaqTitle = async (req, res) => {
  try {
    const faq = await ContactPageFaqTitles.create(req.body);

    res.status(201).json({ message: "Title created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateContactPageFaqTitle = async (req, res) => {
  try {
    const faq = await ContactPageFaqTitles.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!faq) {
      return res.status(404).json({ message: "FAQ not found" });
    }

    res.json({ message: "FAQ title added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteContactPageFaqTitle = async (req, res) => {
  try {
    const faq = await ContactPageFaqTitles.findByIdAndDelete(req.params.id);
    if (!faq) {
      return res.status(404).json({ message: "Title not found" });
    }

    await ContactPageFaqQuestion.deleteMany({
      titleId: req.params.id,
    });

    res.json({ message: "FAQ Title and its questions successfully deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== FAQ Questions ========== //

exports.createContactPageFaqQuestion = async (req, res) => {
  try {
    const { question, answer, titleId } = req.body;
    const faqTitle = await ContactPageFaqTitles.findById(titleId);
    if (!faqTitle) {
      return res
        .status(404)
        .json({ message: "FAQ Title with this id not found. Enter valid id" });
    }

    await ContactPageFaqQuestion.create({
      question,
      answer,
      titleId,
    });

    res.status(201).json({ message: "FAQ question created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateContactPageFaqQuestion = async (req, res) => {
  try {
    const question = await ContactPageFaqQuestion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!question) {
      return res.status(404).json({ message: "FAQ Question not found" });
    }

    res.status(200).json({ message: "FAQ Question updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteContactPageFaqQuestion = async (req, res) => {
  try {
    const question = await ContactPageFaqQuestion.findByIdAndDelete(
      req.params.id
    );

    if (!question) {
      return res.status(404).json({ message: "FAQ Question not found" });
    }

    res.json({ message: "FAQ Question successfully deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Carousel Images ========== //
exports.createContactPageCarouselImage = async (req, res) => {
  try {
    const { images } = req.body;
    let carouselImages = await ContactPageCarouselImage.findOne();
    if (!carouselImages) {
      carouselImages = await ContactPageCarouselImage.create({
        images: [...images],
      });
      return res
        .status(201)
        .json({ message: "Carousel Image created successfully" });
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

exports.updateContactPageCarouselImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { image } = req.body;

    const carousel = await ContactPageCarouselImage.findOne();
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

exports.deleteContactPageCarouselImage = async (req, res) => {
  try {
    const { id } = req.params;

    const carousel = await ContactPageCarouselImage.findOne();
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
// ========== All Data ========== //

exports.getAllData = async (req, res) => {
  try {
    const [banner, faqTitles, faqQuestions, carouselImages] = await Promise.all(
      [
        ContactPageBanner.findOne().lean(),
        ContactPageFaqTitles.find().lean(),
        ContactPageFaqQuestion.find().lean(),
        ContactPageCarouselImage.findOne().lean(),
      ]
    );

    const faq = faqTitles.map((e) => ({
      _id: e._id,
      title: e.title,
      items: faqQuestions.filter(
        (q) => q.titleId.toString() === e._id.toString()
      ),
    }));

    const contactPage = {
      banner,
      faqTitles,
      faqQuestions,
      faq,
      carouselImages,
    };

    res.status(200).json(contactPage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
