import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100 w-full">
      {/* Sidebar */}
      <aside className="w-64 bg-black-primary text-white-primary flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Questoria
        </div>
        <nav className="flex-1 p-4 space-y-2 w-full">
          <a href="#" className="block p-2 rounded hover:bg-gray-700">Dashboard</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">Users</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">Settings</a>
        </nav>
        <div className="p-4 border-t border-gray-700 text-sm">
          Logged in as Admin
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Navbar */}
        <header className="bg-white-primary shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border border-gray-300 rounded-md"
            />
            <button className="p-2 bg-cyan-500 text-white-primary rounded-md hover:bg-cyan-600">Profile</button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-4 bg-gray-100 w-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
