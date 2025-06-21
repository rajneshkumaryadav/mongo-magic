import React from 'react';
import { RotateCcw, HelpCircle, AlertTriangle } from 'lucide-react';

const QueryInput = ({ query, setQuery, onRunQuery, onShowHint, onReset, showHint, levelComplete, lives }) => {
  const canShowHint = lives > 1 || showHint;
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Write Your MongoDB Query</h3>
      <div className="mb-4">
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-400">$</span>
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
      
      <div className="flex gap-3 flex-wrap">
        <button
          onClick={onRunQuery}
          disabled={!query.trim() || levelComplete}
          className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Run Query
        </button>
        
        <div className="relative">
          <button
            onClick={onShowHint}
            disabled={!canShowHint}
            className={`font-bold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-2 ${
              canShowHint 
                ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            title={!canShowHint ? "You need at least 2 lives to use a hint" : "Using a hint will cost you one life"}
          >
            <HelpCircle className="h-4 w-4" />
            {showHint ? 'Hide Hint' : 'Show Hint'}
            {!showHint && canShowHint && (
              <span className="text-xs bg-red-500 text-white px-1 rounded">-1 ❤️</span>
            )}
          </button>
          
          {!showHint && lives <= 1 && (
            <div className="absolute top-full left-0 mt-1 bg-red-100 border border-red-300 text-red-700 px-2 py-1 rounded text-xs flex items-center gap-1">
              <AlertTriangle className="h-3 w-3" />
              Need 2+ lives for hints
            </div>
          )}
        </div>
        
        <button
          onClick={onReset}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Reset Game
        </button>
      </div>
      
      {!showHint && canShowHint && (
        <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <strong>Warning:</strong> Using a hint will cost you one life!
          </p>
        </div>
      )}
    </div>
  );
};

export default QueryInput;