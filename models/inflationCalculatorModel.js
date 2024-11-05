class InflationCalculator {
    static calculateInflation(oldPrice, newPrice) {
        if (oldPrice <= 0) {
            throw new Error('Old price must be greater than zero');
        }

        const inflationRate = ((newPrice - oldPrice) / oldPrice) * 100;
        return inflationRate.toFixed(2); 
    }
}

module.exports = InflationCalculator;
