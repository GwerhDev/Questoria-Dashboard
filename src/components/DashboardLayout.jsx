import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen font-sans text-gray-400">
      {/* Sidebar */}
      <aside className="w-64 text-text-primary flex flex-col transition-colors duration-300 bg-transparent backdrop-blur-md supports-backdrop-blur:bg-opacity-50 border-r border-border">
        {/* Logo/Title */}
        <div className="p-4">
            <h1 className="text-2xl text-center font-semibold text-text-primary">Questoria</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center p-2 rounded-lg transition-colors duration-200 text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-600"><FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />Dashboard</a>
          <a href="#" className="flex items-center p-2 rounded-lg transition-colors duration-200 text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-600"><FontAwesomeIcon icon={faUsers} className="mr-2" />Users</a>
          <a href="#" className="flex items-center p-2 rounded-lg transition-colors duration-200 text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-600"><FontAwesomeIcon icon={faCog} className="mr-2" />Settings</a>
        </nav>
        <div className="p-4 border-t border-border text-sm text-text-secondary">
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
              className="p-2 rounded-xl bg-transparent border border-gray-500 text-text-primary focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
            />
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