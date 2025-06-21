import React from 'react';
import { RotateCcw } from 'lucide-react';

const QueryInput = ({ query, setQuery, onRunQuery, onShowHint, onReset, showHint, levelComplete }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Write Your MongoDB Query</h3>
      <div className="mb-4">
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-400"></span>
            <span className="text-white">MongoDB Shell</span>
          </div>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your MongoDB query here..."
            className="w-full bg-transparent text-green-400 placeholder-gray-500 resize-none outline-none font-mono"
            rows="3"
          />
        </div>
      </div>
      
      <div className="flex gap-3">
        <button
          onClick={onRunQuery}
          disabled={!query.trim() || levelComplete}
          className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Run Query
        </button>
        <button
          onClick={onShowHint}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          {showHint ? 'Hide Hint' : 'Show Hint'}
        </button>
        <button
          onClick={onReset}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default QueryInput;