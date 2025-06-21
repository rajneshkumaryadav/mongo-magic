import React from 'react';

const LevelInfo = ({ level }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border-4 border-blue-100 animate-slide-fade">
      <h2 className="text-2xl font-extrabold text-purple-700 mb-2 animate-wiggle-slow">
        🧩 {level.title}
      </h2>
      <p className="text-gray-700 mb-4 text-base leading-relaxed">
        {level.description}
      </p>
      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-lg shadow-md animate-pop-in">
        <p className="font-semibold text-blue-900">🎯 Task: {level.task}</p>
      </div>
    </div>
  );
};

export default LevelInfo;
