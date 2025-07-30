import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faTachometerAlt, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';

const DashboardLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'false' ? false : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-64 dark:text-dark-text-primary text-light-text-primary flex flex-col transition-colors duration-300 bg-light-transparent dark:bg-dark-transparent backdrop-blur-md supports-backdrop-blur:bg-opacity-50 border-r border-light-border dark:border-dark-border">
        {/* Logo/Title */}
        <div className="p-4">
            <h1 className="text-2xl text-center font-semibold dark:text-dark-text-primary text-light-text-primary">Questoria</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center p-2 rounded-lg transition-colors duration-200 text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-600"><FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />Dashboard</a>
          <a href="#" className="flex items-center p-2 rounded-lg transition-colors duration-200 text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-600"><FontAwesomeIcon icon={faUsers} className="mr-2" />Users</a>
          <a href="#" className="flex items-center p-2 rounded-lg transition-colors duration-200 text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-600"><FontAwesomeIcon icon={faCog} className="mr-2" />Settings</a>
        </nav>
        <div className="p-4 border-t dark:border-dark-border border-light-border text-sm dark:text-dark-text-secondary text-light-text-secondary">
          Logged in as Admin
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="p-4 flex justify-end items-center">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-xl bg-transparent border border-gray-500 dark:text-dark-text-primary text-light-text-primary focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
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
        <main className="flex-1 overflow-auto p-4">
          <div className="w-full h-full supports-backdrop-blur:bg-opacity-50 rounded-lg p-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;