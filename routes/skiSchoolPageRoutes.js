const {
  createSkiSchoolPageBenefits,
  updateSkiSchoolPageBenefits,
  createSkiSchoolPageBanner,
  updateSkiSchoolPageBanner,
  createSkiSchoolPageAbout,
  updateSkiSchoolPageAbout,
  createSkiSchoolIndividualLesson,
  updateSkiSchoolIndividualLesson,
  createSkiSchoolPrivateGroupLesson,
  updateSkiSchoolPrivateGroupLesson,
  createSkiSchoolRentalShopSection,
  updateSkiSchoolRentalShopSection,
  createSkiSchoolRepairSection,
  updateSkiSchoolRepairSection,
  createSkiSchoolTeamSection,
  updateSkiSchoolTEamSection,
  addImageToBanner,
  getAllData,
} = require("../controllers/skiSchoolPageController");
const router = require("express").Router();

// ========== All Data =========== //
/**
 * @swagger
 * /api/skiSchoolPage:
 *   get:
 *     summary: Retrieves all data for the Ski School page
 *     tags:
 *       - Ski School Page
 *     responses:
 *       200:
 *         description: Successfully retrieved all data for the Ski School page
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
 *                     subtitle:
 *                       type: string
 *                     images:
 *                       type: array
 *                       items:
 *                         type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *                 aboutSection:
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
 *                 lessons:
 *                   type: object
 *                   properties:
 *                     individualLesson:
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
 *                               imgUrl:
 *                                 type: string
 *                               description:
 *                                 type: string
 *                         createdAt:
 *                           type: string
 *                         updatedAt:
 *                           type: string
 *                     groupLesson:
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
 *                               imgUrl:
 *                                 type: string
 *                               description:
 *                                 type: string
 *                         createdAt:
 *                           type: string
 *                         updatedAt:
 *                           type: string
 *                 benefitsSection:
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
 *                           subtitle:
 *                             type: string
 *                           imgUrl:
 *                             type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *                 rentalShopSection:
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
 *                 repairSection:
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
 *                 teamSection:
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
 *                           title:
 *                             type: string
 *                           subtitle:
 *                             type: string
 *                           imgUrl:
 *                             type: string
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
 * /api/skiSchoolPage/bannerSection:
 *   post:
 *     summary: Creates a new Ski School Page Banner section
 *     tags:
 *       - Ski School Page
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
 *         description: Successfully created the banner section
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
 * /api/skiSchoolPage/bannerSection/add-image:
 *   post:
 *     summary: Adds an image to the existing Ski School Page Banner
 *     tags:
 *       - Ski School Page
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
 * /api/skiSchoolPage/bannerSection/{id}:
 *   put:
 *     summary: Updates an existing Ski School Page Banner
 *     tags:
 *       - Ski School Page
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
router.post("/banner", createSkiSchoolPageBanner);
router.post("/banner/add-image", addImageToBanner);
router.put("/banner/:id", updateSkiSchoolPageBanner);

// ========== About ========== //
/**
 * @swagger
 * /api/skiSchoolPage/aboutSection:
 *   post:
 *     summary: Creates a new Ski School Page About section
 *     tags:
 *       - Ski School Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the about section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the about section
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the about section
 *                 example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the about section
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
 * /api/skiSchoolPage/aboutSection/{id}:
 *   put:
 *     summary: Updates an existing Ski School Page About section
 *     tags:
 *       - Ski School Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the about section to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the about section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the about section
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the about section
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the about section
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
 *         description: About section not found
 *       500:
 *         description: Internal server error
 */
router.post("/aboutSection", createSkiSchoolPageAbout);
router.put("/aboutSection/:id", updateSkiSchoolPageAbout);

// ========== Individual Lessons ========== //
/**
 * @swagger
 * /api/skiSchoolPage/individualLesson:
 *   post:
 *     summary: Creates a new Ski School Page Individual Lesson section
 *     tags:
 *       - Ski School Page
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
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     imgUrl:
 *                       type: string
 *                       description: The image URL for the lesson item
 *                       example: "string"
 *                     description:
 *                       type: string
 *                       description: The description for the lesson item
 *                       example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the individual lesson section
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
 *       500:
 *         description: Internal server error
 *
 *   put:
 *     summary: Updates an existing Ski School Page Individual Lesson section
 *     tags:
 *       - Ski School Page
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
 *         description: Lesson or item not found
 *       500:
 *         description: Internal server error
 */
router.post("/individualLesson", createSkiSchoolIndividualLesson);
router.put("/individualLesson", updateSkiSchoolIndividualLesson);

// ========== Group Lessons ========== //
/**
 * @swagger
 * /api/skiSchoolPage/groupLesson:
 *   post:
 *     summary: Creates a new Ski School Page Private Group Lesson section
 *     tags:
 *       - Ski School Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the group lesson section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the group lesson section
 *                 example: "string"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     imgUrl:
 *                       type: string
 *                       description: The image URL for the lesson item
 *                       example: "string"
 *                     description:
 *                       type: string
 *                       description: The description for the lesson item
 *                       example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the group lesson section
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
 *       500:
 *         description: Internal server error
 *
 *   put:
 *     summary: Updates an existing Ski School Page Private Group Lesson section
 *     tags:
 *       - Ski School Page
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
 *                 description: The title of the group lesson section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the group lesson section
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
 *         description: Successfully updated the group lesson section
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
 *         description: Lesson or item not found
 *       500:
 *         description: Internal server error
 */
router.post("/groupLesson", createSkiSchoolPrivateGroupLesson);
router.put("/groupLesson", updateSkiSchoolPrivateGroupLesson);

// ========== Ski School Benefits ========== //
/**
 * @swagger
 * /api/skiSchoolPage/benefitsSection:
 *   post:
 *     summary: Creates a new Ski School Page Benefits section
 *     tags:
 *       - Ski School Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the benefits section
 *                 example: "string"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     subtitle:
 *                       type: string
 *                       description: The subtitle of the benefit
 *                       example: "string"
 *                     imgUrl:
 *                       type: string
 *                       description: The image URL of the benefit
 *                       example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the benefits section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       subtitle:
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
 *     summary: Updates an existing Ski School Page Benefits section
 *     tags:
 *       - Ski School Page
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
 *                 description: The title of the benefits section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the benefit item
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the benefit item
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the benefits section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       subtitle:
 *                         type: string
 *                       imgUrl:
 *                         type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *       404:
 *         description: Item not found
 *       500:
 *         description: Internal server error
 */
router.post("/benefitsSection", createSkiSchoolPageBenefits);
router.put("/benefitsSection", updateSkiSchoolPageBenefits);

// ========== Ski School Rental Section ========== //
/**
 * @swagger
 * /api/skiSchoolPage/rentalShopSection:
 *   post:
 *     summary: Creates a new Rental Shop section
 *     tags:
 *       - Ski School Page
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
 * /api/skiSchoolPage/rentalShopSection/{id}:
 *   put:
 *     summary: Updates an existing Rental Shop section
 *     tags:
 *       - Ski School Page
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
 *         description: Section not found
 *       500:
 *         description: Internal server error
 */
router.post("/rentalShopSection", createSkiSchoolRentalShopSection);
router.put("/rentalShopSection/:id", updateSkiSchoolRentalShopSection);

// ========== Ski School Repair Section ========== //
/**
 * @swagger
 * /api/skiSchoolPage/repairSection:
 *   post:
 *     summary: Creates a new Ski School Page Rental Shop section
 *     tags:
 *       - Ski School Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the rental shop section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the rental shop section
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the rental shop section
 *                 example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the rental shop section
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
 * /api/skiSchoolPage/repairSection/{id}:
 *   put:
 *     summary: Updates an existing Ski School Page Rental Shop section
 *     tags:
 *       - Ski School Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the rental shop section to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the rental shop section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the rental shop section
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the rental shop section
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the rental shop section
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
 *         description: Rental shop section not found
 *       500:
 *         description: Internal server error
 */
router.post("/repairSection", createSkiSchoolRepairSection);
router.put("/repairSection/:id", updateSkiSchoolRepairSection);

// ========== Ski School Team Section ========== //
/**
 * @swagger
 * /api/skiSchoolPage/teamSection:
 *   post:
 *     summary: Creates a new Ski School Page Team section
 *     tags:
 *       - Ski School Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the team section
 *                 example: "string"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: The title of the team member
 *                       example: "string"
 *                     subtitle:
 *                       type: string
 *                       description: The subtitle of the team member
 *                       example: "string"
 *                     imgUrl:
 *                       type: string
 *                       description: The image URL of the team member
 *                       example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the team section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       subtitle:
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
 *     summary: Updates an existing Ski School Page Team section
 *     tags:
 *       - Ski School Page
 *     parameters:
 *       - in: query
 *         name: itemId
 *         required: false
 *         schema:
 *           type: string
 *         description: The ID of the team member to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sectionTitle:
 *                 type: string
 *                 description: The title of the team section
 *                 example: "string"
 *               itemTitle:
 *                 type: string
 *                 description: The title of the team member
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the team member
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the team member
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the team section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       subtitle:
 *                         type: string
 *                       imgUrl:
 *                         type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *       404:
 *         description: Item not found
 *       500:
 *         description: Internal server error
 */
router.post("/teamSection", createSkiSchoolTeamSection);
router.put("/teamSection", updateSkiSchoolTEamSection);

module.exports = router;
