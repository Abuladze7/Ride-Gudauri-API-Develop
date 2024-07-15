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
} = require("../controllers/ourStoryControllers");

const router = require("express").Router();

/**
 * @swagger
 * /api/ourstory:
 *   get:
 *     summary: Retrieves all data for the "Our Story" section
 *     tags:
 *       - Our Story
 *     responses:
 *       200:
 *         description: Successfully retrieved all data for the "Our Story" section
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
 *                         type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *                 howStartedSection:
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
 *                 middleSections:
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
 *                 beginningOfParaglidingSection:
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
 *       500:
 *         description: Internal server error
 */
router.get("/", getAllData);

// ========== Banner =========== //
/**
 * @swagger
 * /api/ourstory/banner:
 *   post:
 *     summary: Creates a new banner
 *     tags:
 *       - Our Story
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
 *                 title:
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
 * /api/ourstory/banner/add-image:
 *   post:
 *     summary: Adds an image to the existing banner
 *     tags:
 *       - Our Story
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
 *                 title:
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
 * /api/ourstory/banner/{id}:
 *   put:
 *     summary: Updates an existing banner
 *     tags:
 *       - Our Story
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
 *               title:
 *                 type: string
 *                 description: The title of the banner
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
 *                 title:
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
router.post("/banner", createBanner);
router.post("/banner/add-image", addImageToBanner);
router.put("/banner/:id", updateBanner);

// ========== How It Started Section ========== //

/**
 * @swagger
 * /api/ourstory/howItStartedSection:
 *   post:
 *     summary: Creates a new "How It Started" section
 *     tags:
 *       - Our Story
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
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the section
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the section
 *                 example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the "How It Started" section
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
 * /api/ourstory/howItStartedSection/{id}:
 *   put:
 *     summary: Updates an existing "How It Started" section
 *     tags:
 *       - Our Story
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the section to update
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
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the section
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the section
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the "How It Started" section
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
 *         description: Section not found
 *       500:
 *         description: Internal server error
 */
router.post("/howItStartedSection", createHowStartedSection);
router.put("/howItStartedSection/:id", updateHowStartedSection);

// ========== How It Started Middle Sections ========== //

/**
 * @swagger
 * /api/ourstory/howItStartedMiddleSection:
 *   post:
 *     summary: Creates a new "How It Started" middle section
 *     tags:
 *       - Our Story
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the section
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the section
 *                 example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the "How It Started" middle section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
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
 * /api/ourstory/howItStartedMiddleSection/{id}:
 *   put:
 *     summary: Updates an existing "How It Started" middle section
 *     tags:
 *       - Our Story
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the section to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the section
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the section
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the "How It Started" middle section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
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
 *         description: Section not found
 *       500:
 *         description: Internal server error
 */
router.post("/howItStartedMiddleSection", createHowStartedMiddleSections);
router.post("/howItStartedMiddleSection/:id", updateHowStartedMiddleSection);

// ========== The Beginning of Paragliding ========== //

/**
 * @swagger
 * /api/ourstory/beginningOfParagliding:
 *   post:
 *     summary: Creates a new "Beginning of Paragliding" section
 *     tags:
 *       - Our Story
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
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the section
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the section
 *                 example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the "Beginning of Paragliding" section
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
 * /beginningOfParagliding/{id}:
 *   put:
 *     summary: Updates an existing "Beginning of Paragliding" section
 *     tags:
 *       - Our Story
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the section to update
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
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the section
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the section
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the "Beginning of Paragliding" section
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
 *         description: Section not found
 *       500:
 *         description: Internal server error
 */
router.post("/beginningOfParagliding", createParaglidingSection);
router.post("/beginningOfParagliding/:id", updateParaglidingSection);

module.exports = router;
