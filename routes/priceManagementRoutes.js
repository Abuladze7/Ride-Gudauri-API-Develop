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
  getTransferAndToursPrices,
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
 *     summary: Retrieve Individual Ski Lesson Prices with optional discount
 *     tags:
 *       - Price Management
 *     parameters:
 *       - in: query
 *         name: fromDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: "Start date for the ski lesson (format: MM/DD/YYYY)"
 *       - in: query
 *         name: toDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: "End date for the ski lesson (format: MM/DD/YYYY)"
 *       - in: query
 *         name: hours
 *         schema:
 *           type: string
 *           enum:
 *             - 2 Hours
 *             - 3 Hours
 *             - 4 Hours
 *             - Full Day
 *         required: true
 *         description: "Duration of the lesson (e.g., '1 Hour', '2 Hours', 'Full Day')"
 *       - in: query
 *         name: coupon
 *         schema:
 *           type: string
 *         required: false
 *         description: "Optional coupon code for applying a discount"
 *     responses:
 *       200:
 *         description: Successfully retrieved Individual Ski Lesson Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 originalUSD:
 *                   type: number
 *                   description: Original price in USD
 *                 originalGEL:
 *                   type: number
 *                   description: Original price in GEL
 *                 discountedUSD:
 *                   type: number
 *                   description: Discounted price in USD (if a valid coupon is applied, otherwise null)
 *                 discountedGEL:
 *                   type: number
 *                   description: Discounted price in GEL (if a valid coupon is applied, otherwise null)
 *       400:
 *         description: Invalid date range or missing required parameters
 *       404:
 *         description: Prices not found
 *       500:
 *         description: Internal server error
 *
 * /api/pricemanagement/individualski/{id}:
 *   put:
 *     summary: Update Individual Ski Lesson Prices
 *     tags:
 *       - Price Management
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: "The ID of the Individual Ski Lesson Prices to update"
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
 *     summary: Retrieve Individual Snowboard Prices with optional discount
 *     tags:
 *       - Price Management
 *     parameters:
 *       - in: query
 *         name: fromDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: "Start date for the snowboard lesson (format: MM/DD/YYYY)"
 *       - in: query
 *         name: toDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: "End date for the snowboard lesson (format: MM/DD/YYYY)"
 *       - in: query
 *         name: hours
 *         schema:
 *           type: string
 *           enum:
 *             - 2 Hours
 *             - 3 Hours
 *             - 4 Hours
 *             - Full Day
 *         required: true
 *         description: "Duration of the lesson (e.g., '1 Hour', '2 Hours', 'Full Day')"
 *       - in: query
 *         name: coupon
 *         schema:
 *           type: string
 *         required: false
 *         description: "Optional coupon code for applying a discount"
 *     responses:
 *       200:
 *         description: Successfully retrieved Individual Snowboard Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 originalUSD:
 *                   type: number
 *                   description: Original price in USD
 *                 originalGEL:
 *                   type: number
 *                   description: Original price in GEL
 *                 discountedUSD:
 *                   type: number
 *                   description: Discounted price in USD (if a valid coupon is applied, otherwise null)
 *                 discountedGEL:
 *                   type: number
 *                   description: Discounted price in GEL (if a valid coupon is applied, otherwise null)
 *       400:
 *         description: Invalid date range or missing required parameters
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
 * /api/pricemanagement/groupski:
 *   get:
 *     summary: Retrieve Group Ski Lesson Prices
 *     tags:
 *       - Price Management
 *     parameters:
 *       - in: query
 *         name: fromDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: "Start date for the group ski lesson (format: MM/DD/YYYY)"
 *       - in: query
 *         name: toDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: "End date for the group ski lesson (format: MM/DD/YYYY)"
 *       - in: query
 *         name: hours
 *         schema:
 *           type: string
 *           enum:
 *             - 2 Hours
 *             - 3 Hours
 *             - 4 Hours
 *             - Full Day
 *         required: true
 *         description: "Duration of the lesson (e.g., '2 Hours')"
 *       - in: query
 *         name: groupMembers
 *         schema:
 *           type: integer
 *           minimum: 2
 *           maximum: 5
 *         required: true
 *         description: "Number of members in the group (must be between 2 and 5)"
 *       - in: query
 *         name: coupon
 *         schema:
 *           type: string
 *         required: false
 *         description: "Optional coupon code for applying a discount"
 *     responses:
 *       200:
 *         description: Successfully retrieved Group Ski Lesson Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 originalGEL:
 *                   type: number
 *                   description: Original total price in GEL
 *                 originalUSD:
 *                   type: number
 *                   description: Original total price in USD
 *                 discountedGEL:
 *                   type: number
 *                   description: Discounted total price in GEL (if a valid coupon is applied, otherwise same as original)
 *                 discountedUSD:
 *                   type: number
 *                   description: Discounted total price in USD (if a valid coupon is applied, otherwise same as original)
 *       400:
 *         description: Invalid input (e.g., missing or invalid query parameters)
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
 *     parameters:
 *       - in: query
 *         name: participants
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: false
 *         description: Number of participants (default is 1 if not provided).
 *       - in: query
 *         name: coupon
 *         schema:
 *           type: string
 *         required: false
 *         description: Coupon code for a potential discount.
 *     responses:
 *       200:
 *         description: Successfully retrieved Paragliding Prices.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 originalGEL:
 *                   type: number
 *                   description: Original price in GEL.
 *                 originalUSD:
 *                   type: number
 *                   description: Original price in USD.
 *                 discountedGEL:
 *                   type: number
 *                   nullable: true
 *                   description: Discounted price in GEL, if applicable.
 *                 discountedUSD:
 *                   type: number
 *                   nullable: true
 *                   description: Discounted price in USD, if applicable.
 *       400:
 *         description: Invalid number of participants provided.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid number of participants
 *       404:
 *         description: Prices not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Prices not found
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Internal server error
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
 *     summary: Retrieve horseriding prices
 *     tags:
 *       - Price Management
 *     parameters:
 *       - in: query
 *         name: selector
 *         required: true
 *         schema:
 *           type: string
 *           enum:
 *             - 15 Mins
 *             - 30 Mins
 *             - 1 Hour
 *         description: Duration for the horseriding ride.
 *       - in: query
 *         name: participants
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 15
 *         description: Number of participants (1 to 15).
 *       - in: query
 *         name: coupon
 *         required: false
 *         schema:
 *           type: string
 *         description: Coupon code to apply a discount (optional).
 *     responses:
 *       200:
 *         description: Successfully retrieved horseriding prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 originalGEL:
 *                   type: number
 *                   description: Original price in GEL for the selected duration and participants.
 *                 originalUSD:
 *                   type: number
 *                   description: Original price in USD for the selected duration and participants.
 *                 discountedGEL:
 *                   type: number
 *                   nullable: true
 *                   description: Discounted price in GEL (null if no coupon applied or invalid).
 *                 discountedUSD:
 *                   type: number
 *                   nullable: true
 *                   description: Discounted price in USD (null if no coupon applied or invalid).
 *       400:
 *         description: Invalid request (missing or invalid selector or participants).
 *       404:
 *         description: Horseriding prices not found.
 *       500:
 *         description: Internal server error.
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
 *     parameters:
 *       - in: query
 *         name: selector
 *         required: true
 *         schema:
 *           type: string
 *           enum:
 *             - Quad Bike
 *             - 2 Person Buggy
 *             - 3 Person Buggy
 *         description: Type of bike for the session.
 *       - in: query
 *         name: participants
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 4
 *         description: Number of participants (1 to 4).
 *       - in: query
 *         name: coupon
 *         required: false
 *         schema:
 *           type: string
 *         description: Coupon code to apply a discount (optional).
 *     responses:
 *       200:
 *         description: Successfully retrieved Quad Bike Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 originalGEL:
 *                   type: number
 *                   description: Original price in GEL for the selected bike type and participants.
 *                 originalUSD:
 *                   type: number
 *                   description: Original price in USD for the selected bike type and participants.
 *                 discountedGEL:
 *                   type: number
 *                   nullable: true
 *                   description: Discounted price in GEL (null if no coupon applied or invalid).
 *                 discountedUSD:
 *                   type: number
 *                   nullable: true
 *                   description: Discounted price in USD (null if no coupon applied or invalid).
 *       400:
 *         description: Invalid request (missing or invalid selector or participants).
 *       404:
 *         description: Prices not found.
 *       500:
 *         description: Internal server error.
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
 *     parameters:
 *       - in: query
 *         name: selector
 *         required: true
 *         schema:
 *           type: string
 *           enum: ["15 Mins", "30 Mins", "1 Hour"]
 *         description: Duration of the snowmobile ride
 *       - in: query
 *         name: participants
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 15
 *         description: Number of participants
 *       - in: query
 *         name: coupon
 *         required: false
 *         schema:
 *           type: string
 *         description: Optional coupon code for discounts
 *     responses:
 *       200:
 *         description: Successfully retrieved snowmobile prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 originalGEL:
 *                   type: number
 *                 originalUSD:
 *                   type: number
 *                 discountedGEL:
 *                   type: number
 *                   nullable: true
 *                 discountedUSD:
 *                   type: number
 *                   nullable: true
 *       400:
 *         description: Invalid selector or participants value
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
 *     parameters:
 *       - in: query
 *         name: selector
 *         schema:
 *           type: string
 *           enum:
 *             - Gudauri to Tbilisi Transfer
 *             - Gudauri to Tbilisi Airport Transfer
 *             - Tbilisi Airport to Gudauri Transfer
 *             - Tbilisi Freedom Square to Gudauri Transfer
 *             - Gudauri to Kazbegi Tour
 *             - Gudauri to Gergeti Excursion
 *             - Gudauri to Khada Exploration
 *             - Transfer from Tbilisi to Kazbegi
 *             - Full day journey - Tour from Tbilisi to Kazbegi
 *         required: true
 *         description: The selected transfer or tour type.
 *       - in: query
 *         name: participants
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 7
 *         required: true
 *         description: The number of participants (between 1 and 7).
 *       - in: query
 *         name: coupon
 *         schema:
 *           type: string
 *         required: false
 *         description: A coupon code to apply a discount.
 *     responses:
 *       200:
 *         description: Successfully retrieved Transfer and Tours Prices
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 originalGEL:
 *                   type: number
 *                   description: The original price in GEL.
 *                 originalUSD:
 *                   type: number
 *                   description: The original price in USD.
 *                 discountedGEL:
 *                   type: number
 *                   nullable: true
 *                   description: The discounted price in GEL, null if no coupon applied.
 *                 discountedUSD:
 *                   type: number
 *                   nullable: true
 *                   description: The discounted price in USD, null if no coupon applied.
 *       400:
 *         description: Validation errors (e.g., invalid selector or participants count).
 *       404:
 *         description: Prices not found.
 *       500:
 *         description: Internal server error.
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
router.get("/transfer", getTransferAndToursPrices);
router.put("/transfer/:id", auth, admin, updateTransferAndToursPrices);
// router.post("/transfer", createTransferAndToursPrices);

module.exports = router;
