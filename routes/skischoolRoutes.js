const express = require("express");
const router = express.Router();
const {
  createskischoolBooking,
  getskischoolBooking,
  updateSkischoolBooking,
  deleteSkischoolBooking,
  bookingStatus,
} = require("../controllers/skischoolController");

router.post("/bookingstatus", bookingStatus);

router.post("/", createskischoolBooking);
router.get("/", getskischoolBooking);
router.put("/:id", updateSkischoolBooking);
router.delete("/:id", deleteSkischoolBooking);

module.exports = router;
