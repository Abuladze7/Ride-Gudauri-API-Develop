const {
  getAllData,
  createGudauriBanner,
  addImageToBanner,
  updateGudauriBanner,
  createGudauriWonderlandSection,
  updateGudauriWonderlandSection,
  createPlanTripSection,
  updatePlanTripSection,
  createWhyGudauriSection,
  updateWhyGudauriSection,
  createGudauriSpiritSection,
  updateGudauriSpiritSection,
  createHowToGetThereSection,
  updateHowToGetThereSection,
  createGudauriCarouselImage,
  updateGudauriCarouselImage,
  deleteGudauriCarouselImage,
  deleteImageToBanner,
  createGudauriPageSeoOptimization,
  updateGudauriPageSeoOptimization,
} = require("../controllers/gudauriPageController");
const admin = require("../middleware/adminMiddleware");
const auth = require("../middleware/authMiddleware");

const router = require("express").Router();

// =========== All Data ============ //
/**
 * @swagger
 * /api/gudauriPage:
 *   get:
 *     tags:
 *       - Gudauri Page
 *     summary: Retrieve all Gudauri page data
 *     description: Get SEO, banner, wonderland section, plan trip section, why Gudauri section, spirit section, how to get there section, and carousel images for the Gudauri page.
 *     responses:
 *       200:
 *         description: A JSON object containing all Gudauri page data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 seo:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     page_title:
 *                       type: string
 *                     meta_title:
 *                       type: string
 *                     meta_description:
 *                       type: string
 *                     meta_keywords:
 *                       type: string
 *                     meta_url:
 *                       type: string
 *                     meta_img:
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
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     images:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           public_id:
 *                             type: string
 *                           url:
 *                             type: string
 *                           _id:
 *                             type: string
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
 *                         url:
 *                           type: string
 *                         public_id:
 *                           type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 planTripSection:
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
 *                         url:
 *                           type: string
 *                         public_id:
 *                           type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 whyGudauriSection:
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
 *                           url:
 *                             type: string
 *                           public_id:
 *                             type: string
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                 spiritSection:
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
 *                         url:
 *                           type: string
 *                         public_id:
 *                           type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 howToGetThereSection:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     subtitle:
 *                       type: string
 *                     description:
 *                       type: string
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
 *                           public_id:
 *                             type: string
 *                           url:
 *                             type: string
 *                           _id:
 *                             type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get("/", getAllData);

// ========== SEO ========== //
/**
 * @swagger
 * /api/gudauriPage/seo/{id}:
 *   put:
 *     tags:
 *       - Gudauri Page
 *     summary: Update Gudauri Page SEO Optimization
 *     description: Update an existing SEO optimization entry for the Gudauri page.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The SEO ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               page_title:
 *                 type: string
 *                 example: "Gudauri - Best Ski Resort"
 *               meta_title:
 *                 type: string
 *                 example: "Gudauri | Top Ski Resort in Georgia"
 *               meta_description:
 *                 type: string
 *                 example: "Experience the best skiing in Gudauri, Georgia. Find out more about our top-rated resort."
 *               meta_keywords:
 *                 type: string
 *                 example: "Gudauri, ski resort, Georgia, skiing, winter sports"
 *               meta_url:
 *                 type: string
 *                 example: "https://example.com/gudauri"
 *               meta_img:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     example: "sample_public_id"
 *                   url:
 *                     type: string
 *                     example: "https://example.com/images/contact-meta.png"
 *     responses:
 *       200:
 *         description: SEO optimization updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "SEO Optimization updated successfully"
 *       404:
 *         description: SEO not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "SEO not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post("/seo", auth, admin, createGudauriPageSeoOptimization);
router.put("/seo/:id", auth, admin, updateGudauriPageSeoOptimization);

// ========== Banner ========== //
/**
 * @swagger
 * /api/gudauriPage/banner:
 *   put:
 *     summary: Updates an existing banner
 *     tags: [Gudauri Page]
 *     parameters:
 *       - in: query
 *         name: imgId
 *         schema:
 *           type: string
 *         required: false
 *         description: The ID of the image to be updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                   url:
 *                     type: string
 *     responses:
 *       200:
 *         description: Banner updated successfully
 *       404:
 *         description: Banner or image not found
 *       500:
 *         description: Internal server error
 *
 * /api/gudauriPage/banner/images/add:
 *   post:
 *     summary: Adds a new image to the banner
 *     tags: [Gudauri Page]
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
 *                   url:
 *                     type: string
 *     responses:
 *       200:
 *         description: Image added successfully
 *       404:
 *         description: Banner not found
 *       500:
 *         description: Internal server error
 *
 * /api/gudauriPage/banner/images/{id}:
 *   delete:
 *     summary: Deletes an image from the banner
 *     tags: [Gudauri Page]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the image to be deleted
 *     responses:
 *       200:
 *         description: Image deleted successfully
 *       404:
 *         description: Banner or image not found
 *       500:
 *         description: Internal server error
 */
// router.post("/banner", createGudauriBanner);
router.put("/banner", auth, admin, updateGudauriBanner);
router.post("/banner/images/add", auth, admin, addImageToBanner);
router.delete("/banner/images/:id", auth, admin, deleteImageToBanner);

// ========== Gudauri Wonderland Section ========== //
/**
 * @swagger
 * /api/gudauriPage/wonderland/{id}:
 *   put:
 *     summary: Updates an existing Gudauri Wonderland section
 *     tags:
 *       - Gudauri Page
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
 *                 description: The new title for the Wonderland section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The new subtitle for the Wonderland section
 *                 example: "string"
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the Wonderland section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sections updated successfully"
 *       404:
 *         description: Wonderland section not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Section not found"
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
// router.post("/wonderland", createGudauriWonderlandSection);
router.put("/wonderland/:id", auth, admin, updateGudauriWonderlandSection);

// ========== Plan Trip Section ========== //
/**
 * @swagger
 * /api/gudauriPage/plantrip/{id}:
 *   put:
 *     summary: Updates an existing Plan Trip section
 *     tags:
 *       - Gudauri Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the Plan Trip section to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The new title for the Plan Trip section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The new subtitle for the Plan Trip section
 *                 example: "string"
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the Plan Trip section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: Plan Trip section not found
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
// router.post("/planTrip", createPlanTripSection);
router.put("/plantrip/:id", auth, admin, updatePlanTripSection);

// ========== Why Gudauri Section ========== //
/**
 * @swagger
 * /api/gudauriPage/whygudaurisection/{id}:
 *   put:
 *     summary: Updates an existing Why Gudauri section
 *     tags:
 *       - Gudauri Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the Why Gudauri section to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The new title for the Why Gudauri section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The new subtitle for the Why Gudauri section
 *                 example: "string"
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the Why Gudauri section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sections updated successfully"
 *       404:
 *         description: Why Gudauri section not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Section not found"
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
// router.post("/whygudaurisection", createWhyGudauriSection);
router.put("/whygudaurisection/:id", auth, admin, updateWhyGudauriSection);

// ========== Gudauri Spirit Section ========== //
/**
 * @swagger
 * /api/gudauriPage/spiritSection/{id}:
 *   put:
 *     summary: Updates an existing Gudauri Spirit section
 *     tags:
 *       - Gudauri Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the Gudauri Spirit section to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The new title for the Gudauri Spirit section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The new subtitle for the Gudauri Spirit section
 *                 example: "string"
 *               image:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the Gudauri Spirit section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: Gudauri Spirit section not found
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
// router.post("/spiritSection", createGudauriSpiritSection);
router.put("/spiritSection/:id", auth, admin, updateGudauriSpiritSection);

// =========== How To Get There Section ========== //
/**
 * @swagger
 * /api/gudauriPage/howtoget/{id}:
 *   put:
 *     summary: Updates an existing How to Get There section
 *     tags:
 *       - Gudauri Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the How to Get There section to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The new title for the How to Get There section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The new subtitle for the How to Get There section
 *                 example: "string"
 *               description:
 *                 type: string
 *                 description: The new detailed description of how to get there
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the How to Get There section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Section updated successfully"
 *       404:
 *         description: How to Get There section not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Section not found"
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
// router.post("/howtoget", createHowToGetThereSection);
router.put("/howtoget/:id", auth, admin, updateHowToGetThereSection);

// ========== Carousel Images ========== //
/**
 * @swagger
 * /api/gudauriPage/carouselImage:
 *   post:
 *     summary: Adds new images to the Gudauri carousel
 *     tags:
 *       - Gudauri Page
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
 *     responses:
 *       201:
 *         description: Successfully added new images to the carousel
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
 *
 * /api/gudauriPage/carouselImage/{id}:
 *   put:
 *     summary: Updates an existing image in the Gudauri carousel
 *     tags:
 *       - Gudauri Page
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
 *                     description: The public ID of the image
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     description: The URL of the image
 *                     example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the image
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       400:
 *         description: Invalid image ID or request body
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: Image not found
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
 *   delete:
 *     summary: Deletes an image from the Gudauri carousel
 *     tags:
 *       - Gudauri Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the image to delete
 *     responses:
 *       200:
 *         description: Successfully deleted the image
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: Image not found
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
router.post("/carouselImage", auth, admin, createGudauriCarouselImage);
router.put("/carouselImage/:id", auth, admin, updateGudauriCarouselImage);
router.delete("/carouselImage/:id", auth, admin, deleteGudauriCarouselImage);

module.exports = router;
