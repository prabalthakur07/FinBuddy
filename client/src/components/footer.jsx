function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-bold text-green-400 mb-4">
              FinBuddy
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Smart expense and savings management platform
              for students and common people.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

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
                Contact
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              support@finbuddy.com
            </p>

            <p className="text-gray-400 mt-2">
              India
            </p>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">

          © 2026 FinBuddy. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;