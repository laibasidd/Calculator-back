const ExpenseModel = require("../models/expenseModel");

exports.addExpense = (req, res) => {
  const { itemName, quantity, price } = req.body;

  if (!itemName || !quantity || !price) {
    return res
      .status(400)
      .json({ error: "Item name, quantity, and price are required." });
  }

  ExpenseModel.addExpense(itemName, quantity, price);
  return res.status(201).json({ message: "Expense added successfully." });
};

exports.getExpenses = (req, res) => {
  const expenses = ExpenseModel.getExpenses();
  const totalExpenses = ExpenseModel.getTotalExpenses();
  return res.json({ expenses, total: totalExpenses });
};

exports.deleteExpense = (req, res) => {
  const id = req.params.id;

  const removed = ExpenseModel.removeExpense(id);
  if (removed) {
    return res.status(200).json({ message: "Expense removed successfully." });
  } else {
    return res.status(404).json({ error: "Expense not found." });
  }
};