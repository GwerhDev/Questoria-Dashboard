import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import SettingsPage from './pages/SettingsPage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import AccountPage from './pages/AccountPage';
import Loader from './components/Loader';
import { fetchAccountData } from './store/accountSlice';

const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = Cookies.get('token');

  useEffect(() => {
    setLoading(true);
    if (!token) {
      navigate('/unauthorized');
      setLoading(false);
      return;
    }
    dispatch(fetchAccountData(navigate))
      .finally(() => {
        setLoading(false);
      });

  }, [token, navigate, dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="/*" element={
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/u/account" element={<AccountPage />} />
          </Routes>
        </DashboardLayout>
      } />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;