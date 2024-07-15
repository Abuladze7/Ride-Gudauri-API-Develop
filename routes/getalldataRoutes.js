const express = require('express');
const router = express.Router();
const { getAllData } = require('../controllers/getalldataController');

router.get('/', getAllData);

module.exports = router;
