const {
  createContactPageFaqTitle,
  updateContactPageFaqTitle,
  deleteContactPageFaqTitle,
  createContactPageFaqQuestion,
  updateContactPageFaqQuestion,
  deleteContactPageFaqQuestion,
  getAllData,
  createContactPageCarouselImage,
  updateContactPageCarouselImage,
} = require("../controllers/contactPageController");

const router = require("express").Router();

// ========== All Data ========== //
/**
 * @swagger
 * /api/contactPage:
 *   get:
 *     summary: Get all data for the contact page
 *     tags:
 *       - Contact Page
 *     responses:
 *       200:
 *         description: Successfully retrieved all data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 faq:
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
 *                       items:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             _id:
 *                               type: string
 *                               example: "string"
 *                             question:
 *                               type: string
 *                               example: "string"
 *                             answer:
 *                               type: string
 *                               example: "string"
 *                             titleId:
 *                               type: string
 *                               example: "string"
 *                             createdAt:
 *                               type: string
 *                               example: "string"
 *                             updatedAt:
 *                               type: string
 *                               example: "string"
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
 *                       example: ["string", "string", "string"]
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

// ========== FAQ Title ========== //
/**
 * @swagger
 * /api/contactPage/faqTitle:
 *   post:
 *     summary: Creates a new FAQ title for the contact page
 *     tags:
 *       - Contact Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the FAQ
 *                 example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the FAQ title
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
 *                 error:
 *                   type: string
 *                   example: "string"
 *
 * /api/contactPage/faqTitle/{id}:
 *   put:
 *     summary: Updates an existing FAQ title for the contact page
 *     tags:
 *       - Contact Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the FAQ title to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the FAQ
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the FAQ title
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
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: FAQ not found
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
 *   delete:
 *     summary: Deletes an existing FAQ title and its associated questions for the contact page
 *     tags:
 *       - Contact Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the FAQ title to delete
 *     responses:
 *       200:
 *         description: Successfully deleted the FAQ title and its questions
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: FAQ title not found
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
router.post("/faqTitle", createContactPageFaqTitle);
router
  .route("/faqTitle/:id")
  .put(updateContactPageFaqTitle)
  .delete(deleteContactPageFaqTitle);

// ========== FAQ Questions ========== //
/**
 * @swagger
 * /api/contactPage/faqQuestion:
 *   post:
 *     summary: Creates a new FAQ question for the contact page
 *     tags:
 *       - Contact Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 description: The FAQ question
 *                 example: "string"
 *               answer:
 *                 type: string
 *                 description: The FAQ answer
 *                 example: "string"
 *               titleId:
 *                 type: string
 *                 description: The ID of the FAQ title this question belongs to
 *                 example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the FAQ question
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 question:
 *                   type: string
 *                   example: "string"
 *                 answer:
 *                   type: string
 *                   example: "string"
 *                 titleId:
 *                   type: string
 *                   example: "string"
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
 * /api/contactPage/faqQuestion/{id}:
 *   put:
 *     summary: Updates an existing FAQ question for the contact page
 *     tags:
 *       - Contact Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the FAQ question to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 description: The FAQ question
 *                 example: "string"
 *               answer:
 *                 type: string
 *                 description: The FAQ answer
 *                 example: "string"
 *               titleId:
 *                 type: string
 *                 description: The ID of the FAQ title this question belongs to
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the FAQ question
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 question:
 *                   type: string
 *                   example: "string"
 *                 answer:
 *                   type: string
 *                   example: "string"
 *                 titleId:
 *                   type: string
 *                   example: "string"
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: FAQ Question not found
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
 *   delete:
 *     summary: Deletes an existing FAQ question for the contact page
 *     tags:
 *       - Contact Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the FAQ question to delete
 *     responses:
 *       200:
 *         description: Successfully deleted the FAQ question
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: FAQ Question not found
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
router.post("/faqQuestion", createContactPageFaqQuestion);
router
  .route("/faqQuestion/:id")
  .put(updateContactPageFaqQuestion)
  .delete(deleteContactPageFaqQuestion);

// ========== Carousel Image ========== //
/**
 * @swagger
 * /api/contactPage/carouselImage:
 *   post:
 *     summary: Creates new carousel images for the contact page
 *     tags:
 *       - Contact Page
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
 *                   example: ["string", "string", "string", "string"]
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
 *     summary: Updates carousel images for the contact page
 *     tags:
 *       - Contact Page
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
 *                   example: ["string", "string", "string", "string"]
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
router.post("/carouselImage", createContactPageCarouselImage);
router.put("/carouselImage", updateContactPageCarouselImage);

module.exports = router;
