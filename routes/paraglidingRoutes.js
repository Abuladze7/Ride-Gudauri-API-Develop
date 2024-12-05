const express = require("express");
const router = express.Router();
const {
  createParaglidingBooking,
  getParaglidingBooking,
  updateParaglidingBooking,
  deleteParaglidingBooking,
  bookingStatus,
} = require("../controllers/paraglidingController");

router.post("/bookingstatus", bookingStatus);

router.post("/", createParaglidingBooking);
router.get("/", getParaglidingBooking);
router.put("/:id", updateParaglidingBooking);
router.delete("/:id", deleteParaglidingBooking);

module.exports = router;
