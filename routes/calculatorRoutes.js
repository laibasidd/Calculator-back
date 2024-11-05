const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

router.post('/basic', calculatorController.basicCalculator);

module.exports = router;