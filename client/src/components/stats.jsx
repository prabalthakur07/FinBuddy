function Stats() {

  const stats = [
    {
      number: "AI Powered",
      title: "Smart Financial Insights",
    },

    {
      number: "24/7",
      title: "Expense Monitoring",
    },

    {
      number: "100+",
      title: "Government Schemes",
    },

    {
      number: "Secure",
      title: "User Data Protection",
    },
  ];

  return (
    <section className="bg-black text-white py-20">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Why Choose <span className="text-green-400">FinBuddy</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Built to simplify financial management for everyone.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl text-center border border-gray-800 hover:border-green-400 hover:-translate-y-2 transition duration-300"
            >

              <h2 className="text-3xl font-bold text-green-400 mb-4">
                {item.number}
              </h2>

              <p className="text-gray-400 text-lg">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;