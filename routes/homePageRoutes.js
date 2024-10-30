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
  createPopup,
  updatePopup,
  deleteBanner,
} = require("../controllers/homePageControllers");
const admin = require("../middleware/adminMiddleware");
const auth = require("../middleware/authMiddleware");

// ========= All Data ========= //
/**
 * @swagger
 * /api/homepage:
 *   get:
 *     summary: Retrieve all homepage sections data
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
 *                 popup:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     subtitle:
 *                       type: string
 *                     image:
 *                       type: object
 *                       properties:
 *                         public_id:
 *                           type: string
 *                         url:
 *                           type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 banner:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       title:
 *                         type: string
 *                       subtitle:
 *                         type: string
 *                       image:
 *                         type: object
 *                         properties:
 *                           public_id:
 *                             type: string
 *                           url:
 *                             type: string
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                 ourActivities:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
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
 *                           image:
 *                             type: object
 *                             properties:
 *                               public_id:
 *                                 type: string
 *                               url:
 *                                 type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 discountCoupon:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     subtitle:
 *                       type: string
 *                     image:
 *                       type: object
 *                       properties:
 *                         public_id:
 *                           type: string
 *                         url:
 *                           type: string
 *                     addressLink:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 welcomeSection:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     subtitle:
 *                       type: string
 *                     image:
 *                       type: object
 *                       properties:
 *                         public_id:
 *                           type: string
 *                         url:
 *                           type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 whatSetsApart:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
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
 *                           image:
 *                             type: object
 *                             properties:
 *                               public_id:
 *                                 type: string
 *                               url:
 *                                 type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 wonderlandSection:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     subtitle:
 *                       type: string
 *                     image:
 *                       type: object
 *                       properties:
 *                         public_id:
 *                           type: string
 *                         url:
 *                           type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 carouselImages:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     images:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           public_id:
 *                             type: string
 *                           url:
 *                             type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *       500:
 *         description: Internal server error
 */
router.get("/", getAllData);

// ========= Promotion Section ========= //
/**
 * @swagger
 * /api/homepage/popup:
 *   post:
 *     summary: Create a new homepage promotion popup
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
 *                 description: Title of the popup
 *               subtitle:
 *                 type: string
 *                 description: Subtitle of the popup
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     description: Image public ID
 *                   url:
 *                     type: string
 *                     description: Image URL
 *               isShow:
 *                 type: boolean
 *                 description: Whether the popup is shown
 *                 default: false
 *     responses:
 *       201:
 *         description: Successfully created a new homepage promotion popup
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 subtitle:
 *                   type: string
 *                 image:
 *                   type: object
 *                   properties:
 *                     public_id:
 *                       type: string
 *                     url:
 *                       type: string
 *                 isShow:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       500:
 *         description: Internal server error
 *
 * /api/homepage/popup/{id}:
 *   put:
 *     summary: Update an existing homepage promotion popup
 *     tags:
 *       - Home Page
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the popup to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               subtitle:
 *                 type: string
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                   url:
 *                     type: string
 *               isShow:
 *                 type: boolean
 *                 description: Whether the popup is shown
 *     responses:
 *       200:
 *         description: Successfully updated the homepage promotion popup
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Section updated successfully"
 *       404:
 *         description: Section not found
 *       500:
 *         description: Internal server error
 */
router.post("/popup", createPopup);
router.put("/popup/:id", updatePopup);

// ========= Hero Section ========= //
/**
 * @swagger
 * /api/homepage/banner:
 *   post:
 *     summary: Create a new homepage banner
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
 *                 example: "New Banner"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the banner
 *                 example: "This is the banner subtitle"
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     description: The public ID of the image
 *                     example: "image_public_id"
 *                   url:
 *                     type: string
 *                     description: The URL of the image
 *                     example: "https://example.com/image.jpg"
 *     responses:
 *       201:
 *         description: Successfully create the banner
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Banner created successfully"
 *       500:
 *         description: Internal server error
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
 *                 example: "Updated Banner"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the banner
 *                 example: "Updated subtitle"
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     description: The public ID of the image
 *                     example: "updated_image_id"
 *                   url:
 *                     type: string
 *                     description: The URL of the image
 *                     example: "https://example.com/updated_image.jpg"
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
 *                   example: "Internal server error"
 *
 *
 *   delete:
 *     summary: Deletes an existing banner
 *     tags:
 *       - Home Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the banner to delete
 *     responses:
 *       200:
 *         description: Successfully deleted the banner
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Banner deleted successfully"
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
 *                   example: "Internal server error"
 */
router.post("/banner", auth, admin, createBanner);
router.put("/banner/:id", auth, admin, updateBanner);
router.delete("/banner/:id", auth, admin, deleteBanner);

// ========= Our Activities ========= //
/**
 * @swagger
 * /api/homepage/ourActivitiesSection:
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
// router.post("/ourActivitiesSection", createActivitiesSection);
router.put("/ourActivitiesSection", auth, admin, updateActivitySection);

// ========= Discount Coupon ========= //
/**
 * @swagger
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
// router.post("/discountCoupon", createDiscountCoupon);
router.put("/discountCoupon/:id", auth, admin, updateDiscountCoupon);

// ========= Welcome Section ========= //
/**
 * @swagger
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
// router.post("/welcomeSection", createWelcomeSection);
router.put("/welcomeSection/:id", auth, admin, updateWelcomeSection);

// ========= What Sets Apart Section ========= //
/**
 * @swagger
 * /api/homepage/whatSetsApart:
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
// router.post("/whatSetsApart", createWhatSetsApartSection);
router.post("/whatSetsApart/item", auth, admin, addApartItemToSection);
router.put("/whatSetsApart", auth, admin, updateWhatSetsApartSection);
router.delete("/whatSetsApart/item/:id", auth, admin, deleteItemFromSection);

// ========= Wonderland Section ========== //
/**
 * @swagger
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
// router.post("/wonderlandSection", createWonderlandSection);
router.put("/wonderlandSection/:id", auth, admin, updateWonderlandSection);

// ========= Carousel Images ========= //
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
router.post("/carouselImage", auth, admin, createCarouselImage);
router
  .route("/carouselImage/:id")
  .put(auth, admin, updateCarouselImage)
  .delete(auth, admin, deleteCarouselImage);

module.exports = router;
