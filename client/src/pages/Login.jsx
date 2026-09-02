import { useState } from "react";
import { loginUser } from "../services/api";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

    setError("");
    setLoading(true);

    try {
      const data = await loginUser(formData);

      // Save JWT token
      localStorage.setItem("token", data.token);

      // Save user information
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to dashboard
      window.location.href = "/dashboard";
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">

      <div className="bg-gray-900 p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-800">

        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Welcome Back
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Email */}
          <div>
            <label className="block text-gray-400 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-400 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-400"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm text-center">
              {error}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-400 text-black py-3 rounded-xl font-semibold hover:bg-green-300 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;