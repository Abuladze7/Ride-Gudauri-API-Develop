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
} = require("../controllers/skiSchoolPageController");
const router = require("express").Router();

// ========== All Data =========== //
/**
 * @swagger
 * /api/skiSchoolPage:
 *   get:
 *     summary: Retrieves all data for the Ski School page
 *     tags: [Ski School Page]
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
 *                         public_id:
 *                           type: string
 *                         url:
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
 *                               _id:
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
 *                               _id:
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
 *                           _id:
 *                             type: string
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
 *                         public_id:
 *                           type: string
 *                         url:
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
 *                         public_id:
 *                           type: string
 *                         url:
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
 *                           _id:
 *                             type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
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
 *               imgUrl:
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
router.put("/banner", updateSkiSchoolPageBanner);
router.post("/banner/images/add", addImageToBanner);
router.delete("/banner/images/:id", deleteImageToSkiSchoolPageBanner);

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
router.put("/aboutSection/:id", updateSkiSchoolPageAbout);

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
 *         description: Individual lesson updated successfully
 *       404:
 *         description: Lesson or item not found
 *       500:
 *         description: Internal server error
 */
// router.post("/individualLesson", createSkiSchoolIndividualLesson);
router.put("/individualLesson", updateSkiSchoolIndividualLesson);

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
 *               subtitle:
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
 *         description: Private group lesson updated successfully
 *       404:
 *         description: Lesson or item not found
 *       500:
 *         description: Internal server error
 */
// router.post("/groupLesson", createSkiSchoolPrivateGroupLesson);
router.put("/groupLesson", updateSkiSchoolPrivateGroupLesson);

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
router.put("/benefitsSection", updateSkiSchoolPageBenefits);

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
router.put("/rentalShopSection/:id", updateSkiSchoolRentalShopSection);

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
router.put("/repairSection/:id", updateSkiSchoolRepairSection);

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
router.put("/teamSection", updateSkiSchoolTEamSection);

module.exports = router;
