import React from 'react';
import { Lightbulb, AlertCircle } from 'lucide-react';

const Feedback = ({ feedback, showHint, hint }) => {
  return (
    <>
      {showHint && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-yellow-800 mb-1">💡 Hint (Cost: 1 Life)</p>
              <p className="text-yellow-700">{hint}</p>
            </div>
          </div>
        </div>
      )}

      {feedback && (
        <div className={`p-4 rounded-lg mb-6 flex items-start gap-3 ${
          feedback.includes('Correct') || feedback.includes('Congratulations') 
            ? 'bg-green-50 text-green-800 border-l-4 border-green-400' :
          feedback.includes('Incorrect') || feedback.includes('Game Over')
            ? 'bg-red-50 text-red-800 border-l-4 border-red-400' :
          feedback.includes('Hint revealed')
            ? 'bg-orange-50 text-orange-800 border-l-4 border-orange-400' :
          'bg-blue-50 text-blue-800 border-l-4 border-blue-400'
        }`}>
          {feedback.includes('Hint revealed') && (
            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          )}
          <p className="font-medium">{feedback}</p>
        </div>
      )}
    </>
  );
};

export default Feedback;