import { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';

const DashboardLayout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true);
      } else {
        setIsSidebarCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen font-sans text-gray-400">
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />

      {/* Main Content Wrapper */}
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300`}>
        {/* Navbar */}
        <header className="p-4 flex justify-end items-center">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-xl bg-transparent border border-gray-500 text-text-primary focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
            />
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-2">
          <div className="w-full h-full supports-backdrop-blur:bg-opacity-50 rounded-lg p-2">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;