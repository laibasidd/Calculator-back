const math = require('mathjs');

class ScientificCalculator {
    static evaluateExpression(expression) {
        try {
            const result = math.evaluate(expression); 
            return result;
        } catch (error) {
            throw new Error('Invalid expression'); 
        }
    }
}

module.exports = ScientificCalculator;
