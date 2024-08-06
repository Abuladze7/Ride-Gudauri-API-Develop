const {
  createHowStartedSection,
  updateHowStartedSection,
  createHowStartedMiddleSections,
  updateHowStartedMiddleSection,
  createParaglidingSection,
  updateParaglidingSection,
  getAllData,
  createBanner,
  updateBanner,
  addImageToBanner,
  createOurStoryCarouselImage,
  updateOurStoryCarouselImage,
  deleteImageToBanner,
  deleteOurStoryCarouselImage,
} = require("../controllers/ourStoryControllers");
const admin = require("../middleware/adminMiddleware");
const auth = require("../middleware/authMiddleware");

const router = require("express").Router();

/**
 * @swagger
 * /api/ourStory:
 *   get:
 *     summary: Retrieves all data for the Our Story page
 *     tags: [Our Story]
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
 *                 howStartedSection:
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
 *                 middleSections:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
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
 *                 beginningOfParaglidingSection:
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

// ========== Banner =========== //
/**
 * @swagger
 * /api/ourStory/banner:
 *   put:
 *     summary: Updates an existing banner
 *     tags: [Our Story]
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
 * /api/ourStory/banner/images/add:
 *   post:
 *     summary: Adds a new image to the banner
 *     tags: [Our Story]
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
 * /api/ourStory/banner/images/{id}:
 *   delete:
 *     summary: Deletes an image from the banner
 *     tags: [Our Story]
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
// router.post("/banner", createBanner);
router.put("/banner", auth, admin, updateBanner);
router.post("/banner/images/add", auth, admin, addImageToBanner);
router.delete("/banner/images/:id", auth, admin, deleteImageToBanner);

// ========== How It Started Section ========== //
/**
 * @swagger
 * /api/ourStory/howItStartedSection/{id}:
 *   put:
 *     summary: Updates an existing "How It Started" section
 *     tags: [Our Story]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the section to be updated
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
 *         description: Section updated successfully
 *       404:
 *         description: Section not found
 *       500:
 *         description: Internal server error
 */
router.post("/howItStartedSection", auth, admin, createHowStartedSection);
router.put("/howItStartedSection/:id", auth, admin, updateHowStartedSection);

// ========== How It Started Middle Sections ========== //
/**
 * @swagger
 * /api/ourStory/howItStartedMiddleSection/{id}:
 *   put:
 *     summary: Updates an existing "How It Started" middle section
 *     tags: [Our Story]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the middle section to be updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
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
 *         description: Middle section updated successfully
 *       404:
 *         description: Middle section not found
 *       500:
 *         description: Internal server error
 */
// router.post("/howItStartedMiddleSection", createHowStartedMiddleSections);
router.put(
  "/howItStartedMiddleSection/:id",
  auth,
  admin,
  updateHowStartedMiddleSection
);

// ========== The Beginning of Paragliding ========== //
/**
 * @swagger
 * /api/ourStory/beginningOfParagliding/{id}:
 *   put:
 *     summary: Updates an existing "Beginning Of Paragliding" section
 *     tags: [Our Story]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the paragliding section to be updated
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
 *         description: Paragliding section updated successfully
 *       404:
 *         description: Paragliding section not found
 *       500:
 *         description: Internal server error
 */
// router.post("/beginningOfParagliding", createParaglidingSection);
router.put(
  "/beginningOfParagliding/:id",
  auth,
  admin,
  updateParaglidingSection
);

// ========== Carousel Images ========== //
/**
 * @swagger
 * /api/ourStory/carouselImage:
 *   post:
 *     summary: Creates or adds images to the carousel
 *     tags: [Our Story]
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
 * /api/ourStory/carouselImage/{id}:
 *   put:
 *     summary: Updates an existing carousel image
 *     tags: [Our Story]
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
 *     summary: Deletes an existing carousel image
 *     tags: [Our Story]
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
router.post("/carouselImage", auth, admin, createOurStoryCarouselImage);
router
  .route("/carouselImage/:id")
  .put(auth, admin, updateOurStoryCarouselImage)
  .delete(auth, admin, deleteOurStoryCarouselImage);

module.exports = router;
