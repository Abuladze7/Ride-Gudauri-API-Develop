const express = require("express");
const router = express.Router();
const {
  createActivitiesManagement,
  getActivitiesManagement,
  updateActivitiesManagement,
} = require("../controllers/activitiesmanagementController");

router.post("/", createActivitiesManagement);
router.get("/", getActivitiesManagement);
router.put("/:id", updateActivitiesManagement);

module.exports = router;
