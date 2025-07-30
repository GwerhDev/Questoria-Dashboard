import { useState, useEffect, useRef } from 'react';
import { Sidebar } from '../components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccountData } from '../store/accountSlice';
import { useNavigate, Link } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(window.innerWidth < 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const sidebarRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accountStatus = useSelector((state) => state.account.status);
  const accountData = useSelector((state) => state.account.data);

  useEffect(() => {
    dispatch(fetchAccountData());
  }, [dispatch]);

  useEffect(() => {
    if (accountStatus === 'failed' || (accountStatus === 'succeeded' && (!accountData || !accountData.logged))) {
      navigate('/unauthorized');
    }
  }, [accountStatus, accountData, navigate]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsSidebarCollapsed(mobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && !isSidebarCollapsed && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarCollapsed(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, isSidebarCollapsed]);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen font-sans text-gray-400 max-w-full overflow-x-hidden">
      <div ref={sidebarRef}>
        <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} isMobile={isMobile} />
      </div>

      {/* Main Content Wrapper */}
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${isMobile ? 'ml-16' : ''}`}>
        {/* Navbar */}
        <header className="p-4 flex justify-end items-center">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-xl bg-transparent border border-gray-500 text-text-primary focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
            />
            {accountData && accountData.logged && (
              <Link to="/u/account" className="flex items-center space-x-2 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
                {accountData.userData.profilePic ? (
                  <img src={accountData.userData.profilePic} alt="Profile" className="w-8 h-8 rounded-full" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-sm">{accountData.userData.username.charAt(0).toUpperCase()}</div>
                )}
                <span className="text-text-primary hidden md:block">{accountData.userData.username}</span>
              </Link>
            )}
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