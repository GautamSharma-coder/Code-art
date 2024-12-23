import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Bell, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Welcome to CodeArt!", isNew: true },
    { id: 2, text: "Check out our new features", isNew: true }
  ]);

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <nav className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Name */}
          <div className="flex-shrink-0 relative group">
            <h1 className="text-4xl font-extrabold">
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 hover:from-purple-600 hover:via-blue-500 hover:to-teal-400 transition-all duration-500">
                  Code Art
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-purple-600 group-hover:w-full transition-all duration-500"></span>
              </span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex space-x-6">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`relative group py-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  <span className="group-hover:text-teal-500 transition-colors duration-300">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <div className={`flex items-center transition-all duration-300 ${
                isSearchOpen ? 'w-64' : 'w-8'
              }`}>
                <input
                  type="text"
                  placeholder="Search....."
                  className={`${
                    isSearchOpen ? 'w-full pl-8 pr-4' : 'w-0'
                  } py-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 text-white`}
                />
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="absolute left-2 text-gray-500 hover:text-teal-500 transition-colors duration-300"
                >
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Notifications */}
            <div className="relative group">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
                <Bell
                  size={20}
                  className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-teal-500`}
                />
                {notifications.some(n => n.isNew) && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {notifications.map(notification => (
                  <div
                    key={notification.id}
                    className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {notification.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-gray-300 hover:text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-600 hover:text-blue-500" />
              )}
            </button>

            {/* User Profile */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                <User
                  size={20}
                  className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-teal-500`}
                />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50">
                  <div className="py-1">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Your Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Settings
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="w-6 h-6 text-gray-600 dark:text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                  className="w-6 h-6 text-gray-600 dark:text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-white dark:bg-gray-800 px-4 py-3 space-y-3">
          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
            />
            <Search size={20} className="absolute left-3 top-2.5 text-white" />
          </div>

          {/* Mobile Navigation Links */}
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="block text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}

          {/* Mobile Profile Options */}
          <div className="border-t dark:border-gray-700 pt-3">
            <Link
              to="/profile"
              className="block text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 px-3 py-2"
            >
              Profile
            </Link>
            <Link
              to="/settings"
              className="block text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 px-3 py-2"
            >
              Settings
            </Link>
            <button
              className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 px-3 py-2"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;