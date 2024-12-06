const express = require("express");
const router = express.Router();
const {
  createOtheractivitiesBooking,
  getOtheractivitiesBooking,
  updateOtheractivitiesBooking,
  deleteOtheractivitiesBooking,
  bookingStatus,
} = require("../controllers/otheractivitiesController");

router.post("/bookingstatus", bookingStatus);

router.post("/", createOtheractivitiesBooking);
router.get("/", getOtheractivitiesBooking);
router.put("/:id", updateOtheractivitiesBooking);
router.delete("/:id", deleteOtheractivitiesBooking);

module.exports = router;
