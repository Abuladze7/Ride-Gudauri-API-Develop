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
  createOtherActivitiesPageSeoOptimization,
  updateOtherActivitiesPageSeoOptimization,
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
 *                       type: string
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

// ========== SEO ========== //
/**
 * @swagger
 * /api/otherActivitiesPage/seo:
 *   post:
 *     tags:
 *       - Other Activities Page
 *     summary: Create Other Activities Page SEO Optimization
 *     description: Create a new SEO optimization entry for the Other Activities page.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               page_title:
 *                 type: string
 *                 example: "Other Activities - Explore More Adventures"
 *               meta_title:
 *                 type: string
 *                 example: "Other Activities | Discover More Adventures"
 *               meta_description:
 *                 type: string
 *                 example: "Find out more about the exciting activities we offer. Explore more adventures on our Other Activities page."
 *               meta_keywords:
 *                 type: string
 *                 example: "activities, adventures, explore, fun"
 *               meta_url:
 *                 type: string
 *                 example: "https://example.com/other-activities"
 *               meta_img:
 *                 type: string
 *                 example: "https://example.com/images/other-activities-meta.png"
 *     responses:
 *       201:
 *         description: SEO optimization created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 page_title:
 *                   type: string
 *                 meta_title:
 *                   type: string
 *                 meta_description:
 *                   type: string
 *                 meta_keywords:
 *                   type: string
 *                 meta_url:
 *                   type: string
 *                 meta_img:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *
 * /api/otherActivitiesPage/seo/{id}:
 *   put:
 *     tags:
 *       - Other Activities Page
 *     summary: Update Other Activities Page SEO Optimization
 *     description: Update an existing SEO optimization entry for the Other Activities page.
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
 *                 example: "Other Activities - Explore More Adventures"
 *               meta_title:
 *                 type: string
 *                 example: "Other Activities | Discover More Adventures"
 *               meta_description:
 *                 type: string
 *                 example: "Find out more about the exciting activities we offer. Explore more adventures on our Other Activities page."
 *               meta_keywords:
 *                 type: string
 *                 example: "activities, adventures, explore, fun"
 *               meta_url:
 *                 type: string
 *                 example: "https://example.com/other-activities"
 *               meta_img:
 *                 type: string
 *                 example: "https://example.com/images/other-activities-meta.png"
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
router.post("/seo", auth, admin, createOtherActivitiesPageSeoOptimization);
router.put("/seo/:id", auth, admin, updateOtherActivitiesPageSeoOptimization);

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
// router.post("/transfersForm", createOtherActivitiesPageTransfersForm);
router.put(
  "/transfersForm",
  auth,
  admin,
  updateOtherActivitiesPageTransfersForm
);

// ========== Snowmobile Form ========== //
/**
 * @swagger
 * /api/otherActivitiesPage/snowmobileForm:
 *   put:
 *     summary: Updates an existing snowmobile form section for the Other Activities page
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
 *         description: Snowmobile form section updated successfully
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
