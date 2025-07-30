import DashboardLayout from './components/DashboardLayout';

function App() {
  return (
    <DashboardLayout>
      <div className="p-4 w-full text-light-text-primary dark:text-dark-text-primary">
        <h2 className="text-xl font-semibold mb-4">Welcome to your Dashboard!</h2>
        <p>This is a basic dashboard layout. You can add your content here.</p>
      </div>
    </DashboardLayout>
  );
}

export default App;
