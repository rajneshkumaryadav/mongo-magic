import React from 'react';
import { Book } from 'lucide-react';
import { menuData } from '../data/menuData';

const MenuPreview = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Book className="h-5 w-5" />
        Restaurant Menu Collection
      </h3>
      <div className="bg-gray-50 rounded-lg p-4 max-h-48 overflow-y-auto">
        <pre className="text-sm text-gray-700">
          {JSON.stringify(menuData.slice(0, 3), null, 2)}
          {menuData.length > 3 && '\n... and more items'}
        </pre>
      </div>
    </div>
  );
};

export default MenuPreview;