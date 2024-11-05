class LoanCalculator {
    static calculateLoan(amount, interestRate, termInMonths) {
        if (amount <= 0 || interestRate <= 0 || termInMonths <= 0) {
            throw new Error("All values must be greater than zero.");
        }

        const monthlyRate = (interestRate / 100) / 12;
        const factor = Math.pow(1 + monthlyRate, termInMonths);
        const monthlyPayment = (amount * monthlyRate * factor) / (factor - 1);

        if (!isFinite(monthlyPayment)) {
            throw new Error("Invalid calculation values.");
        }

        const totalPayment = (monthlyPayment * termInMonths).toFixed(2);
        const totalInterest = (totalPayment - amount).toFixed(2);

        return {
            monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
            totalPayment: parseFloat(totalPayment),
            totalInterest: parseFloat(totalInterest)
        };
    }
}

module.exports = LoanCalculator;
