import React, { useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/test');
        const data = await response.json();
        setMessage(data.message);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data from backend');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-gray-800 shadow-2xl rounded-xl p-8 max-w-md w-full border border-gray-700">
        <h1 className="text-4xl font-bold text-white mb-6">
          Welcome to My App
        </h1>

        <div className="bg-gray-700 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-200 mb-3">
            Backend Response:
          </h2>
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
            </div>
          ) : error ? (
            <p className="text-red-400">{error}</p>
          ) : (
            <p className="text-indigo-300 text-lg">{message}</p>
          )}
        </div>

        <p className="text-gray-400 mb-6">
          This is a clean and simple page built with React and Tailwind CSS.
        </p>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
