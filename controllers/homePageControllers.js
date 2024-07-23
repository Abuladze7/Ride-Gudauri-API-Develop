const Banner = require("../models/homePage/bannerSchema");
const Activity = require("../models/homePage/activitySchema");
const DiscountCoupon = require("../models/homePage/discountCoupon");
const HomePageWhatSetsApartSection = require("../models/homePage/whatSetsApartSection");
const WelcomeSection = require("../models/homePage/welcomeSection");
const WonderlandSection = require("../models/homePage/wonderlandSection");
const HomepageCarouselImages = require("../models/homePage/carouselImages");

// ========= Hero Section ========== //

exports.createBanner = async (req, res) => {
  try {
    const banner = await Banner.create(req.body);
    res.status(201).json(banner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBanner = async (req, res) => {
  try {
    await Banner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
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
    const { sectionTitle, itemTitle, subtitle, imgUrl } = req.body;

    const section = await Activity.findOne();

    if (!section) return res.status(404).json({ message: "Section not found" });

    let item;
    if (itemId) {
      item = section.items.id(itemId);
      if (!item) return res.status(404).json({ message: "Item not found" });

      if (itemTitle) item.title = itemTitle;
      if (subtitle) item.subtitle = subtitle;
      if (imgUrl) item.imgUrl = imgUrl;
    }

    if (sectionTitle) section.title = sectionTitle;

    await section.save();
    res.status(200).json({ message: "Section updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createActivity = async (req, res) => {
  try {
    const activity = await Activity.create(req.body);
    res.status(201).json(activity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// exports.updateActivity = async (req, res) => {
//   try {
//     const activity = await Activity.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!activity) {
//       return res.status(404).json({ message: "Activity not found" });
//     }

//     res.status(200).json(activity);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

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
    const discountCoupon = await DiscountCoupon.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!discountCoupon) {
      return res.status(404).json({ message: "Discount coupon not found" });
    }

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
    const welcomeSection = await WelcomeSection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
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

exports.updateWhatSetsApartSection = async (req, res) => {
  try {
    const { itemId } = req.query;
    const { sectionTitle, itemTitle, subtitle, imgUrl } = req.body;

    const section = await HomePageWhatSetsApartSection.findOne();

    if (!section) return res.status(404).json({ message: "Section not found" });

    let item;
    if (itemId) {
      item = section.items.id(itemId);
      if (!item) return res.status(404).json({ message: "Item not found" });

      if (itemTitle) item.title = itemTitle;
      if (subtitle) item.subtitle = subtitle;
      if (imgUrl) item.imgUrl = imgUrl;
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
    const wonderlandSection = await WonderlandSection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
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

    if (!Array.isArray(images) && typeof images === "string") {
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
    const { index } = req.query;
    const { imgUrl } = req.body;

    const images = await HomepageCarouselImages.findOne();
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
    const [
      banner,
      ourActivities,
      discountCoupon,
      whatSetsApart,
      welcomeSection,
      wonderlandSection,
      carouselImages,
    ] = await Promise.all([
      Banner.find().lean(),
      Activity.findOne(),
      DiscountCoupon.findOne().lean(),
      HomePageWhatSetsApartSection.findOne().lean(),
      WelcomeSection.findOne().lean(),
      WonderlandSection.findOne().lean(),
      HomepageCarouselImages.findOne().lean(),
    ]);

    const homePage = {
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
