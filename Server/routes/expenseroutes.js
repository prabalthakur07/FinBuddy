const express = require("express");

const {
  addExpense,
  getExpenses,
  getExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Add expense
router.post("/", authMiddleware, addExpense);

// Get all my expenses
router.get("/", authMiddleware, getExpenses);

// Get one expense
router.get("/:id", authMiddleware, getExpense);

// Update expense
router.put("/:id", authMiddleware, updateExpense);

// Delete expense
router.delete("/:id", authMiddleware, deleteExpense);

module.exports = router;