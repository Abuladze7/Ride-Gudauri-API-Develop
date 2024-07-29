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
  addApartItemToSection,
  deleteItemFromSection,
  deleteCarouselImage,
} = require("../controllers/homePageControllers");

// ========= All Data ========== //
/**
 * @swagger
 * /api/homepage:
 *   get:
 *     summary: Get all homepage data
 *     tags:
 *       - Home Page
 *     responses:
 *       200:
 *         description: Successfully retrieved homepage data
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
 *                         example: "66a0e5d8fda5e0633479f23d"
 *                       title:
 *                         type: string
 *                         example: "Test-title"
 *                       subtitle:
 *                         type: string
 *                         example: "Test-subtitle"
 *                       image:
 *                         type: object
 *                         properties:
 *                           public_id:
 *                             type: string
 *                             example: "string"
 *                           url:
 *                             type: string
 *                             example: "string"
 *                       createdAt:
 *                         type: string
 *                         example: "2024-07-24T11:30:32.814Z"
 *                       updatedAt:
 *                         type: string
 *                         example: "2024-07-24T11:30:32.814Z"
 *                 ourActivities:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "66a0e6d959398a8b6f99a2a9"
 *                     title:
 *                       type: string
 *                       example: "Our Activities"
 *                     items:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           image:
 *                             type: object
 *                             properties:
 *                               public_id:
 *                                 type: string
 *                                 example: "update_imgUrl.png"
 *                               url:
 *                                 type: string
 *                                 example: "string"
 *                           title:
 *                             type: string
 *                             example: "Ski Lessons"
 *                           subtitle:
 *                             type: string
 *                             example: "Embark on an unforgettable winter journey with our renowned ski school in Gudauri"
 *                           _id:
 *                             type: string
 *                             example: "66a0e6d959398a8b6f99a2aa"
 *                     createdAt:
 *                       type: string
 *                       example: "2024-07-24T11:34:49.919Z"
 *                     updatedAt:
 *                       type: string
 *                       example: "2024-07-24T11:35:24.139Z"
 *                 discountCoupon:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "66a0e84da107bc2410a3b9b6"
 *                     title:
 *                       type: string
 *                       example: "coupon title"
 *                     subtitle:
 *                       type: string
 *                       example: "coupon subtitle"
 *                     image:
 *                       type: object
 *                       properties:
 *                         public_id:
 *                           type: string
 *                           example: "updated_image"
 *                         url:
 *                           type: string
 *                           example: "string"
 *                     addressLink:
 *                       type: string
 *                       example: "string"
 *                     createdAt:
 *                       type: string
 *                       example: "2024-07-24T11:41:01.221Z"
 *                     updatedAt:
 *                       type: string
 *                       example: "2024-07-24T11:41:22.212Z"
 *                 welcomeSection:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "66a0e9e6db7dac7b6b75331d"
 *                     title:
 *                       type: string
 *                       example: "Welcome to Ride Gudauri"
 *                     subtitle:
 *                       type: string
 *                       example: "Discover Gudauri Adventures with RideGudauri..."
 *                     image:
 *                       type: object
 *                       properties:
 *                         public_id:
 *                           type: string
 *                           example: "updated_img_id"
 *                         url:
 *                           type: string
 *                           example: "updated_imgUrl.png"
 *                     createdAt:
 *                       type: string
 *                       example: "2024-07-24T11:47:50.346Z"
 *                     updatedAt:
 *                       type: string
 *                       example: "2024-07-24T11:48:20.697Z"
 *                 whatSetsApart:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "66a0eb6d47cfc4aae6719232"
 *                     title:
 *                       type: string
 *                       example: "What Sets Apart"
 *                     items:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           image:
 *                             type: object
 *                             properties:
 *                               public_id:
 *                                 type: string
 *                                 example: "img_public_id"
 *                               url:
 *                                 type: string
 *                                 example: "imgUrl_1.png"
 *                           title:
 *                             type: string
 *                             example: "Expertise and Local Insight"
 *                           subtitle:
 *                             type: string
 *                             example: "Benefit from our deep local knowledge and expertise in Gudauri..."
 *                           _id:
 *                             type: string
 *                             example: "66a0eb6d47cfc4aae6719233"
 *                     createdAt:
 *                       type: string
 *                       example: "2024-07-24T11:54:21.370Z"
 *                     updatedAt:
 *                       type: string
 *                       example: "2024-07-24T11:58:04.370Z"
 *                 wonderlandSection:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "66a0ed74a7d5d99b92a449e6"
 *                     title:
 *                       type: string
 *                       example: "Welcome to GUDAURI - Georgia's Alpine Wonderland"
 *                     subtitle:
 *                       type: string
 *                       example: "Gudauri is nothing short of a treasure nestled within our country's majestic landscapes..."
 *                     image:
 *                       type: object
 *                       properties:
 *                         public_id:
 *                           type: string
 *                           example: "updated_id"
 *                     createdAt:
 *                       type: string
 *                       example: "2024-07-24T12:03:00.358Z"
 *                     updatedAt:
 *                       type: string
 *                       example: "2024-07-24T12:04:18.563Z"
 *                 carouselImages:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "66a0eed296399d71af1b65dc"
 *                     images:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           public_id:
 *                             type: string
 *                             example: "image_id"
 *                           url:
 *                             type: string
 *                             example: "image_url"
 *                           _id:
 *                             type: string
 *                             example: "66a0eed296399d71af1b65dd"
 *                     createdAt:
 *                       type: string
 *                       example: "2024-07-24T12:08:50.388Z"
 *                     updatedAt:
 *                       type: string
 *                       example: "2024-07-24T12:16:55.153Z"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 */
router.get("/", getAllData);

// ========= Hero Section ========== //
/**
 * @swagger
 * /api/homepage/banner:
 *   post:
 *     summary: Creates a new banner
 *     tags:
 *       - Home Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the banner
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the banner
 *                 example: "string"
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     description: The public ID of the image
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     description: The URL of the image
 *                     example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the banner
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 title:
 *                   type: string
 *                   example: "string"
 *                 subtitle:
 *                   type: string
 *                   example: "string"
 *                 image:
 *                   type: object
 *                   properties:
 *                     public_id:
 *                       type: string
 *                       example: "string"
 *                     url:
 *                       type: string
 *                       example: "string"
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *
 * /api/homepage/banner/{id}:
 *   put:
 *     summary: Updates an existing banner
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
 *               title:
 *                 type: string
 *                 description: The title of the banner
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the banner
 *                 example: "string"
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     description: The public ID of the image
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     description: The URL of the image
 *                     example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the banner
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Banner updated successfully"
 *       404:
 *         description: Banner not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Banner not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 */
router.post("/banner", createBanner);
router.put("/banner/:id", updateBanner);

// ========== Our Activities ========== //
/**
 * @swagger
 * /api/homepage/ourActivitiesSection:
 *   post:
 *     summary: Creates a new "Our Activities" section
 *     tags:
 *       - Home Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the section
 *                 example: "string"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: The title of the item
 *                       example: "string"
 *                     subtitle:
 *                       type: string
 *                       description: The subtitle of the item
 *                       example: "string"
 *                     image:
 *                       type: object
 *                       properties:
 *                         public_id:
 *                           type: string
 *                           description: The public ID of the image
 *                           example: "string"
 *                         url:
 *                           type: string
 *                           description: The URL of the image
 *                           example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 title:
 *                   type: string
 *                   example: "string"
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "string"
 *                       title:
 *                         type: string
 *                         example: "string"
 *                       subtitle:
 *                         type: string
 *                         example: "string"
 *                       image:
 *                         type: object
 *                         properties:
 *                           public_id:
 *                             type: string
 *                             example: "string"
 *                           url:
 *                             type: string
 *                             example: "string"
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *
 *   put:
 *     summary: Updates the "Our Activities" section
 *     tags:
 *       - Home Page
 *     parameters:
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
 *                 example: "string"
 *               itemTitle:
 *                 type: string
 *                 description: The new title for the item
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The new subtitle for the item
 *                 example: "string"
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     description: The public ID of the image
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     description: The URL of the image
 *                     example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 title:
 *                   type: string
 *                   example: "string"
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "string"
 *                       title:
 *                         type: string
 *                         example: "string"
 *                       subtitle:
 *                         type: string
 *                         example: "string"
 *                       image:
 *                         type: object
 *                         properties:
 *                           public_id:
 *                             type: string
 *                             example: "string"
 *                           url:
 *                             type: string
 *                             example: "string"
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: Section or item not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 */
router.post("/ourActivitiesSection", createActivitiesSection);
router.put("/ourActivitiesSection", updateActivitySection);

// ========== Discount Coupon ========== //
/**
 * @swagger
 * /api/homepage/discountCoupon:
 *   post:
 *     summary: Creates a new discount coupon
 *     tags:
 *       - Home Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the discount coupon
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the discount coupon
 *                 example: "string"
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     description: The public ID of the image
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     description: The URL of the image
 *                     example: "string"
 *               addressLink:
 *                 type: string
 *                 description: The address link for the discount coupon
 *                 example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the discount coupon
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 title:
 *                   type: string
 *                   example: "string"
 *                 subtitle:
 *                   type: string
 *                   example: "string"
 *                 image:
 *                   type: object
 *                   properties:
 *                     public_id:
 *                       type: string
 *                       example: "string"
 *                     url:
 *                       type: string
 *                       example: "string"
 *                 addressLink:
 *                   type: string
 *                   example: "string"
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *
 * /api/homepage/discountCoupon/{id}:
 *   put:
 *     summary: Updates an existing discount coupon
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
 *                 description: The title of the discount coupon
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the discount coupon
 *                 example: "string"
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     description: The public ID of the image
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     description: The URL of the image
 *                     example: "string"
 *               addressLink:
 *                 type: string
 *                 description: The address link for the discount coupon
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the discount coupon
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Discount coupon updated successfully"
 *       404:
 *         description: Coupon not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Coupon not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 */
router.post("/discountCoupon", createDiscountCoupon);
router.put("/discountCoupon/:id", updateDiscountCoupon);

// ========== Welcome Section ========== //
/**
 * @swagger
 * /api/homepage/welcomeSection:
 *   post:
 *     summary: Creates a new welcome section
 *     tags:
 *       - Home Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the welcome section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the welcome section
 *                 example: "string"
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     description: The public ID of the image
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     description: The URL of the image
 *                     example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the welcome section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 title:
 *                   type: string
 *                   example: "string"
 *                 subtitle:
 *                   type: string
 *                   example: "string"
 *                 image:
 *                   type: object
 *                   properties:
 *                     public_id:
 *                       type: string
 *                       example: "string"
 *                     url:
 *                       type: string
 *                       example: "string"
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *
 * /api/homepage/welcomeSection/{id}:
 *   put:
 *     summary: Updates an existing welcome section
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
 *                 description: The title of the welcome section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the welcome section
 *                 example: "string"
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     description: The public ID of the image
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     description: The URL of the image
 *                     example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the welcome section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Section updated successfully"
 *       404:
 *         description: Welcome section not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Welcome section not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 */
router.post("/welcomeSection", createWelcomeSection);
router.put("/welcomeSection/:id", updateWelcomeSection);

// ========== What Sets Apart Section ========== //
/**
 * @swagger
 * /api/homepage/whatSetsApart:
 *   post:
 *     summary: Creates a new "What Sets Us Apart" section
 *     tags:
 *       - Home Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the section
 *                 example: "string"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: The title of the item
 *                       example: "string"
 *                     subtitle:
 *                       type: string
 *                       description: The subtitle of the item
 *                       example: "string"
 *                     image:
 *                       type: object
 *                       properties:
 *                         public_id:
 *                           type: string
 *                           description: The public ID of the image
 *                           example: "string"
 *                         url:
 *                           type: string
 *                           description: The URL of the image
 *                           example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 title:
 *                   type: string
 *                   example: "string"
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "string"
 *                       title:
 *                         type: string
 *                         example: "string"
 *                       subtitle:
 *                         type: string
 *                         example: "string"
 *                       image:
 *                         type: object
 *                         properties:
 *                           public_id:
 *                             type: string
 *                             example: "string"
 *                           url:
 *                             type: string
 *                             example: "string"
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *
 *   put:
 *     summary: Updates the "What Sets Us Apart" section
 *     tags:
 *       - Home Page
 *     parameters:
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
 *                 example: "string"
 *               itemTitle:
 *                 type: string
 *                 description: The new title for the item
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The new subtitle for the item
 *                 example: "string"
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     description: The public ID of the image
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     description: The URL of the image
 *                     example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Section updated successfully"
 *       404:
 *         description: Section or item not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Section or item not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *
 *
 * /api/homepage/whatSetsApart/item:
 *   post:
 *     summary: Adds an item to the "What Sets Us Apart" section
 *     tags:
 *       - Home Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the item
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the item
 *                 example: "string"
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     description: The public ID of the image
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     description: The URL of the image
 *                     example: "string"
 *     responses:
 *       201:
 *         description: Successfully added the item to the section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Item added successfully"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *
 * /api/homepage/whatSetsApart/item/{id}:
 *   delete:
 *     summary: Deletes an item from the "What Sets Us Apart" section
 *     tags:
 *       - Home Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the item to delete
 *     responses:
 *       200:
 *         description: Successfully deleted the item from the section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Item deleted successfully"
 *       404:
 *         description: Section or item not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Section or item not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 */
router.post("/whatSetsApart", createWhatSetsApartSection);
router.post("/whatSetsApart/item", addApartItemToSection);
router.put("/whatSetsApart", updateWhatSetsApartSection);
router.delete("/whatSetsApart/item/:id", deleteItemFromSection);

// ========== Wonderland Section =========== //
/**
 * @swagger
 * /api/homepage/wonderlandSection:
 *   post:
 *     summary: Creates a new wonderland section
 *     tags:
 *       - Home Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the wonderland section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the wonderland section
 *                 example: "string"
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     description: The public ID of the image
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     description: The URL of the image
 *                     example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the wonderland section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 title:
 *                   type: string
 *                   example: "string"
 *                 subtitle:
 *                   type: string
 *                   example: "string"
 *                 image:
 *                   type: object
 *                   properties:
 *                     public_id:
 *                       type: string
 *                       example: "string"
 *                     url:
 *                       type: string
 *                       example: "string"
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *
 * /api/homepage/wonderlandSection/{id}:
 *   put:
 *     summary: Updates an existing wonderland section
 *     tags:
 *       - Home Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the wonderland section to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the wonderland section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the wonderland section
 *                 example: "string"
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     description: The public ID of the image
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     description: The URL of the image
 *                     example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the wonderland section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Section updated successfully"
 *       404:
 *         description: Wonderland section not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Wonderland section not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 */
router.post("/wonderlandSection", createWonderlandSection);
router.put("/wonderlandSection/:id", updateWonderlandSection);

// ========== Carousel Images ========== //
/**
 * @swagger
 * /api/homepage/carouselImage:
 *   post:
 *     summary: Create or Add Carousel Images
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
 *                   type: object
 *                   properties:
 *                     public_id:
 *                       type: string
 *                       description: The public ID of the image
 *                       example: "string"
 *                     url:
 *                       type: string
 *                       description: The URL of the image
 *                       example: "string"
 *             required:
 *               - images
 *     responses:
 *       201:
 *         description: Carousel image(s) created or added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Images added successfully"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while processing the request"
 *
 * /api/homepage/carouselImage/{id}:
 *   put:
 *     summary: Update Carousel Image
 *     tags:
 *       - Home Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the image to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     description: The new public ID of the image
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     description: The new URL of the image
 *                     example: "string"
 *             required:
 *               - image
 *     responses:
 *       200:
 *         description: Image updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Image updated successfully"
 *       404:
 *         description: Image or carousel not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Image not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while processing the request"
 *
 *   delete:
 *     summary: Delete Carousel Image
 *     tags:
 *       - Home Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the image to delete
 *     responses:
 *       200:
 *         description: Image deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Image deleted successfully"
 *       404:
 *         description: Image or carousel not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Image not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while processing the request"
 */
router.post("/carouselImage", createCarouselImage);
router
  .route("/carouselImage/:id")
  .put(updateCarouselImage)
  .delete(deleteCarouselImage);

module.exports = router;
