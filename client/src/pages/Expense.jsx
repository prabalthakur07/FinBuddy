import { useState } from "react";
import { addExpense } from "../services/api";

function Expense() {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    description: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const data = await addExpense({
        title: formData.title,
        amount: Number(formData.amount),
        category: formData.category,
        date: formData.date || undefined,
        description: formData.description,
      });

      setMessage(data.message);

      setFormData({
        title: "",
        amount: "",
        category: "",
        date: "",
        description: "",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6 py-10">
      <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl w-full max-w-lg border border-gray-800">

        <h1 className="text-3xl font-bold text-center mb-8">
          Add Expense
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

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

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-400 text-black py-3 rounded-xl font-semibold hover:bg-green-300 transition disabled:opacity-50"
          >
            {loading ? "Adding Expense..." : "Add Expense"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Expense;