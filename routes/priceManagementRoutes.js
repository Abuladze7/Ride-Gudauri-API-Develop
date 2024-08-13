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
} = require("../controllers/priceManagementController");

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
 *   post:
 *     summary: Create new Individual Ski Lesson Prices
 *     tags: [Price Management]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               one_hour:
 *                 type: number
 *                 example: 120
 *               two_hours:
 *                 type: number
 *                 example: 240
 *               three_hours:
 *                 type: number
 *                 example: 350
 *               full_day:
 *                 type: number
 *                 example: 680
 *     responses:
 *       201:
 *         description: Successfully created Individual Ski Lesson Prices
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
router.post("/individualski", createIndividualSkiLessonPrices);
router.put("/individualski/:id", updateIndividualSkiLessonPrices);

// ========== INDIVIDUAL SNOWBOARD LESSON ========== //
/**
 * @swagger
 * /api/pricemanagement/individualsnowboard:
 *   post:
 *     summary: Create new Individual Snowboard Lesson Prices
 *     tags: [Price Management]
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
 *       201:
 *         description: Successfully created Individual Snowboard Lesson Prices
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
router.post("/individualsnowboard", createIndividualSnowboardLessonPrices);
router.put("/individualsnowboard/:id", updateIndividualSnowboardLessonPrices);

// ========== GROUP SKI LESSON ========== //
/**
 * @swagger
 * /api/pricemanagement/groupski:
 *   post:
 *     summary: Create new Group Ski Lesson Prices
 *     tags: [Price Management]
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
 *       201:
 *         description: Successfully created Group Ski Lesson Prices
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
 *                   example: "Private Group Ski Lesson prices updated successfully"
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 */
router.post("/groupski", createGroupSkiLessonPrices);
router.put("/groupski/:id", updateGroupSkiLessonPrices);

// ========== GROUP SNOWBOARD LESSON ========== //
/**
 * @swagger
 * /api/pricemanagement/groupsnowboard:
 *   post:
 *     summary: Create new Group Snowboard Lesson Prices
 *     tags: [Price Management]
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
 *       201:
 *         description: Successfully created Group Snowboard Lesson Prices
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
 *                   example: "Private Group Snowboard Lesson prices updated successfully"
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 */
router.post("/groupsnowboard", createGroupSnowboardLessonPrices);
router.put("/groupsnowboard/:id", updateGroupSnowboardLessonPrices);

// ========== PARAGLIDING PRICES ========== //
/**
 * @swagger
 * /api/pricemanagement/paragliding:
 *   post:
 *     summary: Create new Paragliding Prices
 *     tags: [Price Management]
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
 *       201:
 *         description: Successfully created Paragliding Prices
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
router.post("/paragliding", createParaglidingPrices);
router.put("/paragliding/:id", updateParaglidingPrices);

// ※※※※※※ OTHER ACTIVITIES ※※※※※※ //

// ========== HOSE Riding PRICES ========== //
/**
 * @swagger
 * /api/pricemanagement/horseriding:
 *   post:
 *     summary: Create new Horse Riding Prices
 *     tags: [Price Management]
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
 *       201:
 *         description: Successfully created Horse Riding Prices
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
 *       500:
 *         description: Internal server error
 *
 * /api/pricemanagement/horseriding/{id}:
 *   put:
 *     summary: Update Horse Riding Prices
 *     tags: [Price Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the Horse Riding Prices to update
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
 *         description: Successfully updated Horse Riding Prices
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
router.post("/horseriding", createHorseRidingPrices);
router.put("/horseriding/:id", updateHorseRidingPrices);

// ========== QUADBIKE PRICES ========== //
/**
 * @swagger
 * /api/pricemanagement/quadbike:
 *   post:
 *     summary: Create new Quad Bike Prices
 *     tags: [Price Management]
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
 *       201:
 *         description: Successfully created Quad Bike Prices
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
router.post("/quadbike", createQuadBikePrices);
router.put("/quadbike/:id", updateQuadBikePrices);

// ========== SNOWMOBILE PRICES ========== //
/**
 * @swagger
 * /api/pricemanagement/snowmobile:
 *   post:
 *     summary: Create new Snowmobile Prices
 *     tags: [Price Management]
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
 *       201:
 *         description: Successfully created Snowmobile Prices
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
router.post("/snowmobile", createSnowmobilePrices);
router.put("/snowmobile/:id", updateSnowmobilePrices);

// ========== TRANSFER AND TOURS PRICES ========== //
/**
 * @swagger
 * /api/pricemanagement/transfer:
 *   post:
 *     summary: Create new Transfer and Tours Prices
 *     tags: [Price Management]
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
 *       201:
 *         description: Successfully created Transfer and Tours Prices
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
router.post("/transfer", createTransferAndToursPrices);
router.put("/transfer/:id", updateTransferAndToursPrices);

module.exports = router;
