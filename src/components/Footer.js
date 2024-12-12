import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Code Art
            </h1>
            <p className="text-sm mt-1">&copy; 2024 Code Art. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="/"
              className="text-gray-300 hover:text-purple-500 transition-all duration-300"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.918V11.31h2.903V8.828c0-2.882 1.748-4.452 4.303-4.452 1.224 0 2.276.091 2.579.132v2.989h-1.771c-1.392 0-1.66.662-1.66 1.635v2.138h3.321l-.433 3.396h-2.888V24h5.656C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-300 hover:text-purple-500 transition-all duration-300"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.942 4.942 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.927 4.927 0 00-8.39 4.49A13.978 13.978 0 011.671 3.149a4.922 4.922 0 001.523 6.574 4.904 4.904 0 01-2.23-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.937 4.937 0 01-2.224.084 4.93 4.93 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.395 0-.787-.023-1.175-.068a13.945 13.945 0 007.557 2.212c9.054 0 14.002-7.496 14.002-13.986 0-.213-.005-.426-.014-.637A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-300 hover:text-purple-500 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.792 0 0 .774 0 1.723v20.554C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.277V1.723C24 .774 23.208 0 22.23 0zM7.119 20.452H3.56V9.038h3.559v11.414zM5.339 7.756c-1.135 0-2.054-.928-2.054-2.062S4.204 3.632 5.339 3.632s2.055.928 2.055 2.062-1.02 2.062-2.055 2.062zM20.452 20.452h-3.56v-5.604c0-1.336-.025-3.057-1.862-3.057-1.865 0-2.151 1.458-2.151 2.963v5.698h-3.56V9.038h3.417v1.561h.05c.476-.9 1.637-1.848 3.367-1.848 3.598 0 4.263 2.366 4.263 5.448v6.253z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
