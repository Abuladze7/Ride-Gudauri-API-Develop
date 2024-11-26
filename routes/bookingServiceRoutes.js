const router = require("express").Router();
const {
  getAllBookingServices,
  createBookingService,
  updateBookingService,
  deleteBookingService,
} = require("../controllers/bookingServiceController");

/**
 * @swagger
 * /api/bookingservices:
 *   get:
 *     summary: Get all booking services
 *     tags: [Booking Services]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter booking services by name.
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter booking services by type.
 *     responses:
 *       200:
 *         description: A list of all booking services matching the query.
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
 *                   type:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Internal server error.
 *
 *   post:
 *     summary: Create a new booking service
 *     tags: [Booking Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *     responses:
 *       201:
 *         description: Booking service created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 type:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       500:
 *         description: Internal server error.
 *
 * /api/bookingservices/{id}:
 *   put:
 *     summary: Update a booking service
 *     tags: [Booking Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the booking service to be updated.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *     responses:
 *       200:
 *         description: Booking service updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 type:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Booking service not found.
 *       500:
 *         description: Internal server error.
 *
 *   delete:
 *     summary: Delete a booking service
 *     tags: [Booking Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the booking service to be deleted.
 *     responses:
 *       200:
 *         description: Booking service deleted successfully.
 *       404:
 *         description: Booking service not found.
 *       500:
 *         description: Internal server error.
 */
router.route("/").get(getAllBookingServices).post(createBookingService);
router.route("/:id").put(updateBookingService).delete(deleteBookingService);

module.exports = router;
