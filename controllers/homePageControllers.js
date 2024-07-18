const Banner = require("../models/homePage/bannerSchema");
const OurActivities = require("../models/homePage/activitiesSection");
const Activity = require("../models/homePage/activitySchema");
const DiscountCoupon = require("../models/homePage/discountCoupon");
const WhatSetsApartSectionTitle = require("../models/homePage/whatSetsApartSection");
const WhatSetsApartItem = require("../models/homePage/whatSetsApartItem");
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
    const updatedBanner = await Banner.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json(updatedBanner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== Our Activities ========== //

exports.createActivitiesSection = async (req, res) => {
  try {
    const { title, items } = req.body;
    let activityTitle;

    if (title) {
      activityTitle = await OurActivities.create({ title });
    }

    let activitiesData;
    if (items) {
      activitiesData = await Activity.create([...items]);
    }

    res.status(201).json({
      title: title && activityTitle.title,
      items: activitiesData,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateActivitySection = async (req, res) => {
  try {
    const { titleId, itemId } = req.query;
    const { sectionTitle, itemTitle, subtitle, imgUrl } = req.body;

    let activitySectionTitle;
    if (titleId) {
      activitySectionTitle = await OurActivities.findByIdAndUpdate(
        titleId,
        { title: sectionTitle },
        { new: true, runValidators: true }
      );
    }
    let item;
    if (itemId) {
      item = await Activity.findByIdAndUpdate(
        itemId,
        {
          title: itemTitle,
          subtitle,
          imgUrl,
        },
        { new: true, runValidators: true }
      );
    }
    res.status(200).json({
      title: activitySectionTitle?.title,
      item,
    });
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

    res.status(200).json(discountCoupon);
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

    res.status(200).json(welcomeSection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== What Sets Apart Section ========== //

exports.createWhatSetsApartSection = async (req, res) => {
  try {
    const { title, items } = req.body;
    let setApartTitle;

    if (title) {
      setApartTitle = await WhatSetsApartSectionTitle.create({ title });
    }

    let setsApartItems;
    if (items) {
      setsApartItems = await WhatSetsApartItem.create([...items]);
    }

    res.status(201).json({
      title: title && setApartTitle.title,
      items: setsApartItems,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateWhatSetsApartSection = async (req, res) => {
  try {
    const { titleId, itemId } = req.query;
    const { sectionTitle, itemTitle, subtitle, imgUrl } = req.body;

    let setsApartTitle;
    if (titleId) {
      setsApartTitle = await WhatSetsApartSectionTitle.findByIdAndUpdate(
        titleId,
        { title: sectionTitle },
        { new: true, runValidators: true }
      );
    }
    let item;
    if (itemId) {
      item = await WhatSetsApartItem.findByIdAndUpdate(
        itemId,
        {
          title: itemTitle,
          subtitle,
          imgUrl,
        },
        { new: true, runValidators: true }
      );
    }
    res.status(200).json({
      title: setsApartTitle?.title,
      item,
    });
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

    res.status(200).json(wonderlandSection);
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
      return res.status(201).json(carouselImages);
    }

    if (!Array.isArray(images) && typeof images === "string") {
      carouselImages.images.push(images);
      const updatedCarouselImages = await carouselImages.save();
      return res.status(201).json(updatedCarouselImages);
    }

    carouselImages.images = [...carouselImages.images, ...images];
    const updatedCarouselImages = await carouselImages.save();
    res.status(201).json(updatedCarouselImages);
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

    let carouselImages;
    if (index) {
      if (index > images.images.length - 1 || index < 0) {
        return res.status(400).json({ message: "Invalid index" });
      }

      images.images[index] = imgUrl;
      carouselImages = await images.save();
    }

    res.status(200).json(carouselImages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========== All Data ========== //

exports.getAllData = async (req, res) => {
  try {
    const banner = await Banner.find().lean();
    const activitiesSectionTitle = await OurActivities.findOne().lean();
    const activities = await Activity.find();
    const discountCoupon = await DiscountCoupon.findOne().lean();
    const setsApart = await WhatSetsApartSectionTitle.findOne().lean();
    const apartItems = await WhatSetsApartItem.find().lean();
    const welcomeSection = await WelcomeSection.findOne().lean();
    const wonderlandSection = await WonderlandSection.findOne().lean();
    const carouselImages = await HomepageCarouselImages.findOne().lean();

    const homePage = {
      banner,
      ourActivities: {
        title: activitiesSectionTitle.title,
        _id: activitiesSectionTitle._id,
        items: activities,
      },
      discountCoupon,
      welcomeSection,
      whatSetsApart: {
        title: setsApart.title,
        _id: setsApart._id,
        items: apartItems,
      },
      wonderlandSection,
      carouselImages,
    };

    res.status(200).json(homePage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
