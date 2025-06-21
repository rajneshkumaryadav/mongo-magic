import React from 'react';

const LevelInfo = ({ level }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{level.title}</h2>
      <p className="text-gray-600 mb-4">{level.description}</p>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <p className="font-medium text-blue-800">Task: {level.task}</p>
      </div>
    </div>
  );
};

export default LevelInfo;