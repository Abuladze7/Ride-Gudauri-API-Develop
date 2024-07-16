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
} = require("../controllers/gudauriPageController");

const router = require("express").Router();

// =========== All Data ============ //
/**
 * @swagger
 * /api/gudauriPage:
 *   get:
 *     summary: Retrieves all data for the Gudauri page
 *     tags:
 *       - Gudauri Page
 *     responses:
 *       200:
 *         description: Successfully retrieved all data for the Gudauri page
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
 *                 planTripSection:
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
 *                       imgUrl:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                       updatedAt:
 *                         type: string
 *                 spiritSection:
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
 *                 howToGetThereSection:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     subTitle:
 *                       type: string
 *                     description:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       500:
 *         description: Internal server error
 */
router.get("/", getAllData);

// ========== Banner ========== //
/**
 * @swagger
 * /api/gudauriPage/banner:
 *   post:
 *     summary: Creates a new Gudauri banner
 *     tags:
 *       - Gudauri Page
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
 * /api/gudauriPage/banner/add-image:
 *   post:
 *     summary: Adds an image to the existing Gudauri banner
 *     tags:
 *       - Gudauri Page
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
 * /api/gudauriPage/banner/{id}:
 *   put:
 *     summary: Updates an existing Gudauri banner
 *     tags:
 *       - Gudauri Page
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
router.post("/banner", createGudauriBanner);
router.post("/banner/add-image", addImageToBanner);
router.put("/banner/:id", updateGudauriBanner);

// ========== Gudauri Wonderland Section ========== //
/**
 * @swagger
 * /api/gudauriPage/wonderland:
 *   post:
 *     summary: Creates a new Gudauri Wonderland section
 *     tags:
 *       - Gudauri Page
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
 *         description: Successfully created the section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
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
 *
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
 *         description: Successfully updated the section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
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
 *       404:
 *         description: Wonderland section not found
 *       500:
 *         description: Internal server error
 */
router.post("/wonderland", createGudauriWonderlandSection);
router.put("/wonderland/:id", updateGudauriWonderlandSection);

// ========== Plan Trip Section ========== //
/**
 * @swagger
 * /api/gudauriPage/planTrip:
 *   post:
 *     summary: Creates a new Plan Trip section
 *     tags:
 *       - Gudauri Page
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
 *         description: Successfully created the section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
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
 *
 * /api/gudauriPage/planTrip/{id}:
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
 *         description: Successfully updated the section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
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
 *       404:
 *         description: Plan trip section not found
 *       500:
 *         description: Internal server error
 */
router.post("/planTrip", createPlanTripSection);
router.put("/plantrip/:id", updatePlanTripSection);

// ========== Why Gudauri Section ========== //
/**
 * @swagger
 * /api/gudauriPage/whygudaurisection:
 *   post:
 *     summary: Creates a new "Why Gudauri" section
 *     tags:
 *       - Gudauri Page
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
 *                 example: "string *OPTIONAL*"
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
 *         description: Successfully created the section
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
 * /api/gudauriPage/whygudaurisection/{id}:
 *   put:
 *     summary: Updates an existing "Why Gudauri" section
 *     tags:
 *       - Gudauri Page
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
 *         description: Successfully updated the section
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
 *         description: Why Gudauri section not found
 *       500:
 *         description: Internal server error
 */
router.post("/whygudaurisection", createWhyGudauriSection);
router.put("/whygudaurisection/:id", updateWhyGudauriSection);

// ========== Gudauri Spirit Section ========== //
/**
 * @swagger
 * /api/gudauriPage/spiritSection:
 *   post:
 *     summary: Creates a new Gudauri Spirit section
 *     tags:
 *       - Gudauri Page
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
 *         description: Successfully created the section
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
 *         description: Successfully updated the section
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
 *         description: Gudauri spirit section not found
 *       500:
 *         description: Internal server error
 */
router.post("/spiritSection", createGudauriSpiritSection);
router.put("/spiritSection/:id", updateGudauriSpiritSection);

// =========== How To Get There Section ========== //
/**
 * @swagger
 * /api/gudauriPage/howtoget:
 *   post:
 *     summary: Creates a new How To Get There section
 *     tags:
 *       - Gudauri Page
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
 *               description:
 *                 type: string
 *                 description: The description of the section
 *                 example: "string"
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
 *                 title:
 *                   type: string
 *                 subtitle:
 *                   type: string
 *                 description:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *       500:
 *         description: Internal server error
 *
 * /api/gudauriPage/howtoget/{id}:
 *   put:
 *     summary: Updates an existing How To Get There section
 *     tags:
 *       - Gudauri Page
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
 *               description:
 *                 type: string
 *                 description: The description of the section
 *                 example: "string"
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
 *                 title:
 *                   type: string
 *                 subtitle:
 *                   type: string
 *                 description:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *       404:
 *         description: How to get there section not found
 *       500:
 *         description: Internal server error
 */
router.post("/howtoget", createHowToGetThereSection);
router.put("/howtoget/:id", updateHowToGetThereSection);

module.exports = router;
