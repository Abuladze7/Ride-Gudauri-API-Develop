const {
  getAllData,
  createParaglidingPageMainSection,
  updateParaglidingMainSectionSection,
  createParaglidingFormSection,
  updateParaglidingFormSection,
  createParaglidingCarouselImage,
  updateParaglidingCarouselImage,
  createParaglidingPageBanner,
  updateParaglidingPageBanner,
  addImageToBanner,
  deleteImageToBanner,
  deleteParaglidingPageCarouselImage,
} = require("../controllers/paraglidingPageController");
const admin = require("../middleware/adminMiddleware");
const auth = require("../middleware/authMiddleware");

const router = require("express").Router();

// =========== All Data ============ //
/**
 * @swagger
 * /api/paraglidingPage:
 *   get:
 *     summary: Retrieves all data for the Paragliding page
 *     tags: [Paragliding Page]
 *     responses:
 *       200:
 *         description: Successfully retrieved all data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 banner:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     subtitle:
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
 *                 mainSection:
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
 *                 formSection:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     subtitle:
 *                       type: string
 *                     items:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           description:
 *                             type: string
 *                           image:
 *                             type: object
 *                             properties:
 *                               public_id:
 *                                 type: string
 *                               url:
 *                                 type: string
 *                           _id:
 *                             type: string
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
 */
router.get("/", getAllData);

// ========== Banner ============ //
/**
 * @swagger
 * /api/paraglidingPage/banner:
 *   put:
 *     summary: Updates an existing banner for the Paragliding page
 *     tags: [Paragliding Page]
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
 *               subtitle:
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
 * /api/paraglidingPage/banner/images/add:
 *   post:
 *     summary: Adds a new image to the banner
 *     tags: [Paragliding Page]
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
 * /api/paraglidingPage/banner/images/{id}:
 *   delete:
 *     summary: Deletes an image from the banner
 *     tags: [Paragliding Page]
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
// router.post("/banner", createParaglidingPageBanner);
router.put("/banner", auth, admin, updateParaglidingPageBanner);
router.post("/banner/images/add", auth, admin, addImageToBanner);
router.delete("/banner/images/:id", auth, admin, deleteImageToBanner);

// ========== Paragliding Main Section ============ //
/**
 * @swagger
 * /api/paraglidingPage/mainSection/{id}:
 *   put:
 *     summary: Updates an existing main section for the Paragliding page
 *     tags: [Paragliding Page]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the main section to be updated
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
 *     responses:
 *       200:
 *         description: Main section updated successfully
 *       404:
 *         description: Main section not found
 *       500:
 *         description: Internal server error
 */
// router.post("/mainSection", createParaglidingPageMainSection);
router.put(
  "/mainSection/:id",
  auth,
  admin,
  updateParaglidingMainSectionSection
);

// =========== Paragliding Form Section ============ //
/**
 * @swagger
 * /api/paraglidingPage/formSection:
 *   put:
 *     summary: Updates an existing form section for the Paragliding page
 *     tags: [Paragliding Page]
 *     parameters:
 *       - in: query
 *         name: itemId
 *         schema:
 *           type: string
 *         required: false
 *         description: The ID of the item to be updated
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
 *               description:
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
 *         description: Form section updated successfully
 *       404:
 *         description: Section or item not found
 *       500:
 *         description: Internal server error
 */
// router.post("/formSection", createParaglidingFormSection);
router.put("/formSection", auth, admin, updateParaglidingFormSection);

// ========== Carousel Images ========== //
/**
 * @swagger
 * /api/paraglidingPage/carouselImages:
 *   post:
 *     summary: Creates or adds images to the carousel for the Paragliding page
 *     tags: [Paragliding Page]
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
 *                     url:
 *                       type: string
 *     responses:
 *       201:
 *         description: Carousel images created/added successfully
 *       500:
 *         description: Internal server error
 *
 * /api/paraglidingPage/carouselImages/{id}:
 *   put:
 *     summary: Updates an existing carousel image for the Paragliding page
 *     tags: [Paragliding Page]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the image to be updated
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
 *         description: Image updated successfully
 *       404:
 *         description: Image not found
 *       500:
 *         description: Internal server error
 *
 *   delete:
 *     summary: Deletes an existing carousel image from the Paragliding page
 *     tags: [Paragliding Page]
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
 *         description: Image not found
 *       500:
 *         description: Internal server error
 */
router.post("/carouselImages", auth, admin, createParaglidingCarouselImage);
router
  .route("/carouselImages/:id")
  .put(auth, admin, updateParaglidingCarouselImage)
  .delete(auth, admin, deleteParaglidingPageCarouselImage);

module.exports = router;
