const express = require('express');
const router = express.Router();
const scientificCalculatorController = require('../controllers/scientificCalculatorController');

router.post('/calculate', scientificCalculatorController.calculate);

module.exports = router;
