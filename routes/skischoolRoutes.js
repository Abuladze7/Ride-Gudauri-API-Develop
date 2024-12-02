const express = require("express");
const router = express.Router();
const {
  createskischoolBooking,
  getskischoolBooking,
  updateSkischoolBooking,
  deleteSkischoolBooking,
  submitBooking,
} = require("../controllers/skischoolController");

router.post("/submit", submitBooking);

router.post("/", createskischoolBooking);
router.get("/", getskischoolBooking);
router.put("/:id", updateSkischoolBooking);
router.delete("/:id", deleteSkischoolBooking);

module.exports = router;
