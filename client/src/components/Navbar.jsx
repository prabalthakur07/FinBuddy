function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-3xl font-bold text-green-400">
          FinBuddy
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li className="hover:text-green-400 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-green-400 cursor-pointer transition">
            Features
          </li>

          <li className="hover:text-green-400 cursor-pointer transition">
            Schemes
          </li>

          <li className="hover:text-green-400 cursor-pointer transition">
            About
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="border border-green-400 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-black transition">
            Login
          </button>

          <button className="bg-green-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-300 transition">
            Register
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;