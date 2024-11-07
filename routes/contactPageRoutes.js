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
  createContactPageBannerImage,
  updateContactPageBannerImage,
  deleteContactPageBannerImage,
  updateContactPageBanner,
} = require("../controllers/contactPageController");
const admin = require("../middleware/adminMiddleware");
const auth = require("../middleware/authMiddleware");

const router = require("express").Router();

/**
 * @swagger
 * /api/contactPage:
 *   get:
 *     tags:
 *       - Contact Page
 *     summary: Retrieve all contact page data
 *     description: Get SEO, banner, FAQ titles, FAQ questions, and carousel images for the contact page.
 *     responses:
 *       200:
 *         description: A JSON object containing all contact page data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *
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
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 faqTitles:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       title:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                 faqQuestions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       question:
 *                         type: string
 *                       answer:
 *                         type: string
 *                       titleId:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
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
 *                               format: date-time
 *                             updatedAt:
 *                               type: string
 *                               format: date-time
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

// ========== Banner ============ //
/**
 * @swagger
 * /api/contactPage/banner:
 *   put:
 *     summary: Updates the contact page banner details
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
 *                 description: The title of the contact page banner
 *                 example: "Welcome to Gudauri"
 *               email:
 *                 type: string
 *                 description: Contact email
 *                 example: "contact@example.com"
 *               workDays:
 *                 type: string
 *                 description: Working days information
 *                 example: "Mon-Fri"
 *               phoneNumber:
 *                 type: string
 *                 description: Contact phone number
 *                 example: "+123456789"
 *               location:
 *                 type: string
 *                 description: Physical location of the contact
 *                 example: "Gudauri, Georgia"
 *               locationLink:
 *                 type: string
 *                 description: Google Maps location link
 *     responses:
 *       200:
 *         description: Contact page updated successfully
 *       500:
 *         description: Internal server error
 */
router.put("/banner", updateContactPageBanner);

/**
 * @swagger
 * /api/contactPage/banner/image:
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
 * /api/contactPage/banner/image/{id}:
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
router.post("/banner/image", auth, admin, createContactPageBannerImage);
router
  .route("/banner/image/:id")
  .put(auth, admin, updateContactPageBannerImage)
  .delete(auth, admin, deleteContactPageBannerImage);

// ========== FAQ Title ========== //
/**
 * @swagger
 * /api/contactPage/faqTitle:
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
router.route("/faqTitle").post(auth, admin, createContactPageFaqTitle);
router
  .route("/faqTitle/:id")
  .put(auth, admin, updateContactPageFaqTitle)
  .delete(auth, admin, deleteContactPageFaqTitle);

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
router.post("/faqQuestion", auth, admin, createContactPageFaqQuestion);
router
  .route("/faqQuestion/:id")
  .put(auth, admin, updateContactPageFaqQuestion)
  .delete(auth, admin, deleteContactPageFaqQuestion);

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
router.post("/carouselImage", auth, admin, createContactPageCarouselImage);
router
  .route("/carouselImage/:id")
  .put(auth, admin, updateContactPageCarouselImage)
  .delete(auth, admin, deleteContactPageCarouselImage);

module.exports = router;
