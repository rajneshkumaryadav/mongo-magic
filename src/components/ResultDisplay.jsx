import React from 'react';

const ResultDisplay = ({ result, levelComplete }) => {
  if (!levelComplete || !result) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Query Result</h3>
      <div className="bg-gray-50 rounded-lg p-4 max-h-48 overflow-y-auto">
        <pre className="text-sm text-gray-700">
          {JSON.stringify(result, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default ResultDisplay;