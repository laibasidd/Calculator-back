
const express = require('express');
const router = express.Router();
const gpaController = require('../controllers/gpaController');

router.post('/calculate', gpaController.calculateGPA);

module.exports = router;
