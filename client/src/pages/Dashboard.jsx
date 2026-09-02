import { useEffect, useState } from "react";
import { getExpenses } from "../services/api";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getExpenses();
        setExpenses(data.expenses);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  const totalExpenses = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">

      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Dashboard
        </h1>

        <p className="text-gray-400 mb-8">
          Welcome to your FinBuddy dashboard
        </p>

        {/* Total Expenses */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
          <p className="text-gray-400">
            Total Expenses
          </p>

          <h2 className="text-4xl font-bold text-green-400 mt-2">
            ₹{totalExpenses.toLocaleString("en-IN")}
          </h2>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-gray-400">
            Loading expenses...
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="text-red-400">
            {error}
          </p>
        )}

        {/* Expenses */}
        {!loading && !error && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Your Expenses
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
                    className="bg-gray-900 border border-gray-800 rounded-2xl p-5 flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-semibold">
                        {expense.title}
                      </h3>

                      <p className="text-gray-400 text-sm">
                        {expense.category}
                      </p>
                    </div>

                    <p className="text-xl font-semibold text-green-400">
                      ₹{Number(expense.amount).toLocaleString("en-IN")}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
}

export default Dashboard;