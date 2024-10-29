const Banner = require("../models/homePage/bannerSchema");
const Activity = require("../models/homePage/activitySchema");
const DiscountCoupon = require("../models/homePage/discountCoupon");
const HomePageWhatSetsApartSection = require("../models/homePage/whatSetsApartSection");
const WelcomeSection = require("../models/homePage/welcomeSection");
const WonderlandSection = require("../models/homePage/wonderlandSection");
const HomepageCarouselImages = require("../models/homePage/carouselImages");
const HomepagePromotionPopup = require("../models/homePage/promotionSectionModel");
const cloudinary = require("../config/cloudinary");

// ========= Promotion Section ========= //
exports.createPopup = async (req, res) => {
  try {
    const popup = await HomepagePromotionPopup.create(req.body);

    res.status(201).json(popup);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatePopup = async (req, res) => {
  try {
    const { title, subtitle, image, isShow } = req.body;
    const popup = await HomepagePromotionPopup.findById(req.params.id);

    if (!popup) return res.status(404).json({ message: "Section not found" });

    if (image) {
      const imgId = popup.image.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }

    await HomepagePromotionPopup.findByIdAndUpdate(req.params.id, {
      title,
      subtitle,
      image,
      isShow,
    });

    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========= Hero Section ========= //

exports.createBanner = async (req, res) => {
  try {
    const { title, subtitle, image } = req.body;

    const banner = await Banner.create({
      title,
      subtitle,
      image,
    });
    res.status(201).json(banner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBanner = async (req, res) => {
  try {
    const { title, subtitle, image } = req.body;
    const banner = await Banner.findById(req.params.id);
    if (!banner) return res.status(404).json({ message: "Banner not found" });

    if (image) {
      const imgId = banner.image.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }

    await Banner.findByIdAndUpdate(
      { _id: req.params.id },
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

    res.status(200).json({ message: "Banner updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Our Activities ========== //

exports.createActivitiesSection = async (req, res) => {
  try {
    const section = await Activity.create(req.body);

    res.status(201).json(section);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateActivitySection = async (req, res) => {
  try {
    const { itemId } = req.query;
    const { sectionTitle, itemTitle, subtitle, image } = req.body;

    const section = await Activity.findOne();

    if (!section) return res.status(404).json({ message: "Section not found" });

    let item;
    if (itemId) {
      item = section.items.id(itemId);
      if (!item) return res.status(404).json({ message: "Item not found" });

      if (itemTitle) item.title = itemTitle;

      if (subtitle) item.subtitle = subtitle;

      if (image) {
        const imgId = item.image.public_id;

        if (imgId) {
          await cloudinary.uploader.destroy(imgId);
        }

        item.image = image;
      }
    }

    if (sectionTitle) section.title = sectionTitle;

    await section.save();
    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Discount Coupon ========== //

exports.createDiscountCoupon = async (req, res) => {
  try {
    const discountCoupon = await DiscountCoupon.create(req.body);
    res.status(201).json(discountCoupon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateDiscountCoupon = async (req, res) => {
  try {
    const { title, subtitle, image } = req.body;

    const discountCoupon = await DiscountCoupon.findById(req.params.id);

    if (!discountCoupon)
      return res.status(404).json({ message: "Coupon not found" });

    if (image) {
      const imgId = discountCoupon.image.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }

    await DiscountCoupon.findByIdAndUpdate(
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

    res.status(200).json({ message: "Discount coupon updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Welcome Section ========== //

exports.createWelcomeSection = async (req, res) => {
  try {
    const welcomeSection = await WelcomeSection.create(req.body);
    res.status(201).json(welcomeSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateWelcomeSection = async (req, res) => {
  try {
    const { title, subtitle, image } = req.body;
    const welcomeSection = await WelcomeSection.findById(req.params.id);

    if (image) {
      const imgId = welcomeSection.image.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }

    await WelcomeSection.findByIdAndUpdate(
      req.params.id,
      { title, subtitle, image },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!welcomeSection) {
      return res.status(404).json({ message: "Welcome section not found" });
    }

    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== What Sets Apart Section ========== //

exports.createWhatSetsApartSection = async (req, res) => {
  try {
    const section = await HomePageWhatSetsApartSection.create(req.body);

    res.status(201).json(section);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addApartItemToSection = async (req, res) => {
  try {
    const { title, subtitle, image } = req.body;
    const section = await HomePageWhatSetsApartSection.findOne();

    if (!section) res.status(404).json({ message: "Section not found" });

    const newItem = { title, subtitle, image };
    section.items.push(newItem);
    await section.save();

    res.status(200).json({ message: "Item added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteItemFromSection = async (req, res) => {
  try {
    const { id } = req.params;
    const section = await HomePageWhatSetsApartSection.findOne();

    if (!section) res.status(404).json({ message: "Section not found" });

    const itemIndex = section.items.findIndex((e) => e._id.toString() === id);
    if (itemIndex === -1)
      return res.status(404).json({ message: "Item not found" });

    section.items.splice(itemIndex, 1);
    await section.save();

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateWhatSetsApartSection = async (req, res) => {
  try {
    const { itemId } = req.query;
    const { sectionTitle, itemTitle, subtitle, image } = req.body;

    const section = await HomePageWhatSetsApartSection.findOne();

    if (!section) return res.status(404).json({ message: "Section not found" });

    let item;
    if (itemId) {
      item = section.items.id(itemId);
      if (!item) return res.status(404).json({ message: "Item not found" });

      if (itemTitle) item.title = itemTitle;

      if (subtitle) item.subtitle = subtitle;

      if (image) {
        const imageId = item.image.public_id;

        if (imageId) {
          await cloudinary.uploader.destroy(imageId);
        }

        item.image = image;
      }
    }

    if (sectionTitle) section.title = sectionTitle;

    await section.save();
    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Wonderland Section =========== //

exports.createWonderlandSection = async (req, res) => {
  try {
    const wonderlandSection = await WonderlandSection.create(req.body);
    res.status(201).json(wonderlandSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateWonderlandSection = async (req, res) => {
  try {
    const { title, subtitle, image } = req.body;
    const wonderlandSection = await WonderlandSection.findById(req.params.id);

    if (image) {
      const imgId = wonderlandSection.image.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }

    await WonderlandSection.findByIdAndUpdate(
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

    if (!wonderlandSection) {
      return res.status(404).json({ message: "Wonderland section not found" });
    }

    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Carousel Images ========== //

exports.createCarouselImage = async (req, res) => {
  try {
    const { images } = req.body;
    let carouselImages = await HomepageCarouselImages.findOne();
    if (!carouselImages) {
      carouselImages = await HomepageCarouselImages.create({
        images: [...images],
      });
      return res.status(201).json({ message: "Images Created successfully" });
    }

    if (!Array.isArray(images) && typeof images === "object") {
      carouselImages.images.push(images);
      await carouselImages.save();
      return res.status(201).json("Image added successfully");
    }

    carouselImages.images = [...carouselImages.images, ...images];
    await carouselImages.save();
    res.status(201).json({ message: "Images added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCarouselImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { image } = req.body;

    const carousel = await HomepageCarouselImages.findOne();
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

exports.deleteCarouselImage = async (req, res) => {
  try {
    const { id } = req.params;

    const carousel = await HomepageCarouselImages.findOne();
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
    const [
      popup,
      banner,
      ourActivities,
      discountCoupon,
      whatSetsApart,
      welcomeSection,
      wonderlandSection,
      carouselImages,
    ] = await Promise.all([
      HomepagePromotionPopup.findOne().lean(),
      Banner.find().lean(),
      Activity.findOne(),
      DiscountCoupon.findOne().lean(),
      HomePageWhatSetsApartSection.findOne().lean(),
      WelcomeSection.findOne().lean(),
      WonderlandSection.findOne().lean(),
      HomepageCarouselImages.findOne().lean(),
    ]);

    const homePage = {
      popup,
      banner,
      ourActivities,
      discountCoupon,
      welcomeSection,
      whatSetsApart,
      wonderlandSection,
      carouselImages,
    };

    res.status(200).json(homePage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
