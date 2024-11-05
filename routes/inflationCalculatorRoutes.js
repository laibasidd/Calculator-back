const express = require('express');
const router = express.Router();
const inflationCalculatorController = require('../controllers/inflationCalculatorController');

router.post('/inflation', inflationCalculatorController.calculateInflation);

module.exports = router;
