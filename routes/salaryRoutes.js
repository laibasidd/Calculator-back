
const express = require('express');
const router = express.Router();
const salaryController = require('../controllers/salaryController');

router.post('/calculate', salaryController.calculateSalary);

module.exports = router;
