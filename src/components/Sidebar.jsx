import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-primary text-white p-4 min-h-screen">
      <h2 className="text-2xl font-extrabold mb-6">Questoria</h2>
      <nav>
        <ul>
          <li className="mb-2">
            <a href="#" className="block hover:bg-primary-dark p-2 rounded font-medium">Dashboard</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block hover:bg-primary-dark p-2 rounded font-medium">Analytics</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block hover:bg-primary-dark p-2 rounded font-medium">Reports</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block hover:bg-primary-dark p-2 rounded font-medium">Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;