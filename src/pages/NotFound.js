// src/NotFound.js

import React from 'react';

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-500">404</h1>
        <p className="mt-4 text-xl text-gray-700">Oops! The page you're looking for does not exist.</p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-500"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
