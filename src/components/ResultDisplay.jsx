import React from 'react';
import { FileText } from 'lucide-react';

const ResultDisplay = ({ result, levelComplete }) => {
  if (!levelComplete || !result) return null;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border-4 border-indigo-100 animate-slide-fade">
      <h3 className="text-lg font-extrabold text-indigo-700 mb-4 flex items-center gap-2 animate-pop-in">
        <FileText className="h-5 w-5 text-indigo-500" />
        Query Result
      </h3>

      <div className="bg-gray-900 text-green-400 p-4 rounded-xl shadow-inner max-h-48 overflow-y-auto animate-fade-in-fast">
        <pre className="text-sm font-mono leading-relaxed">
          {JSON.stringify(result, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default ResultDisplay;
