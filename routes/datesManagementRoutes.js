const {
  getSkiSchoolDates,
  createSkiSchoolDates,
  updateSkiSchoolDates,
  getParaglidingDates,
  createParaglidingDates,
  updateParaglidingDates,
  getOtherActivitiesDates,
  createOtherActivitiesDates,
  updateOtherActivitiesDates,
  getAllDates,
} = require("../controllers/datesManagementController");

const router = require("express").Router();

/**
 * @swagger
 * /api/datesmanagement:
 *   get:
 *     summary: Retrieve all dates including ski school, paragliding, and other activities
 *     tags: [Dates Management]
 *     responses:
 *       200:
 *         description: Successfully retrieved all dates
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 skiSchoolDates:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                         enum: ["ski", "snowboard"]
 *                       type:
 *                         type: string
 *                         enum: ["individual", "group"]
 *                       startDate:
 *                         type: string
 *                         format: date-time
 *                       endDate:
 *                         type: string
 *                         format: date-time
 *                       dayOff:
 *                         type: string
 *                         format: date-time
 *                 paraglidingDates:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     startDate:
 *                       type: string
 *                       format: date-time
 *                     endDate:
 *                       type: string
 *                       format: date-time
 *                     dayOff:
 *                       type: string
 *                       format: date-time
 *                 otherActivitiesDates:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                         enum: ["transfer", "snowmobile", "horse riding", "quad bike"]
 *                       startDate:
 *                         type: string
 *                         format: date-time
 *                       endDate:
 *                         type: string
 *                         format: date-time
 *                       dayOff:
 *                         type: string
 *                         format: date-time
 *       500:
 *         description: Internal server error
 */
router.get("/", getAllDates);

// ========== SKI SCHOOL ========== //

/**
 * @swagger
 * /api/datesmanagement/ski:
 *   get:
 *     summary: Retrieve all ski school dates
 *     tags: [Dates Management]
 *     responses:
 *       200:
 *         description: Successfully retrieved all ski school dates
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                     enum: [ "ski", "snowboard" ]
 *                   type:
 *                     type: string
 *                     enum: [ "individual", "group" ]
 *                   startDate:
 *                     type: string
 *                     format: date-time
 *                   endDate:
 *                     type: string
 *                     format: date-time
 *                   dayOff:
 *                     type: array
 *                     items:
 *                       type: string
 *                       format: date-time
 *                     description: An array of exactly two date-time strings. The first value is the start of the day off, and the second is the end.
 *       500:
 *         description: Internal server error
 *
 *   post:
 *     summary: Create new ski school dates
 *     tags: [Dates Management]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 enum: [ "ski", "snowboard" ]
 *               type:
 *                 type: string
 *                 enum: [ "individual", "group" ]
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *               dayOff:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: date-time
 *                 description: An array of exactly two date-time strings. The first value is the start of the day off, and the second is the end.
 *     responses:
 *       201:
 *         description: Successfully created new ski school dates
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                   enum: [ "ski", "snowboard" ]
 *                 type:
 *                   type: string
 *                   enum: [ "individual", "group" ]
 *                 startDate:
 *                   type: string
 *                   format: date-time
 *                 endDate:
 *                   type: string
 *                   format: date-time
 *                 dayOff:
 *                   type: array
 *                   items:
 *                     type: string
 *                     format: date-time
 *                   description: An array of exactly two date-time strings. The first value is the start of the day off, and the second is the end.
 *       500:
 *         description: Internal server error
 *
 * /api/datesmanagement/ski/{id}:
 *   put:
 *     summary: Update ski school dates
 *     tags: [Dates Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the ski school dates to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 enum: [ "ski", "snowboard" ]
 *               type:
 *                 type: string
 *                 enum: [ "individual", "group" ]
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *               dayOff:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: date-time
 *                 description: An array of exactly two date-time strings. The first value is the start of the day off, and the second is the end.
 *     responses:
 *       200:
 *         description: Dates updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Dates updated successfully"
 *       404:
 *         description: Ski School Dates not found
 *       500:
 *         description: Internal server error
 */
router.get("/ski", getSkiSchoolDates);
router.post("/ski", createSkiSchoolDates);
router.put("/ski/:id", updateSkiSchoolDates);

// ========== PARAGLIDING ========== //

/**
 * @swagger
 * /api/datesmanagement/paragliding:
 *   get:
 *     summary: Retrieve the latest paragliding dates
 *     tags: [Dates Management]
 *     responses:
 *       200:
 *         description: Successfully retrieved the latest paragliding dates
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 startDate:
 *                   type: string
 *                   format: date-time
 *                 endDate:
 *                   type: string
 *                   format: date-time
 *                 dayOff:
 *                   type: string
 *                   format: date-time
 *       500:
 *         description: Internal server error
 *
 *   post:
 *     summary: Create new paragliding dates
 *     tags: [Dates Management]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *               dayOff:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Successfully created new paragliding dates
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 startDate:
 *                   type: string
 *                   format: date-time
 *                 endDate:
 *                   type: string
 *                   format: date-time
 *                 dayOff:
 *                   type: string
 *                   format: date-time
 *       500:
 *         description: Internal server error
 *
 * /api/datesmanagement/paragliding/{id}:
 *   put:
 *     summary: Update paragliding dates
 *     tags: [Dates Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the paragliding dates to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *               dayOff:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Dates updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Dates updated successfully"
 *       404:
 *         description: Paragliding Dates not found
 *       500:
 *         description: Internal server error
 */
router.get("/paragliding", getParaglidingDates);
router.post("/paragliding", createParaglidingDates);
router.put("/paragliding/:id", updateParaglidingDates);

// ========== OTHER ACTIVITIES ========== //

/**
 * @swagger
 * /api/datesmanagement/other:
 *   get:
 *     summary: Retrieve all other activities dates
 *     tags: [Dates Management]
 *     responses:
 *       200:
 *         description: Successfully retrieved all other activities dates
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                     enum: ["transfer", "snowmobile", "horse riding", "quad bike"]
 *                   startDate:
 *                     type: string
 *                     format: date-time
 *                   endDate:
 *                     type: string
 *                     format: date-time
 *                   dayOff:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Internal server error
 *
 *   post:
 *     summary: Create new other activities dates
 *     tags: [Dates Management]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 enum: ["transfer", "snowmobile", "horse riding", "quad bike"]
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *               dayOff:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Successfully created new other activities dates
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                   enum: ["transfer", "snowmobile", "horse riding", "quad bike"]
 *                 startDate:
 *                   type: string
 *                   format: date-time
 *                 endDate:
 *                   type: string
 *                   format: date-time
 *                 dayOff:
 *                   type: string
 *                   format: date-time
 *       500:
 *         description: Internal server error
 *
 * /api/datesmanagement/other/{id}:
 *   put:
 *     summary: Update other activities dates
 *     tags: [Dates Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the other activities dates to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 enum: ["transfer", "snowmobile", "horse riding", "quad bike"]
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *               dayOff:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Dates updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Dates updated successfully"
 *       404:
 *         description: Other Activities Dates not found
 *       500:
 *         description: Internal server error
 */
router.get("/other", getOtherActivitiesDates);
router.post("/other", createOtherActivitiesDates);
router.put("/other/:id", updateOtherActivitiesDates);

module.exports = router;
