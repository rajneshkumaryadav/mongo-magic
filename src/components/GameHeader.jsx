import React from 'react';
import { ChefHat, Trophy, Heart, Target } from 'lucide-react';

const GameHeader = ({ currentLevel, totalLevels, score, lives, streak }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <ChefHat className="h-8 w-8 text-orange-500" />
          <div>
            <h1 className="text-xl font-bold text-gray-800">Mario's Restaurant</h1>
            <p className="text-sm text-gray-600">Level {currentLevel} of {totalLevels}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span className="font-bold text-gray-800">{score}</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <Heart
                key={i}
                className={`h-5 w-5 ${i < lives ? 'text-red-500 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium text-gray-600">Streak: {streak}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;