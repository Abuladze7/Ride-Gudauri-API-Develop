const {
  getNotifications,
  updateSkiSchoolNotification,
  updateParaglidingNotification,
  updateOtherActivitiesNotification,
  updateContactNotification,
} = require("../controllers/notificationsController");

const router = require("express").Router();

// ========== GET Notifications ========== //
/**
 * @swagger
 * /api/notification:
 *   get:
 *     summary: Retrieve all notifications
 *     tags: [Notifications]
 *     responses:
 *       200:
 *         description: Successfully retrieved all notifications
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 skiNotification:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     skiNotification:
 *                       type: boolean
 *                 otherActivitiesNotification:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     otherActivitiesNotification:
 *                       type: boolean
 *                 paraglidingNotification:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     paraglidingNotification:
 *                       type: boolean
 *                 contactNotification:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     contactNotification:
 *                       type: boolean
 *       500:
 *         description: Internal server error
 */
router.get("/", getNotifications);

// ========== SKI Notifications ========== //
/**
 * @swagger
 * /api/notification/ski:
 *   post:
 *     summary: Update Ski School Notification
 *     tags: [Notifications]
 *     responses:
 *       200:
 *         description: Successfully updated Ski School Notification
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 skiNotification:
 *                   type: boolean
 *       404:
 *         description: Notification not found
 *       500:
 *         description: Internal server error
 */
router.post("/ski", updateSkiSchoolNotification);

// ========== Paragliding Notifications ========== //
/**
 * @swagger
 * /api/notification/paragliding:
 *   post:
 *     summary: Update Paragliding Notification
 *     tags: [Notifications]
 *     responses:
 *       200:
 *         description: Successfully updated Paragliding Notification
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 paraglidingNotification:
 *                   type: boolean
 *       404:
 *         description: Notification not found
 *       500:
 *         description: Internal server error
 */
router.post("/paragliding", updateParaglidingNotification);

// ========== Other Activities Notifications ========== //
/**
 * @swagger
 * /api/notification/otheractivities:
 *   post:
 *     summary: Update Other Activities Notification
 *     tags: [Notifications]
 *     responses:
 *       200:
 *         description: Successfully updated or created Other Activities Notification
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 otherActivitiesNotification:
 *                   type: boolean
 *       500:
 *         description: Internal server error
 */
router.post("/otheractivities", updateOtherActivitiesNotification);

// ========== Contact Notifications ========== //
/**
 * @swagger
 * /api/notification/contact:
 *   post:
 *     summary: Update Contact Notification
 *     tags: [Notifications]
 *     responses:
 *       200:
 *         description: Successfully updated or created Contact Notification
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 contactNotification:
 *                   type: boolean
 *       500:
 *         description: Internal server error
 */
router.post("/contact", updateContactNotification);

module.exports = router;
