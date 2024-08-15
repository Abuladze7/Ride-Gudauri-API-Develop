const {
  getAllCoupons,
  createCoupon,
  updateCoupon,
  deleteCoupon,
  applyCoupon,
} = require("../controllers/couponController");

const router = require("express").Router();

/**
 * @swagger
 * /api/coupon:
 *   get:
 *     summary: Retrieve all coupons
 *     tags: [Coupons]
 *     responses:
 *       200:
 *         description: Successfully retrieved all coupons
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
 *                   expire:
 *                     type: string
 *                     format: date-time
 *                   skiLessonDiscount:
 *                     type: number
 *                   snowboardDiscount:
 *                     type: number
 *                   groupSkiLessonDiscount:
 *                     type: number
 *                   groupSnowboardDiscount:
 *                     type: number
 *                   paraglidingDiscount:
 *                     type: number
 *                   transferToursDiscount:
 *                     type: number
 *                   snowmobileDiscount:
 *                     type: number
 *                   horseRidingDiscount:
 *                     type: number
 *                   quadBikeDiscount:
 *                     type: number
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Internal server error
 *
 *   post:
 *     summary: Create a new coupon
 *     tags: [Coupons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               expire:
 *                 type: string
 *                 format: date-time
 *               skiLessonDiscount:
 *                 type: number
 *               snowboardDiscount:
 *                 type: number
 *               groupSkiLessonDiscount:
 *                 type: number
 *               groupSnowboardDiscount:
 *                 type: number
 *               paraglidingDiscount:
 *                 type: number
 *               transferToursDiscount:
 *                 type: number
 *               snowmobileDiscount:
 *                 type: number
 *               horseRidingDiscount:
 *                 type: number
 *               quadBikeDiscount:
 *                 type: number
 *     responses:
 *       201:
 *         description: Successfully created a new coupon
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 expire:
 *                   type: string
 *                   format: date-time
 *                 skiLessonDiscount:
 *                   type: number
 *                 snowboardDiscount:
 *                   type: number
 *                 groupSkiLessonDiscount:
 *                   type: number
 *                 groupSnowboardDiscount:
 *                   type: number
 *                 paraglidingDiscount:
 *                   type: number
 *                 transferToursDiscount:
 *                   type: number
 *                 snowmobileDiscount:
 *                   type: number
 *                 horseRidingDiscount:
 *                   type: number
 *                 quadBikeDiscount:
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
 * /api/coupon/{id}:
 *   put:
 *     summary: Update a coupon
 *     tags: [Coupons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the coupon to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               expire:
 *                 type: string
 *                 format: date-time
 *               skiLessonDiscount:
 *                 type: number
 *               snowboardDiscount:
 *                 type: number
 *               groupSkiLessonDiscount:
 *                 type: number
 *               groupSnowboardDiscount:
 *                 type: number
 *               paraglidingDiscount:
 *                 type: number
 *               transferToursDiscount:
 *                 type: number
 *               snowmobileDiscount:
 *                 type: number
 *               horseRidingDiscount:
 *                 type: number
 *               quadBikeDiscount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Successfully updated the coupon
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 expire:
 *                   type: string
 *                   format: date-time
 *                 skiLessonDiscount:
 *                   type: number
 *                 snowboardDiscount:
 *                   type: number
 *                 groupSkiLessonDiscount:
 *                   type: number
 *                 groupSnowboardDiscount:
 *                   type: number
 *                 paraglidingDiscount:
 *                   type: number
 *                 transferToursDiscount:
 *                   type: number
 *                 snowmobileDiscount:
 *                   type: number
 *                 horseRidingDiscount:
 *                   type: number
 *                 quadBikeDiscount:
 *                   type: number
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Coupon not found
 *       500:
 *         description: Internal server error
 *
 *   delete:
 *     summary: Delete a coupon
 *     tags: [Coupons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the coupon to delete
 *     responses:
 *       200:
 *         description: Successfully deleted the coupon
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Coupon successfully deleted"
 *       404:
 *         description: Coupon not found
 *       500:
 *         description: Internal server error
 *
 * /api/coupon/apply:
 *   post:
 *     summary: Apply a coupon to various activities and retrieve discounted prices
 *     tags: [Coupons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the coupon to apply
 *     responses:
 *       200:
 *         description: Coupon applied successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Coupon applied successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     discountedIndividualSkiLesson:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         one_hour:
 *                           type: number
 *                         two_hours:
 *                           type: number
 *                         three_hours:
 *                           type: number
 *                         full_day:
 *                           type: number
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                     discountedIndividualSnowboard:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         one_hour:
 *                           type: number
 *                         two_hours:
 *                           type: number
 *                         three_hours:
 *                           type: number
 *                         full_day:
 *                           type: number
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                     discountedGroupSkiLesson:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         two_hours:
 *                           type: number
 *                         three_hours:
 *                           type: number
 *                         four_hours:
 *                           type: number
 *                         full_day:
 *                           type: number
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                     discountedGroupSnowboard:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         two_hours:
 *                           type: number
 *                         three_hours:
 *                           type: number
 *                         four_hours:
 *                           type: number
 *                         full_day:
 *                           type: number
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                     discountedParagliding:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         paragliding:
 *                           type: number
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                     discountedTransfer:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         gudauriToTbilisi:
 *                           type: number
 *                         gudauriToTbilisiAirport:
 *                           type: number
 *                         tbilisiAirportToGudauri:
 *                           type: number
 *                         tbilisiFreedomSquareToGudauri:
 *                           type: number
 *                         gudauriToKazbegi:
 *                           type: number
 *                         gudauriToGergeti:
 *                           type: number
 *                         gudauriToKhada:
 *                           type: number
 *                         tbilisiToKazbegi:
 *                           type: number
 *                         fullDayTourTbilisiToKazbegi:
 *                           type: number
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                     discountedSnowmobile:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         minutes_15:
 *                           type: number
 *                         minutes_30:
 *                           type: number
 *                         hour:
 *                           type: number
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                     discountedHorseRiding:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         minutes_15:
 *                           type: number
 *                         minutes_30:
 *                           type: number
 *                         hour:
 *                           type: number
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                     discountedQuadBike:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         quad_bike:
 *                           type: number
 *                         buggy_2:
 *                           type: number
 *                         buggy_3:
 *                           type: number
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *       404:
 *         description: Coupon not found
 *       500:
 *         description: Internal server error
 */
router.route("/").get(getAllCoupons).post(createCoupon);
router.route("/:id").put(updateCoupon).delete(deleteCoupon);
router.post("/apply", applyCoupon);

module.exports = router;
