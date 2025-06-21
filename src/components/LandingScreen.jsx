import React, { useEffect, useState } from 'react';
import { ChefHat, Play } from 'lucide-react';

const LandingScreen = ({ onStartGame }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100); // Delay for smooth load animation
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 flex items-center justify-center p-4">
      <div
        className={`bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transform transition-all duration-700 ease-out ${
          show ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
      >
        <div className="mb-6 animate-pulse">
          <ChefHat className="mx-auto h-16 w-16 text-orange-500 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2 animate-fade-in">MongoDB Query</h1>
          <h2 className="text-2xl font-bold text-orange-600 mb-4 animate-fade-in delay-150">Restaurant Game</h2>
          <p className="text-gray-600 animate-fade-in delay-300">Learn MongoDB queries by managing Mario's Restaurant menu!</p>
        </div>

        <div className="mb-6 p-4 bg-gray-50 rounded-lg animate-fade-in delay-500">
          <h3 className="font-semibold text-gray-800 mb-2">How to Play:</h3>
          <ul className="text-sm text-gray-600 text-left space-y-1 list-disc list-inside">
            <li>Write MongoDB queries to solve restaurant challenges</li>
            <li>Complete levels to unlock new challenges</li>
            <li>Build streaks for bonus points</li>
            <li>Use hints if you get stuck</li>
          </ul>
        </div>

        <button
          onClick={onStartGame}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer animate-bounce"
        >
          <Play className="h-5 w-5" />
          Start Cooking with Queries!
        </button>
      </div>
    </div>
  );
};

export default LandingScreen;
