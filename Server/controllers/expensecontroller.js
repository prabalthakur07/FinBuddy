const Expense = require("../models/Expense");

// =========================
// ADD EXPENSE
// =========================
const addExpense = async (req, res) => {
  try {
    const { title, amount, category, date, description } = req.body;

    if (!title || !amount || !category) {
      return res.status(400).json({
        message: "Title, amount and category are required",
      });
    }

    const expense = await Expense.create({
      user: req.user,
      title,
      amount,
      category,
      date,
      description,
    });

    res.status(201).json({
      message: "Expense added successfully",
      expense,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// =========================
// GET MY EXPENSES
// =========================
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      user: req.user,
    }).sort({ date: -1 });

    res.status(200).json({
      expenses,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// =========================
// GET ONE EXPENSE
// =========================
const getExpense = async (req, res) => {
  try {
    const expense = await Expense.findOne({
      _id: req.params.id,
      user: req.user,
    });

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    res.status(200).json({
      expense,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// =========================
// UPDATE EXPENSE
// =========================
const updateExpense = async (req, res) => {
  try {
    const { title, amount, category, date, description } = req.body;

    const expense = await Expense.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user,
      },
      {
        title,
        amount,
        category,
        date,
        description,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    res.status(200).json({
      message: "Expense updated successfully",
      expense,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// =========================
// DELETE EXPENSE
// =========================
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndDelete({
      _id: req.params.id,
      user: req.user,
    });

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    res.status(200).json({
      message: "Expense deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  addExpense,
  getExpenses,
  getExpense,
  updateExpense,
  deleteExpense,
};