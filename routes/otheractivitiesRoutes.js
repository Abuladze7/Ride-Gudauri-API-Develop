const express = require('express');
const router = express.Router();
const { createOtheractivitiesBooking, getOtheractivitiesBooking, updateOtheractivitiesBooking, deleteOtheractivitiesBooking } = require('../controllers/otheractivitiesController');


router.post('/', createOtheractivitiesBooking);
router.get('/', getOtheractivitiesBooking);
router.put('/:id', updateOtheractivitiesBooking);
router.delete('/:id', deleteOtheractivitiesBooking);

module.exports = router;
