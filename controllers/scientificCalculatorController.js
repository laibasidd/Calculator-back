const ScientificCalculator = require('../models/scientificCalculatorModel'); 

exports.calculate = (req, res) => {
    const { expression } = req.body;

    try {
        const result = ScientificCalculator.evaluateExpression(expression); 
        return res.json({ result });
    } catch (error) {
        return res.status(400).json({ error: error.message }); 
    }
};
