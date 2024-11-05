 const CalculatorModel = require('../models/calculatorModel');

exports.basicCalculator = (req, res) => {
    console.log('Request received for /basic');
  console.log('Request body:', req.body);
  const { num1, num2, operation } = req.body;
  try {
    const result = CalculatorModel.basicCalculator(Number(num1), Number(num2), operation);
    return res.json({ result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

  