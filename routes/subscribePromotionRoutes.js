const {
  subscribePromotion,
  getSubscribePromotion,
  deleteSubscribePromotion,
} = require("../controllers/subscribePromotionController");

const router = require("express").Router();

/**
 * @swagger
 * /api/subscribe:
 *   get:
 *     summary: Retrieve all subscribed promotions
 *     tags: [SubscribePromotion]
 *     responses:
 *       200:
 *         description: Successfully retrieved all subscribed promotions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   email:
 *                     type: string
 *       500:
 *         description: Internal server error
 *
 *   post:
 *     summary: Subscribe to promotion
 *     tags: [SubscribePromotion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email address to subscribe
 *     responses:
 *       200:
 *         description: Successfully subscribed to promotion
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Thanks for subscribing, please check your E-mail"
 *       500:
 *         description: Internal server error
 *
 * /api/subscribe/{id}:
 *   delete:
 *     summary: Delete a subscribed promotion
 *     tags: [SubscribePromotion]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the subscribed promotion to delete
 *     responses:
 *       200:
 *         description: Successfully deleted the subscribed promotion
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Subscribed user deleted successfully"
 *       404:
 *         description: Subscribed promotion not found
 *       500:
 *         description: Internal server error
 */
router.get("/", getSubscribePromotion);
router.post("/", subscribePromotion);
router.delete("/:id", deleteSubscribePromotion);

module.exports = router;
