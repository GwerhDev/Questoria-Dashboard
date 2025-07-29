import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </header>
  );
};

export default Header;