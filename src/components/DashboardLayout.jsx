import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const DashboardLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex h-screen dark:bg-dark-background bg-light-background font-sans">
      {/* Sidebar */}
      <aside className="w-64 dark:bg-gradient-to-b dark:from-black-primary dark:to-black-secondary bg-gradient-to-b from-white-primary to-white-secondary dark:text-dark-text-primary text-light-text-primary flex flex-col shadow-lg transition-colors duration-300">
        <div className="p-4 text-2xl font-bold border-b dark:border-gray-700 border-gray-200">
          Questoria
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="block p-2 rounded-lg transition-colors duration-200 hover:bg-cyan-700 dark:hover:bg-cyan-600">Dashboard</a>
          <a href="#" className="block p-2 rounded-lg transition-colors duration-200 hover:bg-cyan-700 dark:hover:bg-cyan-600">Users</a>
          <a href="#" className="block p-2 rounded-lg transition-colors duration-200 hover:bg-cyan-700 dark:hover:bg-cyan-600">Settings</a>
        </nav>
        <div className="p-4 border-t dark:border-gray-700 border-gray-200 text-sm dark:text-dark-text-secondary text-light-text-secondary">
          Logged in as Admin
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="dark:bg-dark-surface bg-white-primary shadow-md p-4 flex justify-between items-center transition-colors duration-300">
          <h1 className="text-2xl font-semibold dark:text-dark-text-primary text-light-text-primary">Dashboard Overview</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border dark:border-dark-border border-light-border rounded-md dark:bg-dark-background dark:text-dark-text-primary text-light-text-primary focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors duration-300"
            />
            <span
              onClick={toggleDarkMode}
              className="cursor-pointer dark:text-dark-text-primary text-light-text-primary transition-colors duration-200"
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </span>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-4 dark:bg-dark-background bg-light-background transition-colors duration-300">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
