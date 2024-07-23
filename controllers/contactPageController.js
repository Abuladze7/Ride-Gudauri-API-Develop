const ContactPageFaqTitles = require("../models/contact-page/contactPageFaqTitlesModel");
const ContactPageFaqQuestion = require("../models/contact-page/contactPageFaqQuestionsModel");
const ContactPageCarouselImage = require("../models/contact-page/contactPageCarouselImageModel");
// ========== FAQ Title ========== //

exports.createContactPageFaqTitle = async (req, res) => {
  try {
    const faq = await ContactPageFaqTitles.create(req.body);

    res.status(201).json(faq);
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

exports.updateContactPageCarouselImage = async (req, res) => {
  try {
    const { index } = req.query;
    const { imgUrl } = req.body;

    const images = await ContactPageCarouselImage.findOne();

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

// ========== All Data ========== //

exports.getAllData = async (req, res) => {
  try {
    const [faqTitles, faqQuestions, carouselImages] = await Promise.all([
      ContactPageFaqTitles.find().lean(),
      ContactPageFaqQuestion.find().lean(),
      ContactPageCarouselImage.findOne().lean(),
    ]);

    const faq = faqTitles.map((e) => ({
      _id: e._id,
      title: e.title,
      items: faqQuestions.filter(
        (q) => q.titleId.toString() === e._id.toString()
      ),
    }));

    const contactPage = {
      faq,
      carouselImages,
    };

    res.status(200).json(contactPage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
