class BMICalculator {
    static calculateBMI(weight, heightInFeet) {
        if (weight <= 0) {
            throw new Error("Weight must be greater than zero.");
        }

        if (heightInFeet <= 0) {
            throw new Error("Height must be greater than zero.");
        }

     
        const heightInMeters = heightInFeet * 0.3048; 

    
        const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        return parseFloat(bmiValue); 
    }

    static getCategory(bmiValue) {
        if (bmiValue < 18.5) {
            return 'Underweight';
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            return 'Normal weight';
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            return 'Overweight';
        } else {
            return 'Obesity';
        }
    }
}

module.exports = BMICalculator;
