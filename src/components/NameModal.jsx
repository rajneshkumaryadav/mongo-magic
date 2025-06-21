import React, { useState } from 'react';
import { ChefHat, User } from 'lucide-react';

const NameModal = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();

    if (!trimmedName) {
      setError('Please enter your name to continue');
      return;
    }

    if (trimmedName.length < 2) {
      setError('Name must be at least 2 characters long');
      return;
    }

    if (trimmedName.length > 20) {
      setError('Name must be less than 20 characters');
      return;
    }

    onSave(trimmedName);
    setName('');
    setError('');
  };

  const handleClose = () => {
    setName('');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in-fast">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all animate-bounce-in-smooth">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-100 p-3 rounded-full animate-wiggle-slow">
              <ChefHat className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">👨‍🍳 Welcome to Mongo Magic Kitchen!</h2>
          <p className="text-gray-600">What should we call our new chef?</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Chef Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError('');
                }}
                placeholder="Enter your name"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors ${
                  error ? 'border-red-500' : 'border-gray-300'
                }`}
                maxLength="20"
                autoFocus
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2 animate-shake">{error}</p>}
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 animate-pop-in">
            <h3 className="font-semibold text-orange-800 mb-2">🍊 Quick Tips:</h3>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• Your progress will be saved automatically</li>
              <li>• You can change your name anytime during the game</li>
              <li>• Have fun learning MongoDB queries!</li>
            </ul>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              Start Cooking! 🍳
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NameModal;
