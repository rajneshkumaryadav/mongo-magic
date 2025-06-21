import React from 'react';
import { Book } from 'lucide-react';
import { menuData } from '../data/menuData';

const MenuPreview = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border-4 border-pink-100 animate-slide-fade">
      <h3 className="text-lg font-extrabold text-pink-600 mb-4 flex items-center gap-2 animate-wiggle-slow">
        <Book className="h-5 w-5 text-pink-500" />
        🍔 Restaurant Menu Collection
      </h3>
      <div className="bg-gray-50 rounded-xl p-4 max-h-48 overflow-y-auto shadow-inner animate-pop-in">
        <pre className="text-sm text-gray-700 font-mono leading-relaxed">
          {JSON.stringify(menuData.slice(0, 3), null, 2)}
          {menuData.length > 3 && '\n... and more items'}
        </pre>
      </div>
    </div>
  );
};

export default MenuPreview;
