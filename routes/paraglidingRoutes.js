const express = require("express");
const router = express.Router();
const {
  createParaglidingBooking,
  getParaglidingBooking,
  updateParaglidingBooking,
  deleteParaglidingBooking,
} = require("../controllers/paraglidingController");

router.post("/", createParaglidingBooking);
router.get("/", getParaglidingBooking);
router.put("/:id", updateParaglidingBooking);
router.delete("/:id", deleteParaglidingBooking);

module.exports = router;
