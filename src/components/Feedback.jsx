import React from 'react';
import { Lightbulb, AlertCircle } from 'lucide-react';

const Feedback = ({ feedback, showHint, hint }) => {
  return (
    <>
      {showHint && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-6 animate-fade-in">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0 animate-bounce" />
            <div>
              <p className="font-medium text-yellow-800 mb-1">💡 Hint (Cost: 1 Life)</p>
              <p className="text-yellow-700">{hint}</p>
            </div>
          </div>
        </div>
      )}

      {feedback && (
        <div className={`p-4 rounded-lg mb-6 flex items-start gap-3 animate-pop-in ${
          feedback.includes('Correct') || feedback.includes('Congratulations') 
            ? 'bg-green-100 text-green-900 border-l-4 border-green-500 shadow-lg' :
          feedback.includes('Incorrect') || feedback.includes('Game Over')
            ? 'bg-red-100 text-red-900 border-l-4 border-red-500 shadow-lg' :
          feedback.includes('Hint revealed')
            ? 'bg-orange-100 text-orange-900 border-l-4 border-orange-500 shadow-lg' :
          'bg-blue-100 text-blue-900 border-l-4 border-blue-500 shadow-lg'
        }`}>
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5 animate-wiggle" />
            <p className="font-semibold">{feedback}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Feedback;
