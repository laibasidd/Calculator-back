
const SalaryCalculator = require('../models/salaryModel');

exports.calculateSalary = (req, res) => {
    const { grossSalary, taxRate, providentFundRate, allowances, medicalInsurance } = req.body;

    console.log('Received request to calculate salary:', req.body); 

    try {
        const salaryDetails = SalaryCalculator.calculateSalary(
            Number(grossSalary),
            Number(taxRate),
            Number(providentFundRate),
            Number(allowances),
            Number(medicalInsurance)
        );

        console.log('Calculated Salary Details:', salaryDetails); 

        return res.json(salaryDetails);
    } catch (error) {
        console.error('Error calculating salary:', error.message);  
        return res.status(500).json({ error: error.message });
    }
};
