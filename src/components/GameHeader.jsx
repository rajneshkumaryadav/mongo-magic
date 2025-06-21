import React from 'react';
import { ChefHat, Trophy, Heart, Target } from 'lucide-react';

const GameHeader = ({ currentLevel, totalLevels, score, lives, streak }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-4 mb-6 border-4 border-yellow-100 animate-slide-in">
      <div className="flex items-center justify-between">
        {/* Title & Level */}
        <div className="flex items-center gap-4">
          <ChefHat className="h-10 w-10 text-orange-500 animate-bounce-slow" />
          <div>
            <h1 className="text-2xl font-extrabold text-gray-800 tracking-wide">🍽️ Mario's Restaurant</h1>
            <p className="text-sm text-gray-500">🎮 Level {currentLevel} of {totalLevels}</p>
          </div>
        </div>

        {/* Score, Lives, Streak */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500 animate-pulse" />
            <span className="font-bold text-lg text-gray-800">{score}</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className={`h-5 w-5 ${
                  i < lives ? 'text-red-500 fill-current animate-pop' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-500 animate-wiggle-slow" />
            <span className="text-sm font-semibold text-gray-600">🔥 Streak: {streak}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;
