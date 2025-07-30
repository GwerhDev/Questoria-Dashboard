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
    <div className="flex flex-col h-screen dark:bg-dark-background bg-light-background font-sans ">
      {/* Navbar */}
      <header className="p-4 flex justify-between items-center transition-colors duration-300">
        <h1 className="text-2xl font-semibold dark:text-dark-text-primary text-light-text-primary">Questoria</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-xl dark:bg-dark-background dark:text-dark-text-primary text-light-text-primary focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
          />
          <span
            onClick={toggleDarkMode}
            className="cursor-pointer dark:text-dark-text-primary text-light-text-primary transition-colors duration-200"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </span>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 dark:text-dark-text-primary text-light-text-primary flex flex-col transition-colors duration-300">
          <nav className="flex-1 p-4 space-y-2">
            <a href="#" className="flex items-center p-2 rounded-lg transition-colors duration-200 text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-600"><FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />Dashboard</a>
            <a href="#" className="flex items-center p-2 rounded-lg transition-colors duration-200 text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-600"><FontAwesomeIcon icon={faUsers} className="mr-2" />Users</a>
            <a href="#" className="flex items-center p-2 rounded-lg transition-colors duration-200 text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-600"><FontAwesomeIcon icon={faCog} className="mr-2" />Settings</a>
          </nav>
          <div className="p-4 border-t dark:border-dark-border border-light-border text-sm dark:text-dark-text-secondary text-light-text-secondary">
            Logged in as Admin
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Content Area */}
          <div className="w-full flex-1 dark:bg-dark-surface bg-light-surface overflow-auto p-4 transition-colors duration-300 flex justify-center rounded-tl-lg">
            <div className="p-4 rounded w-full">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
