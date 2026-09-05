import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-green-400"
        >
          FinBuddy
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">

          <Link
            to="/"
            className="hover:text-green-400 transition"
          >
            Home
          </Link>

          <Link
            to="/schemes"
            className="hover:text-green-400 transition"
          >
            Schemes
          </Link>

          <Link
            to="/about"
            className="hover:text-green-400 transition"
          >
            About
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-green-400 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/expense"
            className="hover:text-green-400 transition"
          >
            Expenses
          </Link>

        </ul>

        {/* Authentication Buttons */}
        <div className="hidden md:flex gap-4">

          <Link to="/login">
            <button className="border border-green-400 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-black transition">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="bg-green-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-300 transition">
              Register
            </button>
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;