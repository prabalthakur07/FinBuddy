import { useEffect, useState } from "react";
import {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
} from "../services/api";

function Expense() {
  const emptyForm = {
    title: "",
    amount: "",
    category: "",
    date: "",
    description: "",
  };

  const [formData, setFormData] = useState(emptyForm);
  const [expenses, setExpenses] = useState([]);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [editingId, setEditingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  // =========================
  // FETCH EXPENSES
  // =========================
  const fetchExpenses = async () => {
    try {
      setError("");

      const data = await getExpenses();
      setExpenses(data.expenses || []);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // =========================
  // HANDLE INPUT
  // =========================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // ADD / UPDATE EXPENSE
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const expenseData = {
        title: formData.title,
        amount: Number(formData.amount),
        category: formData.category,
        date: formData.date || undefined,
        description: formData.description,
      };

      // UPDATE
      if (editingId) {
        const data = await updateExpense(editingId, expenseData);

        setMessage(data.message);

        setEditingId(null);
        setFormData(emptyForm);

        await fetchExpenses();
      }

      // ADD
      else {
        const data = await addExpense(expenseData);

        setMessage(data.message);

        setFormData(emptyForm);

        await fetchExpenses();
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // START EDITING
  // =========================
  const handleEdit = (expense) => {
    setEditingId(expense._id);

    setFormData({
      title: expense.title,
      amount: expense.amount,
      category: expense.category,
      date: expense.date
        ? new Date(expense.date).toISOString().split("T")[0]
        : "",
      description: expense.description || "",
    });

    setMessage("");
    setError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================
  // CANCEL EDIT
  // =========================
  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData(emptyForm);
    setMessage("");
    setError("");
  };

  // =========================
  // DELETE EXPENSE
  // =========================
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this expense?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);
      setMessage("");
      setError("");

      const data = await deleteExpense(id);

      setMessage(data.message);

      await fetchExpenses();
    } catch (error) {
      setError(error.message);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">

      <div className="max-w-5xl mx-auto">

        {/* =========================
            FORM
        ========================= */}

        <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-800 max-w-lg mx-auto">

          <h1 className="text-3xl font-bold text-center mb-8">
            {editingId ? "Edit Expense" : "Add Expense"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Title */}
            <div>
              <label className="block text-gray-400 mb-2">
                Expense Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Lunch"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-400"
              />
            </div>

            {/* Amount */}
            <div>
              <label className="block text-gray-400 mb-2">
                Amount
              </label>

              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="e.g. 250"
                min="0"
                step="0.01"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-400"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-400 mb-2">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-400"
              >
                <option value="">Select category</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Shopping">Shopping</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Education">Education</option>
                <option value="Health">Health</option>
                <option value="Bills">Bills</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-gray-400 mb-2">
                Date
              </label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-400"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-400 mb-2">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Optional description"
                rows="3"
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-400"
              />
            </div>

            {/* Messages */}
            {message && (
              <p className="text-green-400 text-center">
                {message}
              </p>
            )}

            {error && (
              <p className="text-red-400 text-center">
                {error}
              </p>
            )}

            {/* Buttons */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-400 text-black py-3 rounded-xl font-semibold hover:bg-green-300 transition disabled:opacity-50"
            >
              {loading
                ? editingId
                  ? "Updating Expense..."
                  : "Adding Expense..."
                : editingId
                ? "Update Expense"
                : "Add Expense"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="w-full border border-gray-600 text-gray-300 py-3 rounded-xl hover:bg-gray-800 transition"
              >
                Cancel Edit
              </button>
            )}

          </form>
        </div>

        {/* =========================
            EXPENSE LIST
        ========================= */}

        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-6">
            My Expenses
          </h2>

          {expenses.length === 0 ? (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
              <p className="text-gray-400">
                No expenses yet.
              </p>
            </div>
          ) : (
            <div className="space-y-4">

              {expenses.map((expense) => (
                <div
                  key={expense._id}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-5"
                >

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    {/* Expense information */}
                    <div>

                      <h3 className="text-xl font-semibold">
                        {expense.title}
                      </h3>

                      <p className="text-gray-400 mt-1">
                        {expense.category}
                      </p>

                      {expense.description && (
                        <p className="text-gray-500 text-sm mt-2">
                          {expense.description}
                        </p>
                      )}

                      {expense.date && (
                        <p className="text-gray-500 text-sm mt-1">
                          {new Date(expense.date).toLocaleDateString("en-IN")}
                        </p>
                      )}

                    </div>

                    {/* Amount + actions */}
                    <div className="flex flex-col md:items-end gap-3">

                      <p className="text-2xl font-semibold text-green-400">
                        ₹{Number(expense.amount).toLocaleString("en-IN")}
                      </p>

                      <div className="flex gap-3">

                        <button
                          onClick={() => handleEdit(expense)}
                          className="px-4 py-2 border border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-black transition"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(expense._id)}
                          disabled={deletingId === expense._id}
                          className="px-4 py-2 border border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-black transition disabled:opacity-50"
                        >
                          {deletingId === expense._id
                            ? "Deleting..."
                            : "Delete"}
                        </button>

                      </div>

                    </div>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Expense;