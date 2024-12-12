import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 drop-shadow-lg">
                Code Art
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a
                  href="/"
                  className="text-gray-200 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-lg text-md font-semibold transition-all duration-300"
                >
                  Home
                </a>

                <a
                  href="/"
                  className="text-gray-200 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-lg text-md font-semibold transition-all duration-300"
                >
                  About
                </a>

                <a
                  href="/"
                  className="text-gray-200 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-lg text-md font-semibold transition-all duration-300"
                >
                  Services
                </a>

                <a
                  href="/"
                  className="text-gray-200 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-lg text-md font-semibold transition-all duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-lg text-lg font-medium transition-all duration-300"
            >
              Home
            </a>

            <a
              href="/"
              className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-lg text-lg font-medium transition-all duration-300"
            >
              About
            </a>

            <a
              href="/"
              className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-lg text-lg font-medium transition-all duration-300"
            >
              Services
            </a>

            <a
              href="/"
              className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-lg text-lg font-medium transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
