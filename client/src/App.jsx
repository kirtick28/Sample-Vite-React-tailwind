import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to My App
        </h1>
        <p className="text-gray-600 mb-6">
          This is a clean and simple page built with React and Tailwind CSS.
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
