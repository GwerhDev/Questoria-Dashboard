

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCog, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const Sidebar = ({ isCollapsed, toggleSidebar, isMobile }) => {
  const widthClass = isCollapsed ? (isMobile ? 'w-16' : '') : 'w-64';

  return (
    <aside 
      className={`
        text-text-primary flex flex-col bg-surface backdrop-blur-lg 
        supports-backdrop-blur:bg-opacity-75 border-r border-border h-full
        transition-all duration-300 ease-in-out z-10
        ${isMobile ? 'absolute' : 'relative'}
        ${widthClass}
      `}
    >
      <div className="p-4 flex justify-center items-center">
        <h1 className={`text-2xl font-semibold text-text-primary ${isCollapsed ? 'hidden' : 'block'}`}>Questoria</h1>
      </div>

      <div className={`flex-1 flex flex-col justify-between`}>
        <nav className="p-4 space-y-2">
          <a href="#" className={`flex items-center p-2 rounded-lg transition-colors duration-200 text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-600 ${isCollapsed ? 'justify-center' : ''}`}>
            <FontAwesomeIcon icon={faTachometerAlt} />
            <span className={`ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>Dashboard</span>
          </a>
          <a href="#" className={`flex items-center p-2 rounded-lg transition-colors duration-200 text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-600 ${isCollapsed ? 'justify-center' : ''}`}>
            <FontAwesomeIcon icon={faUsers} />
            <span className={`ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>Users</span>
          </a>
          <a href="#" className={`flex items-center p-2 rounded-lg transition-colors duration-200 text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-600 ${isCollapsed ? 'justify-center' : ''}`}>
            <FontAwesomeIcon icon={faCog} />
            <span className={`ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>Settings</span>
          </a>
        </nav>

        <div>
          <div className={`p-4 border-t border-border text-sm text-text-secondary ${isCollapsed ? 'hidden' : 'block'}`}>
            Logged in as Admin
          </div>
          <div className="p-4 border-t border-border">
            <button onClick={toggleSidebar} className={`flex items-center py-2 rounded-lg transition-colors duration-200 text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-600 w-full justify-center`}>
              <FontAwesomeIcon icon={isCollapsed ? faChevronRight : faChevronLeft} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
