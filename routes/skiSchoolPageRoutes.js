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
  deleteImageToSkiSchoolPageBanner,
  deleteSkiSchoolIndividualLessonLocationInfo,
  addSkiSchoolIndividualLessonLocationInfo,
  updateSkiSchoolIndividualLessonLocationInfo,
  updateSkiSchoolPrivateGroupLessonLocationInfo,
} = require("../controllers/skiSchoolPageController");
const admin = require("../middleware/adminMiddleware");
const auth = require("../middleware/authMiddleware");
const router = require("express").Router();

// ========== All Data =========== //
/**
 * @swagger
 * /api/skiSchoolPage:
 *   get:
 *     tags:
 *       - Ski School Page
 *     summary: Get all data for Ski School Page
 *     description: Retrieve all data related to the Ski School page including SEO, banner, sections, lessons, benefits, rental shop, repair, and team.
 *     responses:
 *       200:
 *         description: Successfully retrieved all data for Ski School page
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
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 aboutSection:
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
 *                         url:
 *                           type: string
 *                         public_id:
 *                           type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
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
 *                               image:
 *                                 type: object
 *                                 properties:
 *                                   public_id:
 *                                     type: string
 *                                   url:
 *                                     type: string
 *                               description:
 *                                 type: string
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
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
 *                               image:
 *                                 type: object
 *                                 properties:
 *                                   public_id:
 *                                     type: string
 *                                   url:
 *                                     type: string
 *                               description:
 *                                 type: string
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
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
 *                           image:
 *                             type: object
 *                             properties:
 *                               public_id:
 *                                 type: string
 *                               url:
 *                                 type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 rentalShopSection:
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
 *                         url:
 *                           type: string
 *                         public_id:
 *                           type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 repairSection:
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
 *                         url:
 *                           type: string
 *                         public_id:
 *                           type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
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
 *                           image:
 *                             type: object
 *                             properties:
 *                               public_id:
 *                                 type: string
 *                               url:
 *                                 type: string
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
 *                   example: Internal server error
 */
router.get("/", getAllData);

// ========== Banner ========== //
/**
 * @swagger
 * /api/skiSchoolPage/banner:
 *   put:
 *     summary: Updates an existing banner for the Ski School page
 *     tags: [Ski School Page]
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
 * /api/skiSchoolPage/banner/images/add:
 *   post:
 *     summary: Adds a new image to the banner
 *     tags: [Ski School Page]
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
 * /api/skiSchoolPage/banner/images/{id}:
 *   delete:
 *     summary: Deletes an image from the banner
 *     tags: [Ski School Page]
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
// router.post("/banner", createSkiSchoolPageBanner);
router.put("/banner", auth, admin, updateSkiSchoolPageBanner);
router.post("/banner/images/add", auth, admin, addImageToBanner);
router.delete(
  "/banner/images/:id",
  auth,
  admin,
  deleteImageToSkiSchoolPageBanner
);

// ========== About ========== //
/**
 * @swagger
 * /api/skiSchoolPage/aboutSection/{id}:
 *   put:
 *     summary: Updates an existing about section for the Ski School page
 *     tags: [Ski School Page]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the about section to be updated
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
 *         description: About section updated successfully
 *       404:
 *         description: About section not found
 *       500:
 *         description: Internal server error
 */
// router.post("/aboutSection", createSkiSchoolPageAbout);
router.put("/aboutSection/:id", auth, admin, updateSkiSchoolPageAbout);

// ========== Individual Lessons ========== //
/**
 * @swagger
 * /api/skiSchoolPage/individualLesson:
 *   put:
 *     summary: Updates an existing individual lesson for the Ski School page
 *     tags: [Ski School Page]
 *     parameters:
 *       - in: query
 *         name: itemId
 *         schema:
 *           type: string
 *         required: false
 *         description: The ID of the specific item to update within the lesson
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the lesson
 *               subtitle:
 *                 type: string
 *                 description: Subtitle of the lesson
 *               image:
 *                 type: object
 *                 description: Image details to update
 *                 properties:
 *                   public_id:
 *                     type: string
 *                   url:
 *                     type: string
 *               description:
 *                 type: string
 *                 description: Description of the item
 *               locationTitle:
 *                 type: string
 *                 description: Title of the lesson location
 *     responses:
 *       200:
 *         description: Section updated successfully
 *       404:
 *         description: Lesson or item not found
 *       500:
 *         description: Internal server error
 */
// router.post("/individualLesson", createSkiSchoolIndividualLesson);
router.put("/individualLesson", auth, admin, updateSkiSchoolIndividualLesson);

/**
 * @swagger
 * /api/skiSchoolPage/individualLocationInfo:
 *   post:
 *     summary: Adds a new location info item to an individual lesson
 *     tags: [Ski School Page]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the location info
 *                 example: "string"
 *               link:
 *                 type: string
 *                 description: Link for the location info
 *                 example: "string"
 *     responses:
 *       201:
 *         description: Location info item added successfully
 *       400:
 *         description: Title and link are required
 *       404:
 *         description: Lesson not found
 *       500:
 *         description: Internal server error
 *
 * /api/skiSchoolPage/individualLocationInfo/{id}:
 *   put:
 *     summary: Updates an existing location info item in an individual lesson
 *     tags: [Ski School Page]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the location info item to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Updated title for the location info
 *                 example: "string"
 *               link:
 *                 type: string
 *                 description: Updated link for the location info
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Location info item updated successfully
 *       400:
 *         description: locationInfoId is required
 *       404:
 *         description: Lesson or location info item not found
 *       500:
 *         description: Internal server error
 *
 *   delete:
 *     summary: Deletes a location info item from an individual lesson
 *     tags: [Ski School Page]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the location info item to be deleted
 *     responses:
 *       200:
 *         description: Location info item deleted successfully
 *       400:
 *         description: locationInfoId is required
 *       404:
 *         description: Lesson or location info item not found
 *       500:
 *         description: Internal server error
 */
router.post(
  "/individualLocationInfo",
  addSkiSchoolIndividualLessonLocationInfo
);
router.put(
  "/individualLocationInfo/:id",
  updateSkiSchoolIndividualLessonLocationInfo
);
router.delete(
  "/individualLocationInfo/:id",
  deleteSkiSchoolIndividualLessonLocationInfo
);

// ========== Group Lessons ========== //
/**
 * @swagger
 * /api/skiSchoolPage/groupLesson:
 *   put:
 *     summary: Updates an existing private group lesson for the Ski School page
 *     tags: [Ski School Page]
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
 *                 description: Title of the lesson
 *               subtitle:
 *                 type: string
 *                 description: Subtitle of the lesson
 *               image:
 *                 type: object
 *                 description: Image details to update
 *                 properties:
 *                   public_id:
 *                     type: string
 *                   url:
 *                     type: string
 *               description:
 *                 type: string
 *                 description: Description of the item
 *               locationTitle:
 *                 type: string
 *                 description: Title of the lesson location
 *     responses:
 *       200:
 *         description: Private group lesson updated successfully
 *       404:
 *         description: Lesson or item not found
 *       500:
 *         description: Internal server error
 */
// router.post("/groupLesson", createSkiSchoolPrivateGroupLesson);
router.put("/groupLesson", auth, admin, updateSkiSchoolPrivateGroupLesson);

router.put(
  "/groupLocationInfo/:id",
  auth,
  admin,
  updateSkiSchoolPrivateGroupLessonLocationInfo
);

// ========== Ski School Benefits ========== //
/**
 * @swagger
 * /api/skiSchoolPage/benefitsSection:
 *   put:
 *     summary: Updates an existing benefits section for the Ski School page
 *     tags: [Ski School Page]
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
 *               sectionTitle:
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
 *         description: Benefits section updated successfully
 *       404:
 *         description: Section or item not found
 *       500:
 *         description: Internal server error
 */
// router.post("/benefitsSection", createSkiSchoolPageBenefits);
router.put("/benefitsSection", auth, admin, updateSkiSchoolPageBenefits);

// ========== Ski School Rental Section ========== //
/**
 * @swagger
 * /api/skiSchoolPage/rentalShopSection/{id}:
 *   put:
 *     summary: Updates an existing rental shop section for the Ski School page
 *     tags: [Ski School Page]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the rental shop section to be updated
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
 *         description: Rental shop section updated successfully
 *       404:
 *         description: Rental shop section not found
 *       500:
 *         description: Internal server error
 */
// router.post("/rentalShopSection", createSkiSchoolRentalShopSection);
router.put(
  "/rentalShopSection/:id",
  auth,
  admin,
  updateSkiSchoolRentalShopSection
);

// ========== Ski School Repair Section ========== //
/**
 * @swagger
 * /api/skiSchoolPage/repairSection/{id}:
 *   put:
 *     summary: Updates an existing repair section for the Ski School page
 *     tags: [Ski School Page]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the repair section to be updated
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
 *         description: Repair section updated successfully
 *       404:
 *         description: Repair section not found
 *       500:
 *         description: Internal server error
 */
// router.post("/repairSection", createSkiSchoolRepairSection);
router.put("/repairSection/:id", auth, admin, updateSkiSchoolRepairSection);

// ========== Ski School Team Section ========== //
/**
 * @swagger
 * /api/skiSchoolPage/teamSection:
 *   put:
 *     summary: Updates an existing team section for the Ski School page
 *     tags: [Ski School Page]
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
 *               sectionTitle:
 *                 type: string
 *               itemTitle:
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
 *         description: Team section updated successfully
 *       404:
 *         description: Section or item not found
 *       500:
 *         description: Internal server error
 */
// router.post("/teamSection", createSkiSchoolTeamSection);
router.put("/teamSection", auth, admin, updateSkiSchoolTEamSection);

module.exports = router;
