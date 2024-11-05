const BMICalculator = require('../models/bmiModel');

exports.calculateBMI = (req, res) => {
    console.log('Request received for /bmi');
    console.log('Request body:', req.body);

    const { weight, height } = req.body;

    try {
        const bmiValue = BMICalculator.calculateBMI(Number(weight), Number(height));
        const category = BMICalculator.getCategory(bmiValue);
        return res.json({ bmi: bmiValue, category });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
