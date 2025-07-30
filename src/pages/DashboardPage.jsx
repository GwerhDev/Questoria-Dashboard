import DashboardCharts from '../components/DashboardCharts';

const DashboardPage = () => {
  return (
    <div className="w-full text-text-primary">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Welcome to your Dashboard!</h2>
        <p>This is a basic dashboard layout. You can add your content here.</p>
      </div>
      <DashboardCharts />
    </div>
  );
};

export default DashboardPage;