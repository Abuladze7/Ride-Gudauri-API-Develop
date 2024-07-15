const express = require('express');
const router = express.Router();
const { createskischoolBooking, getskischoolBooking, updateSkischoolBooking, deleteSkischoolBooking } = require('../controllers/skischoolController');

router.post('/', createskischoolBooking);
router.get('/', getskischoolBooking);
router.put('/:id', updateSkischoolBooking);
router.delete('/:id', deleteSkischoolBooking);

module.exports = router;
