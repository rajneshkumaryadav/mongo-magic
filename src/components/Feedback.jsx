import React from 'react';

const Feedback = ({ feedback, showHint, hint }) => {
  return (
    <>
      {showHint && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-6">
          <p className="text-yellow-800">
            <strong>Hint:</strong> {hint}
          </p>
        </div>
      )}

      {feedback && (
        <div className={`p-4 rounded-lg mb-6 ${
          feedback.includes('Correct') ? 'bg-green-50 text-green-800 border-l-4 border-green-400' :
          feedback.includes('Incorrect') ? 'bg-red-50 text-red-800 border-l-4 border-red-400' :
          'bg-blue-50 text-blue-800 border-l-4 border-blue-400'
        }`}>
          <p className="font-medium">{feedback}</p>
        </div>
      )}
    </>
  );
};

export default Feedback;