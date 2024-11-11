const {
  getAllData,
  createOtherActivitiesPageMainSection,
  createOtherActivitiesPageTransfersForm,
  updateOtherActivitiesPageTransfersForm,
  createOtherActivitiesPageSnowMobileForm,
  updateOtherActivitiesPageSnowMobileForm,
  createOtherActivitiesPageHorseRidingForm,
  updateOtherActivitiesPageHorseRidingForm,
  createOtherActivitiesPageQuadBikeForm,
  updateOtherActivitiesPageQuadBikeForm,
  createOtherActivitiesPageBanner,
  updateOtherActivitiesPageBanner,
  addImageToBanner,
  updateOtherActivitiesPageMainSection,
  createOtherActivitiesCarouselImage,
  updateOtherActivitiesCarouselImage,
  deleteImageToBanner,
  deleteOtherActivitiesPageCarouselImage,
} = require("../controllers/otherActivitiesPageController");
const admin = require("../middleware/adminMiddleware");
const auth = require("../middleware/authMiddleware");

const router = require("express").Router();

// ========== All Data ========== //
/**
 * @swagger
 * /api/otherActivitiesPage:
 *   get:
 *     tags:
 *       - Other Activities Page
 *     summary: Retrieve all Other Activities page data
 *     description: Get SEO, banner, main section, forms for various activities, and carousel images for the Other Activities page.
 *     responses:
 *       200:
 *         description: A JSON object containing all Other Activities page data.
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
 *                 activities:
 *                   type: object
 *                   properties:
 *                     transfersForm:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         title:
 *                           type: string
 *                         subtitle:
 *                           type: string
 *                         items:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               description:
 *                                 type: string
 *                               image:
 *                                 type: object
 *                                 properties:
 *                                   public_id:
 *                                     type: string
 *                                   url:
 *                                     type: string
 *                               _id:
 *                                 type: string
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                     snowMobileForm:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         title:
 *                           type: string
 *                         subtitle:
 *                           type: string
 *                         warning:
 *                           type: string
 *                         items:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               description:
 *                                 type: string
 *                               image:
 *                                 type: object
 *                                 properties:
 *                                   public_id:
 *                                     type: string
 *                                   url:
 *                                     type: string
 *                               _id:
 *                                 type: string
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                     horseRidingForm:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         title:
 *                           type: string
 *                         subtitle:
 *                           type: string
 *                         warning:
 *                           type: string
 *                         items:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               description:
 *                                 type: string
 *                               image:
 *                                 type: object
 *                                 properties:
 *                                   public_id:
 *                                     type: string
 *                                   url:
 *                                     type: string
 *                               _id:
 *                                 type: string
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                     quadBikeForm:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         title:
 *                           type: string
 *                         subtitle:
 *                           type: string
 *                         warning:
 *                           type: string
 *                         items:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               description:
 *                                 type: string
 *                               image:
 *                                 type: object
 *                                 properties:
 *                                   public_id:
 *                                     type: string
 *                                   url:
 *                                     type: string
 *                               _id:
 *                                 type: string
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
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

// ========== Banner ========== //
/**
 * @swagger
 * /api/otherActivitiesPage/banner:
 *   put:
 *     summary: Updates an existing banner for the Other Activities page
 *     tags: [Other Activities Page]
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
 * /api/otherActivitiesPage/banner/images/add:
 *   post:
 *     summary: Adds a new image to the banner
 *     tags: [Other Activities Page]
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
 * /api/otherActivitiesPage/banner/images/{id}:
 *   delete:
 *     summary: Deletes an image from the banner
 *     tags: [Other Activities Page]
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
// router.post("/banner", createOtherActivitiesPageBanner);
router.put("/banner", auth, admin, updateOtherActivitiesPageBanner);
router.post("/banner/images/add", auth, admin, addImageToBanner);
router.delete("/banner/images/:id", auth, admin, deleteImageToBanner);

// ========== Main Section ========== //
/**
 * @swagger
 * /api/otherActivitiesPage/mainSection:
 *   put:
 *     summary: Updates an existing main section for the Other Activities page
 *     tags: [Other Activities Page]
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
 *         description: Main section updated successfully
 *       404:
 *         description: Section or image not found
 *       500:
 *         description: Internal server error
 */
// router.post("/mainSection", createOtherActivitiesPageMainSection);
router.put("/mainSection", auth, admin, updateOtherActivitiesPageMainSection);

// ========== Transfers Form ========== //
/**
 * @swagger
 * /api/otherActivitiesPage/transfersForm:
 *   put:
 *     summary: Updates an existing transfers form section for the Other Activities page
 *     tags: [Other Activities Page]
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
 *               warning:
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
 *         description: Transfers form section updated successfully
 *       404:
 *         description: Section or item not found
 *       500:
 *         description: Internal server error
 */
router.put("/transfersForm", updateOtherActivitiesPageTransfersForm);
// router.post("/transfersForm", createOtherActivitiesPageTransfersForm);

// ========== Snowmobile Form ========== //
/**
 * @swagger
 * /api/otherActivitiesPage/transfersForm:
 *   put:
 *     summary: Updates an existing transfers form section for the Other Activities page
 *     tags: [Other Activities Page]
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
 *               warning:
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
 *               gudauriToTbilisiTransferDesc:
 *                 type: string
 *               gudauriToTbilisiAirportDesc:
 *                 type: string
 *               tbilisiAirportToGudauriDesc:
 *                 type: string
 *               tbilisiFreedomSquareToGudauriDesc:
 *                 type: string
 *               gudauriToKazbegiTourDesc:
 *                 type: string
 *               gudauriToGergetiExcursionDesc:
 *                 type: string
 *               gudauriToKhadaExplorationDesc:
 *                 type: string
 *               transferFromTbilisiToKazbegiDesc:
 *                 type: string
 *               fullDayTourTbilisiToKazbegiDesc:
 *                 type: string
 *     responses:
 *       200:
 *         description: Transfers form section updated successfully
 *       404:
 *         description: Section or item not found
 *       500:
 *         description: Internal server error
 */
// router.post("/snowmobileForm", createOtherActivitiesPageSnowMobileForm);
router.put(
  "/snowmobileForm",
  auth,
  admin,
  updateOtherActivitiesPageSnowMobileForm
);

// ========== Horse riding form ========== //
/**
 * @swagger
 * /api/otherActivitiesPage/horseRidingForm:
 *   put:
 *     summary: Updates an existing horse riding form section for the Other Activities page
 *     tags: [Other Activities Page]
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
 *               warning:
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
 *         description: Horse riding form section updated successfully
 *       404:
 *         description: Section or item not found
 *       500:
 *         description: Internal server error
 */
// router.post("/horseRidingForm", createOtherActivitiesPageHorseRidingForm);
router.put(
  "/horseRidingForm",
  auth,
  admin,
  updateOtherActivitiesPageHorseRidingForm
);

// ========== Quad Bike Form ========== //
/**
 * @swagger
 * /api/otherActivitiesPage/quadBikeForm:
 *   put:
 *     summary: Updates an existing quad bike form section for the Other Activities page
 *     tags: [Other Activities Page]
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
 *               warning:
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
 *         description: Quad bike form section updated successfully
 *       404:
 *         description: Section or item not found
 *       500:
 *         description: Internal server error
 */
// router.post("/quadBikeForm", createOtherActivitiesPageQuadBikeForm);
router.put("/quadBikeForm", auth, admin, updateOtherActivitiesPageQuadBikeForm);

// ========== Carousel Image ========== //
/**
 * @swagger
 * /api/otherActivitiesPage/carouselImage:
 *   post:
 *     summary: Creates a new carousel image section for the Other Activities page
 *     tags: [Other Activities Page]
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
 *         description: Carousel images created successfully
 *       500:
 *         description: Internal server error
 *
 * /api/otherActivitiesPage/carouselImage/{id}:
 *   put:
 *     summary: Updates an existing carousel image for the Other Activities page
 *     tags: [Other Activities Page]
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
 *         description: Images or image not found
 *       500:
 *         description: Internal server error
 *
 *   delete:
 *     summary: Deletes a carousel image from the Other Activities page
 *     tags: [Other Activities Page]
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
 *         description: Images or image not found
 *       500:
 *         description: Internal server error
 */
router.post("/carouselImage", auth, admin, createOtherActivitiesCarouselImage);
router
  .route("/carouselImage/:id")
  .put(auth, admin, updateOtherActivitiesCarouselImage)
  .delete(auth, admin, deleteOtherActivitiesPageCarouselImage);

module.exports = router;
