const {
  getAllPrices,
  createIndividualSkiLessonPrices,
  updateIndividualSkiLessonPrices,
  createIndividualSnowboardLessonPrices,
  updateIndividualSnowboardLessonPrices,
  createGroupSkiLessonPrices,
  updateGroupSkiLessonPrices,
  createGroupSnowboardLessonPrices,
  updateGroupSnowboardLessonPrices,
  createParaglidingPrices,
  updateParaglidingPrices,
  createHorseRidingPrices,
  updateHorseRidingPrices,
  createQuadBikePrices,
  updateQuadBikePrices,
  createSnowmobilePrices,
  updateSnowmobilePrices,
  createTransferAndToursPrices,
  updateTransferAndToursPrices,
  getIndividualSkiLessonPrices,
  getIndividualSnowboardPricesPrices,
  getGroupSkiPrices,
  getGroupSnowboardPrices,
  getParaglidingPrices,
  getHorseRidingPrices,
  getQuadBikePrices,
  getSnowmobilePrices,
  getTransferAndTorusPrices,
} = require("../controllers/priceManagementController");
const admin = require("../middleware/adminMiddleware");
const auth = require("../middleware/authMiddleware");

const router = require("express").Router();

// ========== GET ALL PRICES ========== //
/**
 * @swagger
 * /api/pricemanagement:
 *   get:
 *     summary: Retrieve all prices for various activities
 *     tags: [Price Management]
 *     responses:
 *       200:
 *         description: Successfully retrieved all prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 individualSkiLesson:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     one_hour:
 *                       type: number
 *                     two_hours:
 *                       type: number
 *                     three_hours:
 *                       type: number
 *                     full_day:
 *                       type: number
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 individualSnowboard:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     one_hour:
 *                       type: number
 *                     two_hours:
 *                       type: number
 *                     three_hours:
 *                       type: number
 *                     full_day:
 *                       type: number
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 groupSkiLesson:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     two_hours:
 *                       type: number
 *                     three_hours:
 *                       type: number
 *                     four_hours:
 *                       type: number
 *                     full_day:
 *                       type: number
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 groupSnowboard:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     two_hours:
 *                       type: number
 *                     three_hours:
 *                       type: number
 *                     four_hours:
 *                       type: number
 *                     full_day:
 *                       type: number
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 paragliding:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     paragliding:
 *                       type: number
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 transfer:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     gudauriToTbilisi:
 *                       type: number
 *                     gudauriToTbilisiAirport:
 *                       type: number
 *                     tbilisiAirportToGudauri:
 *                       type: number
 *                     tbilisiFreedomSquareToGudauri:
 *                       type: number
 *                     gudauriToKazbegi:
 *                       type: number
 *                     gudauriToGergeti:
 *                       type: number
 *                     gudauriToKhada:
 *                       type: number
 *                     tbilisiToKazbegi:
 *                       type: number
 *                     fullDayTourTbilisiToKazbegi:
 *                       type: number
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 snowmobile:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     minutes_15:
 *                       type: number
 *                     minutes_30:
 *                       type: number
 *                     hour:
 *                       type: number
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 horseRiding:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     minutes_15:
 *                       type: number
 *                     minutes_30:
 *                       type: number
 *                     hour:
 *                       type: number
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 quadBike:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     quad_bike:
 *                       type: number
 *                     buggy_2:
 *                       type: number
 *                     buggy_3:
 *                       type: number
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *       500:
 *         description: Internal server error
 */
router.get("/", getAllPrices);

// ========== INDIVIDUAL SKI LESSON ========== //
/**
 * @swagger
 * /api/pricemanagement/individualski:
 *   get:
 *     summary: Retrieve Individual Ski Lesson Prices
 *     tags: [Price Management]
 *     responses:
 *       200:
 *         description: Successfully retrieved Individual Ski Lesson Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 one_hour:
 *                   type: number
 *                 two_hours:
 *                   type: number
 *                 three_hours:
 *                   type: number
 *                 full_day:
 *                   type: number
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 *
 * /api/pricemanagement/individualski/{id}:
 *   put:
 *     summary: Update Individual Ski Lesson Prices
 *     tags: [Price Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the Individual Ski Lesson Prices to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               one_hour:
 *                 type: number
 *               two_hours:
 *                 type: number
 *               three_hours:
 *                 type: number
 *               full_day:
 *                 type: number
 *     responses:
 *       200:
 *         description: Successfully updated Individual Ski Lesson Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Private Individual Ski Lesson prices updated successfully"
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 */
router.get("/individualski", getIndividualSkiLessonPrices);
router.put("/individualski/:id", auth, admin, updateIndividualSkiLessonPrices);
// router.post("/individualski", createIndividualSkiLessonPrices);

// ========== INDIVIDUAL SNOWBOARD LESSON ========== //
/**
 * @swagger
 * /api/pricemanagement/individualsnowboard:
 *   get:
 *     summary: Retrieve Individual Snowboard Lesson Prices
 *     tags: [Price Management]
 *     responses:
 *       200:
 *         description: Successfully retrieved Individual Snowboard Lesson Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 one_hour:
 *                   type: number
 *                 two_hours:
 *                   type: number
 *                 three_hours:
 *                   type: number
 *                 full_day:
 *                   type: number
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 *
 * /api/pricemanagement/individualsnowboard/{id}:
 *   put:
 *     summary: Update Individual Snowboard Lesson Prices
 *     tags: [Price Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the Individual Snowboard Lesson Prices to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               one_hour:
 *                 type: number
 *               two_hours:
 *                 type: number
 *               three_hours:
 *                 type: number
 *               full_day:
 *                 type: number
 *     responses:
 *       200:
 *         description: Successfully updated Individual Snowboard Lesson Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Private Individual Snowboard Lesson prices updated successfully"
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 */
router.get("/individualsnowboard", getIndividualSnowboardPricesPrices);
router.put(
  "/individualsnowboard/:id",
  auth,
  admin,
  updateIndividualSnowboardLessonPrices
);
// router.post("/individualsnowboard", createIndividualSnowboardLessonPrices);

// ========== GROUP SKI LESSON ========== //
/**
 * @swagger
 * /api/pricemanagement/groupski:
 *   get:
 *     summary: Retrieve Group Ski Lesson Prices
 *     tags: [Price Management]
 *     responses:
 *       200:
 *         description: Successfully retrieved Group Ski Lesson Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 two_hours:
 *                   type: number
 *                 three_hours:
 *                   type: number
 *                 four_hours:
 *                   type: number
 *                 full_day:
 *                   type: number
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 *
 * /api/pricemanagement/groupski/{id}:
 *   put:
 *     summary: Update Group Ski Lesson Prices
 *     tags: [Price Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the Group Ski Lesson Prices to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               two_hours:
 *                 type: number
 *               three_hours:
 *                 type: number
 *               four_hours:
 *                 type: number
 *               full_day:
 *                 type: number
 *     responses:
 *       200:
 *         description: Successfully updated Group Ski Lesson Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Group Ski Lesson prices updated successfully"
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 */
router.get("/groupski", getGroupSkiPrices);
router.put("/groupski/:id", auth, admin, updateGroupSkiLessonPrices);
// router.post("/groupski", createGroupSkiLessonPrices);

// ========== GROUP SNOWBOARD LESSON ========== //
/**
 * @swagger
 * /api/pricemanagement/groupsnowboard:
 *   get:
 *     summary: Retrieve Group Snowboard Lesson Prices
 *     tags: [Price Management]
 *     responses:
 *       200:
 *         description: Successfully retrieved Group Snowboard Lesson Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 two_hours:
 *                   type: number
 *                 three_hours:
 *                   type: number
 *                 four_hours:
 *                   type: number
 *                 full_day:
 *                   type: number
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 *
 * /api/pricemanagement/groupsnowboard/{id}:
 *   put:
 *     summary: Update Group Snowboard Lesson Prices
 *     tags: [Price Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the Group Snowboard Lesson Prices to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               two_hours:
 *                 type: number
 *               three_hours:
 *                 type: number
 *               four_hours:
 *                 type: number
 *               full_day:
 *                 type: number
 *     responses:
 *       200:
 *         description: Successfully updated Group Snowboard Lesson Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Group Snowboard Lesson prices updated successfully"
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 */
router.get("/groupsnowboard", getGroupSnowboardPrices);
router.put(
  "/groupsnowboard/:id",
  auth,
  admin,
  updateGroupSnowboardLessonPrices
);
// router.post("/groupsnowboard", createGroupSnowboardLessonPrices);

// ========== PARAGLIDING PRICES ========== //
/**
 * @swagger
 * /api/pricemanagement/paragliding:
 *   get:
 *     summary: Retrieve Paragliding Prices
 *     tags: [Price Management]
 *     responses:
 *       200:
 *         description: Successfully retrieved Paragliding Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 paragliding:
 *                   type: number
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 *
 * /api/pricemanagement/paragliding/{id}:
 *   put:
 *     summary: Update Paragliding Prices
 *     tags: [Price Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the Paragliding Prices to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paragliding:
 *                 type: number
 *     responses:
 *       200:
 *         description: Successfully updated Paragliding Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Paragliding prices updated successfully"
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 */
router.get("/paragliding", getParaglidingPrices);
router.put("/paragliding/:id", auth, admin, updateParaglidingPrices);
// router.post("/paragliding", createParaglidingPrices);

// ※※※※※※ OTHER ACTIVITIES ※※※※※※ //

// ========== HOSE Riding PRICES ========== //
/**
 * @swagger
 * /api/pricemanagement/horseriding:
 *   get:
 *     summary: Retrieve horse riding prices
 *     tags:
 *       - Price Management
 *     responses:
 *       200:
 *         description: Successfully retrieved horse riding prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 minutes_15:
 *                   type: number
 *                 minutes_30:
 *                   type: number
 *                 hour:
 *                   type: number
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 *
 * /api/pricemanagement/horseriding/{id}:
 *   put:
 *     summary: Update horse riding prices
 *     tags:
 *       - Price Management
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the horse riding prices to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               minutes_15:
 *                 type: number
 *               minutes_30:
 *                 type: number
 *               hour:
 *                 type: number
 *     responses:
 *       200:
 *         description: Horse riding prices updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Horse Riding prices updated successfully"
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 */
router.get("/horseriding", getHorseRidingPrices);
router.put("/horseriding/:id", auth, admin, updateHorseRidingPrices);
// router.post("/horseriding", createHorseRidingPrices);

// ========== QUADBIKE PRICES ========== //
/**
 * @swagger
 * /api/pricemanagement/quadbike:
 *   get:
 *     summary: Retrieve Quad Bike Prices
 *     tags: [Price Management]
 *     responses:
 *       200:
 *         description: Successfully retrieved Quad Bike Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 quad_bike:
 *                   type: number
 *                 buggy_2:
 *                   type: number
 *                 buggy_3:
 *                   type: number
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 *
 * /api/pricemanagement/quadbike/{id}:
 *   put:
 *     summary: Update Quad Bike Prices
 *     tags: [Price Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the Quad Bike Prices to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quad_bike:
 *                 type: number
 *               buggy_2:
 *                 type: number
 *               buggy_3:
 *                 type: number
 *     responses:
 *       200:
 *         description: Successfully updated Quad Bike Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Quad Bike prices updated successfully"
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 */
router.get("/quadbike", getQuadBikePrices);
router.put("/quadbike/:id", auth, admin, updateQuadBikePrices);
// router.post("/quadbike", createQuadBikePrices);

// ========== SNOWMOBILE PRICES ========== //
/**
 * @swagger
 * /api/pricemanagement/snowmobile:
 *   get:
 *     summary: Retrieve Snowmobile Prices
 *     tags: [Price Management]
 *     responses:
 *       200:
 *         description: Successfully retrieved Snowmobile Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 minutes_15:
 *                   type: number
 *                 minutes_30:
 *                   type: number
 *                 hour:
 *                   type: number
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 *
 * /api/pricemanagement/snowmobile/{id}:
 *   put:
 *     summary: Update Snowmobile Prices
 *     tags: [Price Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the Snowmobile Prices to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               minutes_15:
 *                 type: number
 *               minutes_30:
 *                 type: number
 *               hour:
 *                 type: number
 *     responses:
 *       200:
 *         description: Successfully updated Snowmobile Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Snowmobile prices updated successfully"
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 */
router.get("/snowmobile", getSnowmobilePrices);
router.put("/snowmobile/:id", auth, admin, updateSnowmobilePrices);
// router.post("/snowmobile", createSnowmobilePrices);

// ========== TRANSFER AND TOURS PRICES ========== //
/**
 * @swagger
 * /api/pricemanagement/transfer:
 *   get:
 *     summary: Retrieve Transfer and Tours Prices
 *     tags: [Price Management]
 *     responses:
 *       200:
 *         description: Successfully retrieved Transfer and Tours Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 gudauriToTbilisi:
 *                   type: number
 *                 gudauriToTbilisiAirport:
 *                   type: number
 *                 tbilisiAirportToGudauri:
 *                   type: number
 *                 tbilisiFreedomSquareToGudauri:
 *                   type: number
 *                 gudauriToKazbegi:
 *                   type: number
 *                 gudauriToGergeti:
 *                   type: number
 *                 gudauriToKhada:
 *                   type: number
 *                 tbilisiToKazbegi:
 *                   type: number
 *                 fullDayTourTbilisiToKazbegi:
 *                   type: number
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 *
 * /api/pricemanagement/transfer/{id}:
 *   put:
 *     summary: Update Transfer and Tours Prices
 *     tags: [Price Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the Transfer and Tours Prices to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               gudauriToTbilisi:
 *                 type: number
 *               gudauriToTbilisiAirport:
 *                 type: number
 *               tbilisiAirportToGudauri:
 *                 type: number
 *               tbilisiFreedomSquareToGudauri:
 *                 type: number
 *               gudauriToKazbegi:
 *                 type: number
 *               gudauriToGergeti:
 *                 type: number
 *               gudauriToKhada:
 *                 type: number
 *               tbilisiToKazbegi:
 *                 type: number
 *               fullDayTourTbilisiToKazbegi:
 *                 type: number
 *     responses:
 *       200:
 *         description: Successfully updated Transfer and Tours Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Transfer and Tours prices updated successfully"
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 */
router.get("/transfer", getTransferAndTorusPrices);
router.put("/transfer/:id", auth, admin, updateTransferAndToursPrices);
// router.post("/transfer", createTransferAndToursPrices);

module.exports = router;
