function Features() {

  const features = [
    {
      title: "Expense Tracking",
      description:
        "Track your daily and monthly expenses easily with smart categorization.",
    },

    {
      title: "Savings Goals",
      description:
        "Set savings targets and monitor your financial growth regularly.",
    },

    {
      title: "Government Schemes",
      description:
        "Discover scholarships, subsidies, and useful schemes for students and citizens.",
    },

    {
      title: "Smart Analytics",
      description:
        "Visualize income, expenses, and savings with interactive charts.",
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-24">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Powerful Features
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Everything you need to manage your finances smarter.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-green-400 hover:-translate-y-2 transition duration-300 shadow-lg"
            >

              <h3 className="text-2xl font-bold mb-4 text-green-400">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;