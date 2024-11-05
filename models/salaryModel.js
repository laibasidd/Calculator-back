
class SalaryCalculator {
    static calculateSalary(grossSalary, taxRate, providentFundRate, allowances, medicalInsurance) {
        if (grossSalary <= 0 || taxRate < 0 || providentFundRate < 0 || medicalInsurance < 0) {
            throw new Error("Invalid input values.");
        }
 const monthlySalary = grossSalary / 12;
const taxAmount = (grossSalary * (taxRate / 100)).toFixed(2);
        const providentFundAmount = (grossSalary * (providentFundRate / 100)).toFixed(2);
        const totalAllowances = allowances || 0;
        const medicalInsuranceAmount = medicalInsurance || 0;

        
        const netSalary = (grossSalary + totalAllowances - taxAmount - providentFundAmount - medicalInsuranceAmount).toFixed(2);

        return {
            monthlySalary: parseFloat(monthlySalary.toFixed(2)),
            grossSalary: parseFloat(grossSalary.toFixed(2)),
            taxAmount: parseFloat(taxAmount),
            providentFundAmount: parseFloat(providentFundAmount),
            totalAllowances: parseFloat(totalAllowances.toFixed(2)),
            medicalInsuranceAmount: parseFloat(medicalInsuranceAmount.toFixed(2)),
            netSalary: parseFloat(netSalary)
        };
    }
}

module.exports = SalaryCalculator;
