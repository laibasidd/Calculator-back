const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");

// Define routes
router.post("/add", expenseController.addExpense);
router.get("/", expenseController.getExpenses);
router.delete("/:id", expenseController.deleteExpense);
module.exports = router;