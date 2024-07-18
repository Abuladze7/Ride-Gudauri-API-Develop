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
} = require("../controllers/paraglidingPageController");

const router = require("express").Router();

// =========== All Data ============ //
/**
 * @swagger
 * /api/paraglidingPage:
 *   get:
 *     summary: Get all data for the Paragliding Page
 *     tags:
 *       - Paragliding Page
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
 *                       example: "string"
 *                     subtitle:
 *                       type: string
 *                       example: "string"
 *                     images:
 *                       type: array
 *                       items:
 *                         type: string
 *                       example: ["string", "string", "string"]
 *                     createdAt:
 *                       type: string
 *                       example: "string"
 *                     updatedAt:
 *                       type: string
 *                       example: "string"
 *                 mainSection:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "string"
 *                     title:
 *                       type: string
 *                       example: "string"
 *                     subtitle:
 *                       type: string
 *                       example: "string"
 *                     imgUrl:
 *                       type: string
 *                       example: "string"
 *                     createdAt:
 *                       type: string
 *                       example: "string"
 *                     updatedAt:
 *                       type: string
 *                       example: "string"
 *                 formSection:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "string"
 *                     title:
 *                       type: string
 *                       example: "string"
 *                     subtitle:
 *                       type: string
 *                       example: "string"
 *                     items:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           description:
 *                             type: string
 *                             example: "string"
 *                           imgUrl:
 *                             type: string
 *                             example: "string"
 *                           _id:
 *                             type: string
 *                             example: "string"
 *                     createdAt:
 *                       type: string
 *                       example: "string"
 *                     updatedAt:
 *                       type: string
 *                       example: "string"
 *                 carouselImages:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "string"
 *                     images:
 *                       type: array
 *                       items:
 *                         type: string
 *                       example: ["string", "string", "string", "string", "string", "string"]
 *                     createdAt:
 *                       type: string
 *                       example: "string"
 *                     updatedAt:
 *                       type: string
 *                       example: "string"
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

// ========== Banner ============ //
/**
 * @swagger
 * /api/paraglidingPage/banner:
 *   post:
 *     summary: Creates a new Paragliding Page banner
 *     tags:
 *       - Paragliding Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the banner
 *                 example: "string"
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The image URLs of the banner
 *                 example: ["string1", "string2"]
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
 *                 subtitle:
 *                   type: string
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *       500:
 *         description: Internal server error
 *
 * /api/paraglidingPage/banner/add-image:
 *   post:
 *     summary: Adds an image to the existing Paragliding Page banner
 *     tags:
 *       - Paragliding Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               imgUrl:
 *                 type: string
 *                 description: The URL of the image to add
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully added the image to the banner
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 subtitle:
 *                   type: string
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *       404:
 *         description: Banner not found
 *       500:
 *         description: Internal server error
 *
 * /api/paraglidingPage/banner/{id}:
 *   put:
 *     summary: Updates an existing Paragliding Page banner
 *     tags:
 *       - Paragliding Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the banner to update
 *       - in: query
 *         name: imgIndex
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
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the banner
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The new image URL to update
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the banner
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 subtitle:
 *                   type: string
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *       404:
 *         description: Banner not found
 *       500:
 *         description: Internal server error
 */
router.post("/banner", createParaglidingPageBanner);
router.post("/banner/add-image", addImageToBanner);
router.put("/banner/:id", updateParaglidingPageBanner);

// ========== Paragliding Main Section ============ //
/**
 * @swagger
 * /api/paraglidingPage/mainSection:
 *   post:
 *     summary: Creates a new Paragliding Page main section
 *     tags:
 *       - Paragliding Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the main section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the main section
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the main section
 *                 example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the main section
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
 *                 imgUrl:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *       500:
 *         description: Internal server error
 *
 * /api/paraglidingPage/mainSection/{id}:
 *   put:
 *     summary: Updates an existing Paragliding Page main section
 *     tags:
 *       - Paragliding Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the main section to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the main section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the main section
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the main section
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the main section
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
 *                 imgUrl:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *       404:
 *         description: Main section not found
 *       500:
 *         description: Internal server error
 */
router.post("/mainSection", createParaglidingPageMainSection);
router.put("/mainSection/:id", updateParaglidingMainSectionSection);

// =========== Paragliding Form Section ============ //
/**
 * @swagger
 * /api/paraglidingPage/formSection:
 *   post:
 *     summary: Creates a new Paragliding Page form section
 *     tags:
 *       - Paragliding Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the form section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the form section
 *                 example: "string"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     description:
 *                       type: string
 *                       description: The description of the item
 *                       example: "string"
 *                     imgUrl:
 *                       type: string
 *                       description: The image URL of the item
 *                       example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the form section
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
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       description:
 *                         type: string
 *                       imgUrl:
 *                         type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *       500:
 *         description: Internal server error
 *
 *   put:
 *     summary: Updates an existing Paragliding Page form section
 *     tags:
 *       - Paragliding Page
 *     parameters:
 *       - in: query
 *         name: itemId
 *         schema:
 *           type: string
 *         description: The ID of the lesson item to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the individual lesson section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the individual lesson section
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The new image URL for the lesson item
 *                 example: "string"
 *               description:
 *                 type: string
 *                 description: The new description for the lesson item
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the individual lesson section
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
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       imgUrl:
 *                         type: string
 *                       description:
 *                         type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *       404:
 *         description: Section or item not found
 *       500:
 *         description: Internal server error
 */
router.post("/formSection", createParaglidingFormSection);
router.put("/formSection", updateParaglidingFormSection);

// ========== Carousel Images ========== //
/**
 * @swagger
 * /api/paraglidingPage/carouselImages:
 *   post:
 *     summary: Create new carousel images
 *     tags:
 *       - Paragliding Page
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
 *                 description: List of image URLs to be added to the carousel
 *                 example: ["string", "string"]
 *     responses:
 *       201:
 *         description: Successfully created carousel images
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["string", "string"]
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
 *     summary: Update carousel images
 *     tags:
 *       - Paragliding Page
 *     parameters:
 *       - in: query
 *         name: index
 *         schema:
 *           type: integer
 *         required: true
 *         description: Index of the image to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               imgUrl:
 *                 type: string
 *                 description: The new image URL to update
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated carousel image
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["string", "string"]
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       400:
 *         description: Invalid index
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: Images not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
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
router.post("/carouselImages", createParaglidingCarouselImage);
router.put("/carouselImages", updateParaglidingCarouselImage);

module.exports = router;
