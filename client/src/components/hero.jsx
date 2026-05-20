function Hero() {
  return (
    <section className="text-white min-h-[90vh] flex items-center">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Smart Expense <br />
            & Savings <span className="text-green-400">Management</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            FinBuddy helps students and common people manage
            expenses, track savings, discover government schemes,
            and build smarter financial habits.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-green-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-green-300 transition">
              Get Started
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded-xl hover:border-green-400 hover:text-green-400 transition">
              Learn More
            </button>

          </div>

        </div>

        {/* Right Side Card */}
        <div className="flex justify-center">

          <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-800 w-full max-w-md">

            <h2 className="text-2xl font-bold mb-6 text-green-400">
              Monthly Overview
            </h2>

            <div className="space-y-6">

              <div>
                <p className="text-gray-400">Income</p>
                <h3 className="text-3xl font-bold">₹25,000</h3>
              </div>

              <div>
                <p className="text-gray-400">Expenses</p>
                <h3 className="text-3xl font-bold text-red-400">
                  ₹14,200
                </h3>
              </div>

              <div>
                <p className="text-gray-400">Savings</p>
                <h3 className="text-3xl font-bold text-green-400">
                  ₹10,800
                </h3>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;