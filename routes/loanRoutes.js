const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');


router.post('/calculate', loanController.calculateLoan);

module.exports = router;
