const InflationCalculator = require('../models/inflationCalculatorModel');

exports.calculateInflation = (req, res) => {
    const { oldPrice, newPrice } = req.body;

    if (oldPrice === undefined || newPrice === undefined) {
        return res.status(400).json({ error: 'Both old price and new price are required' });
    }

    try {
        const inflationRate = InflationCalculator.calculateInflation(oldPrice, newPrice);
        return res.json({ inflationRate });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
