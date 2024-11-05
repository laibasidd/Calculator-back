const LoanCalculator = require('../models/loanModel');

exports.calculateLoan = (req, res) => {
    const { amount, interestRate, term, termType } = req.body;  

    try {
        let termInMonths = termType === 'years' ? term * 12 : term;
        const loanDetails = LoanCalculator.calculateLoan(Number(amount), Number(interestRate), Number(termInMonths));
        return res.json(loanDetails);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
