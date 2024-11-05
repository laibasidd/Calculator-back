
const AgeCalculator = require('../models/ageModel');

exports.calculateAge = (req, res) => {
    console.log('Request received for /age');
    console.log('Request body:', req.body);

    const { year, month, day } = req.body;

    try {
       
        const birthDate = new Date(year, month - 1, day);

        const age = AgeCalculator.calculateAge(birthDate);
        return res.json({ age });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
