import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-600 to-gray-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-white font-bold text-2xl hover:text-blue-200 transition duration-300"
            >
              DigiHealth
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-white hover:text-gray-800 px-3 py-2 rounded-md transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-800 px-3 py-2 rounded-md transition"
            >
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="text-white hover:text-gray-800 px-3 py-2 rounded-md transition flex items-center">
                Services
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {servicesDropdownOpen && (
                <div className="absolute z- bg-white rounded-md shadow-lg w-48 py-2 mt-2">
                  <Link
                    to="/register-patient"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition"
                  >
                    Register Patient
                  </Link>
                  <Link
                    to="/register-doctor"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition"
                  >
                    Register Doctor
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-white hover:text-gray-800 px-3 py-2 rounded-md transition"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="bg-gray-800 text-white hover:text-gray-800 hover:bg-white px-4 py-2 rounded-md transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700 rounded-b-lg">
              <Link
                to="/"
                className="text-white block hover:bg-gray-600 px-3 py-2 rounded-md"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white block hover:bg-gray-600 px-3 py-2 rounded-md"
              >
                About
              </Link>
              <div className="relative">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="text-white w-full text-left hover:bg-gray-600 px-3 py-2 rounded-md flex justify-between items-center"
                >
                  Services
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {servicesDropdownOpen && (
                  <div className="pl-4 mt-2">
                    <Link
                      to="/register-patient"
                      className="block text-white hover:bg-gray-600 px-3 py-2 rounded-md"
                    >
                      Register Patient
                    </Link>
                    <Link
                      to="/register-doctor"
                      className="block text-white hover:bg-gray-600 px-3 py-2 rounded-md"
                    >
                      Register Doctor
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/contact"
                className="text-white block hover:bg-gray-600 px-3 py-2 rounded-md"
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="text-white block bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md text-center"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HomeNavbar;
