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
  deleteContactPageCarouselImage,
  createContactPageBanner,
  updateContactPageBanner,
  deleteContactPageBanner,
  getContactPageFaqTitles,
} = require("../controllers/contactPageController");

const router = require("express").Router();

/**
 * @swagger
 * /api/contactPage:
 *   get:
 *     summary: Retrieve all data for the Contact page
 *     tags: [Contact Page]
 *     responses:
 *       200:
 *         description: Successfully retrieved data
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
 *                     updatedAt:
 *                       type: string
 *                 faq:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       title:
 *                         type: string
 *                       items:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             _id:
 *                               type: string
 *                             question:
 *                               type: string
 *                             answer:
 *                               type: string
 *                             titleId:
 *                               type: string
 *                             createdAt:
 *                               type: string
 *                             updatedAt:
 *                               type: string
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
 *                     updatedAt:
 *                       type: string
 *       500:
 *         description: Internal server error
 */
router.get("/", getAllData);

// ========== Banner ============ //
/**
 * @swagger
 * /api/contactPage/banner:
 *   post:
 *     summary: Creates a new banner for the Contact page
 *     tags: [Contact Page]
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
 *         description: Images created successfully
 *       500:
 *         description: Internal server error
 *
 * /api/contactPage/banner/{id}:
 *   put:
 *     summary: Updates an existing image in the banner for the Contact page
 *     tags: [Contact Page]
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
 *     summary: Deletes an image from the banner for the Contact page
 *     tags: [Contact Page]
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
router.post("/banner", createContactPageBanner);
router
  .route("/banner/:id")
  .put(updateContactPageBanner)
  .delete(deleteContactPageBanner);

// ========== FAQ Title ========== //
/**
 * @swagger
 * /api/contactPage/faqTitle:
 *   get:
 *     summary: Retrieve all FAQ titles
 *     tags: [Contact Page]
 *     responses:
 *       200:
 *         description: Successfully retrieved FAQ titles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *       500:
 *         description: Internal server error
 *   post:
 *     summary: Create a new FAQ title
 *     tags: [Contact Page]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       201:
 *         description: FAQ title created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *       500:
 *         description: Internal server error
 * /api/contactPage/faqTitle/{id}:
 *   put:
 *     summary: Update an existing FAQ title
 *     tags: [Contact Page]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The FAQ title ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       200:
 *         description: FAQ title updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: FAQ title not found
 *       500:
 *         description: Internal server error
 *   delete:
 *     summary: Delete an existing FAQ title and its related questions
 *     tags: [Contact Page]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The FAQ title ID
 *     responses:
 *       200:
 *         description: FAQ title and its questions deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: FAQ title not found
 *       500:
 *         description: Internal server error
 */
router
  .route("/faqTitle")
  .get(getContactPageFaqTitles)
  .post(createContactPageFaqTitle);
router
  .route("/faqTitle/:id")
  .put(updateContactPageFaqTitle)
  .delete(deleteContactPageFaqTitle);

// ========== FAQ Questions ========== //
/**
 * @swagger
 * /api/contactPage/faqQuestion:
 *   post:
 *     summary: Creates a new FAQ question
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
 *                 description: The answer to the FAQ question
 *                 example: "string"
 *               titleId:
 *                 type: string
 *                 description: The ID of the FAQ title associated with the question
 *                 example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the FAQ question
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
 *
 * /api/contactPage/faqQuestion/{id}:
 *   put:
 *     summary: Updates an existing FAQ question
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
 *                 description: The updated FAQ question
 *                 example: "string"
 *               answer:
 *                 type: string
 *                 description: The updated answer to the FAQ question
 *                 example: "string"
 *               titleId:
 *                 type: string
 *                 description: The ID of the FAQ title associated with the question
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the FAQ question
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: FAQ question not found
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
 *     summary: Deletes an FAQ question
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
 *         description: FAQ question not found
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
 *     summary: Create or Add Carousel Images
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
 *             required:
 *               - images
 *     responses:
 *       201:
 *         description: Carousel image(s) created or added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Carousel Image created successfully"
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
 * /api/contactPage/carouselImage/{id}:
 *   put:
 *     summary: Update Carousel Image
 *     tags:
 *       - Contact Page
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
 *                     description: The new public ID of the image
 *                     example: "string"
 *                   url:
 *                     type: string
 *                     description: The new URL of the image
 *                     example: "string"
 *             required:
 *               - image
 *     responses:
 *       200:
 *         description: Image updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Image updated successfully"
 *       404:
 *         description: Image not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Image not found"
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
 *     summary: Delete Carousel Image
 *     tags:
 *       - Contact Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the image to delete
 *     responses:
 *       200:
 *         description: Image deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Image deleted successfully"
 *       404:
 *         description: Image not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Image not found"
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
router
  .route("/carouselImage/:id")
  .put(updateContactPageCarouselImage)
  .delete(deleteContactPageCarouselImage);

module.exports = router;
