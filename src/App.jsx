import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import SettingsPage from './pages/SettingsPage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import AccountPage from './pages/AccountPage';
import CreatorPage from './pages/CreatorPage';
import CreateAdventurePage from './pages/CreateAdventurePage';
import AdventureDetailPage from './pages/AdventureDetailPage';
import CreateQuestPage from './pages/CreateQuestPage';

const AppContent = () => {
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
            <Route path="/creator" element={<CreatorPage />} />
            <Route path="/creator/new" element={<CreateAdventurePage />} />
            <Route path="/creator/:adventureId" element={<AdventureDetailPage />} />
            <Route path="/creator/:adventureId/new-quest" element={<CreateQuestPage />} />
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