const router = require("express").Router();
const {
  updateBanner,
  getAllData,
  createBanner,
  createActivitiesSection,
  updateActivitySection,
  createDiscountCoupon,
  updateDiscountCoupon,
  createWhatSetsApartSection,
  updateWhatSetsApartSection,
  createWelcomeSection,
  updateWelcomeSection,
  createWonderlandSection,
  updateWonderlandSection,
  createCarouselImage,
  updateCarouselImage,
} = require("../controllers/homePageControllers");
/**
 * @swagger
 * /api/homepage:
 *   get:
 *     summary: Retrieves all data for the homepage
 *     tags:
 *       - Home Page
 *     responses:
 *       200:
 *         description: Successfully retrieved all homepage data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 banner:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       subtitle:
 *                         type: string
 *                       imgUrl:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                       updatedAt:
 *                         type: string
 *                 ourActivities:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     _id:
 *                       type: string
 *                     items:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           imgUrl:
 *                             type: string
 *                           title:
 *                             type: string
 *                           subtitle:
 *                             type: string
 *                           createdAt:
 *                             type: string
 *                           updatedAt:
 *                             type: string
 *                 discountCoupon:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     subtitle:
 *                       type: string
 *                     imgUrl:
 *                       type: string
 *                     addressLink:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *                 welcomeSection:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     subtitle:
 *                       type: string
 *                     imgUrl:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *                 whatSetsApart:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     _id:
 *                       type: string
 *                     items:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           title:
 *                             type: string
 *                           subtitle:
 *                             type: string
 *                           imgUrl:
 *                             type: string
 *                           createdAt:
 *                             type: string
 *                           updatedAt:
 *                             type: string
 *                 wonderlandSection:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     subtitle:
 *                       type: string
 *                     imgUrl:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *                 carouselImages:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     imgUrls:
 *                       type: array
 *                       items:
 *                         type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       500:
 *         description: Internal server error
 */
router.get("/", getAllData);

// ========= Hero Section ========== //

router.post("/banner", createBanner);

/**
 * @swagger
 * title: homepage
 * /api/homepage/banner/{id}:
 *   put:
 *     summary: Updates a banner on the homepage
 *     tags:
 *       - Home Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the banner to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subtitle:
 *                 type: string
 *               imgUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated the banner
 *       400:
 *         description: Invalid ID supplied
 *       404:
 *         description: Banner not found
 *       500:
 *         description: Internal server error
 */
router.put("/banner/:id", updateBanner);

// ========== Our Activities ========== //
router.post("/ourActivitiesSection", createActivitiesSection);
/**
 * @swagger
 * title: homepage
 * /api/homepage/ourActivitiesSection:
 *   put:
 *     summary: Updates an activity section
 *     tags:
 *       - Home Page
 *     parameters:
 *       - in: query
 *         name: titleId
 *         schema:
 *           type: string
 *         description: The ID of the activity section title to update
 *       - in: query
 *         name: itemId
 *         schema:
 *           type: string
 *         description: The ID of the activity item to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sectionTitle:
 *                 type: string
 *                 description: The new title for the activity section
 *               itemTitle:
 *                 type: string
 *                 description: The new title for the activity item
 *               subtitle:
 *                 type: string
 *                 description: The new subtitle for the activity item
 *               imgUrl:
 *                 type: string
 *                 description: The new image URL for the activity item
 *     responses:
 *       200:
 *         description: Successfully updated the activity section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   description: The updated title of the activity section
 *                 item:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     subtitle:
 *                       type: string
 *                     imgUrl:
 *                       type: string
 *       400:
 *         description: Invalid ID supplied
 *       404:
 *         description: Activity section or item not found
 *       500:
 *         description: Internal server error
 */
router.put("/ourActivitiesSection", updateActivitySection);

// Create/Update activity
// router.post("/ourActivitiesSection/activity", createActivity);
// router.put("/ourActivitiesSection/activity/:id", updateActivity);

// ========== Discount Coupon ========== //
router.post("/discountCoupon", createDiscountCoupon);
/**
 * @swagger
 * /api/homepage/discountCoupon/{id}:
 *   put:
 *     summary: Updates a discount coupon
 *     tags:
 *       - Home Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the discount coupon to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The new title of the discount coupon
 *               subtitle:
 *                 type: string
 *                 description: The new subtitle of the discount coupon
 *               imgUrl:
 *                 type: string
 *                 description: The new image URL of the discount coupon
 *               addressLink:
 *                 type: string
 *                 description: The new address link of the discount coupon
 *     responses:
 *       200:
 *         description: Successfully updated the discount coupon
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The ID of the discount coupon
 *                 title:
 *                   type: string
 *                   description: The updated title of the discount coupon
 *                 subtitle:
 *                   type: string
 *                   description: The updated subtitle of the discount coupon
 *                 imgUrl:
 *                   type: string
 *                   description: The updated image URL of the discount coupon
 *                 addressLink:
 *                   type: string
 *                   description: The updated address link of the discount coupon
 *                 createdAt:
 *                   type: string
 *                   description: The creation date of the discount coupon
 *                 updatedAt:
 *                   type: string
 *                   description: The last update date of the discount coupon
 *       404:
 *         description: Discount coupon not found
 *       500:
 *         description: Internal server error
 */
router.put("/discountCoupon/:id", updateDiscountCoupon);

// ========== Welcome Section ========== //
router.post("/welcomeSection", createWelcomeSection);
/**
 * @swagger
 * /api/homepage/welcomeSection/{id}:
 *   put:
 *     summary: Updates a welcome section
 *     tags:
 *       - Home Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the welcome section to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The new title of the welcome section
 *               subtitle:
 *                 type: string
 *                 description: The new subtitle of the welcome section
 *               imgUrl:
 *                 type: string
 *                 description: The new image URL of the welcome section
 *     responses:
 *       200:
 *         description: Successfully updated the welcome section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The ID of the welcome section
 *                 title:
 *                   type: string
 *                   description: The updated title of the welcome section
 *                 subtitle:
 *                   type: string
 *                   description: The updated subtitle of the welcome section
 *                 imgUrl:
 *                   type: string
 *                   description: The updated image URL of the welcome section
 *                 createdAt:
 *                   type: string
 *                   description: The creation date of the welcome section
 *                 updatedAt:
 *                   type: string
 *                   description: The last update date of the welcome section
 *       404:
 *         description: Welcome section not found
 *       500:
 *         description: Internal server error
 */
router.put("/welcomeSection/:id", updateWelcomeSection);

// ========== What Sets Apart Section ========== //
router.post("/whatSetsApart", createWhatSetsApartSection);
/**
 * @swagger
 * /api/homepage/whatSetsApart/{id}:
 *   put:
 *     summary: Updates the "What Sets Us Apart" section
 *     tags:
 *       - Home Page
 *     parameters:
 *       - in: query
 *         name: titleId
 *         schema:
 *           type: string
 *         description: The ID of the section title to update
 *       - in: query
 *         name: itemId
 *         schema:
 *           type: string
 *         description: The ID of the item to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sectionTitle:
 *                 type: string
 *                 description: The new title for the section
 *               itemTitle:
 *                 type: string
 *                 description: The new title for the item
 *               subtitle:
 *                 type: string
 *                 description: The new subtitle for the item
 *               imgUrl:
 *                 type: string
 *                 description: The new image URL for the item
 *     responses:
 *       200:
 *         description: Successfully updated the section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   description: The updated title of the section
 *                 item:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     subtitle:
 *                       type: string
 *                     imgUrl:
 *                       type: string
 *       404:
 *         description: Section or item not found
 *       500:
 *         description: Internal server error
 */
router.put("/whatSetsApart/:id", updateWhatSetsApartSection);

// ========== Wonderland Section =========== //
router.post("/wonderlandSection", createWonderlandSection);
/**
 * @swagger
 * /api/homepage/wonderlandSection/{id}:
 *   put:
 *     summary: Updates a Wonderland section
 *     tags:
 *       - Home Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the Wonderland section to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The new title of the Wonderland section
 *               subtitle:
 *                 type: string
 *                 description: The new subtitle of the Wonderland section
 *               imgUrl:
 *                 type: string
 *                 description: The new image URL of the Wonderland section
 *     responses:
 *       200:
 *         description: Successfully updated the Wonderland section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The ID of the Wonderland section
 *                 title:
 *                   type: string
 *                   description: The updated title of the Wonderland section
 *                 subtitle:
 *                   type: string
 *                   description: The updated subtitle of the Wonderland section
 *                 imgUrl:
 *                   type: string
 *                   description: The updated image URL of the Wonderland section
 *                 createdAt:
 *                   type: string
 *                   description: The creation date of the Wonderland section
 *                 updatedAt:
 *                   type: string
 *                   description: The last update date of the Wonderland section
 *       404:
 *         description: Wonderland section not found
 *       500:
 *         description: Internal server error
 */
router.put("/wonderlandSection/:id", updateWonderlandSection);

// ========== Carousel Images ========== //
/**
 * @swagger
 * /api/homepage/carouselImages:
 *   post:
 *     summary: Creates a new carousel image or updates existing ones
 *     tags:
 *       - Home Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The URLs of the images to be added to the carousel
 *     responses:
 *       201:
 *         description: Successfully created or updated carousel images
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *       500:
 *         description: Internal server error
 *
 *   put:
 *     summary: Updates a carousel image by index
 *     tags:
 *       - Home Page
 *     parameters:
 *       - in: query
 *         name: index
 *         required: true
 *         schema:
 *           type: integer
 *         description: The index of the image to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               imgUrl:
 *                 type: string
 *                 description: The new URL of the image
 *     responses:
 *       200:
 *         description: Successfully updated the carousel image
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *       400:
 *         description: Invalid index
 *       500:
 *         description: Internal server error
 */
router.post("/carouselImages", createCarouselImage);
router.put("/carouselImages", updateCarouselImage);

module.exports = router;
