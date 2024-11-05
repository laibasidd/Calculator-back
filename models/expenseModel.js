const { v4: uuidv4 } = require("uuid"); // Ensure this import is correct

class ExpenseModel {
  constructor() {
    this.expenses = [];
  }

  addExpense(itemName, quantity, price) {
    const expense = {
      id: uuidv4(), // Generate a UUID for each expense
      itemName,
      quantity: Number(quantity),
      price: Number(price),
      total: Number(quantity) * Number(price),
    };
    this.expenses.push(expense);
  }

  getTotalExpenses() {
    return this.expenses
      .reduce((total, expense) => total + expense.total, 0)
      .toFixed(2);
  }

  getExpenses() {
    return this.expenses;
  }

  // Modify the removeExpense method to return whether the expense was found
  removeExpense(id) {
    console.log("Attempting to remove expense with ID:", id); // Debugging log
    const expenseToRemove = this.expenses.find((expense) => expense.id === id); // Find the item by UUID
    if (expenseToRemove) {
      console.log("Expense found:", expenseToRemove); // Debugging log
      this.expenses = this.expenses.filter((expense) => expense.id !== id); // Remove by filtering out
      return true; // Success
    } else {
      console.log("Expense not found with ID:", id); // If not found
      return false; // Item not found
    }
  }
}

module.exports = new ExpenseModel();