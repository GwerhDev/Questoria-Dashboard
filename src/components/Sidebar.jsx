

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCog, faChevronLeft, faChevronRight, faPen, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = ({ isCollapsed, toggleSidebar, isMobile }) => {
  const widthClass = isCollapsed ? (isMobile ? 'w-16' : '') : 'w-64';
  const location = useLocation();

  const getLinkClass = (path) => {
    const baseClasses = `flex items-center p-2 rounded-lg transition-colors duration-200 text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-600 ${isCollapsed ? 'justify-center' : ''}`;
    if (path === '/') {
      return location.pathname === path ? `${baseClasses} bg-gray-600 text-white` : baseClasses;
    }
    return location.pathname.startsWith(path) ? `${baseClasses} bg-gray-600 text-white` : baseClasses;
  };

  return (
    <aside
      className={`
        text-text-primary flex flex-col bg-surface backdrop-blur-lg 
        supports-backdrop-blur:bg-opacity-75 h-full
        transition-all duration-300 ease-in-out z-10
        ${isMobile ? 'absolute' : 'relative'}
        ${widthClass}
      `}
    >
      <div className="p-4 flex justify-center items-center">
        <h1 className={`text-2xl font-semibold text-text-primary ${isCollapsed ? 'hidden' : 'block'}`}>Questoria</h1>
        <h1 className={`text-2xl font-semibold text-text-primary ${!isCollapsed ? 'hidden' : 'block'}`}>Q</h1>
      </div>

      <div className={`flex-1 flex flex-col justify-between`}>
        <nav className="p-4 space-y-2">
          <Link to="/" className={getLinkClass('/')}>
            <FontAwesomeIcon icon={faHome} />
            <span className={`ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>Dashboard</span>
          </Link>
          <Link to="/users" className={getLinkClass('/users')}>
            <FontAwesomeIcon icon={faUsers} />
            <span className={`ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>Users</span>
          </Link>
          <Link to="/creator" className={getLinkClass('/creator')}>
            <FontAwesomeIcon icon={faPen} />
            <span className={`ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>Creator</span>
          </Link>
          <Link to="/settings" className={getLinkClass('/settings')}>
            <FontAwesomeIcon icon={faCog} />
            <span className={`ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>Settings</span>
          </Link>
        </nav>

        <div className="p-4">
          <button onClick={toggleSidebar} className={`flex items-center py-3 rounded-lg transition-colors duration-200 text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-600 w-full justify-center`}>
            <FontAwesomeIcon icon={isCollapsed ? faChevronRight : faChevronLeft} />
          </button>
        </div>
      </div>
    </aside>
  );
};
