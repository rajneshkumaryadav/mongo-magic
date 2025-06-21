import React, { useEffect, useState } from 'react';

const UserHeader = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Get the user name from localStorage when the component mounts
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  if (!userName) return null;

  return (
    <div className="bg-blue-500 text-white p-2 text-center">
      <p className="font-semibold">Chef {userName}</p>
    </div>
  );
};

export default UserHeader;