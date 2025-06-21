import React, { useEffect, useState } from 'react';
import { ChefHat } from 'lucide-react';

const UserHeader = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  if (!userName) return null;

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 px-6 text-center shadow-md animate-slide-down">
      <div className="flex items-center justify-center gap-2">
        <ChefHat className="h-5 w-5 text-white animate-wiggle-slow" />
        <p className="font-bold text-md">Welcome, Chef {userName}! 👨‍🍳</p>
      </div>
    </div>
  );
};

export default UserHeader;
