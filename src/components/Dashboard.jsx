import React from 'react';
import Chart from './Chart';
import { mockChartData, mockDashboardData } from '../data/mockData';

const Dashboard = () => {
  const { totalSales, newCustomers, conversionRate, avgOrderValue } = mockDashboardData;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-medium text-gray-500">Total Sales</h3>
          <p className="text-3xl font-extrabold text-primary">{totalSales}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-medium text-gray-500">New Customers</h3>
          <p className="text-3xl font-extrabold text-secondary">{newCustomers}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-medium text-gray-500">Conversion Rate</h3>
          <p className="text-3xl font-extrabold text-tertiary">{conversionRate}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-medium text-gray-500">Avg. Order Value</h3>
          <p className="text-3xl font-extrabold text-quaternary">{avgOrderValue}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart title="Sales Performance" data={mockChartData} color="#03A6A1" />
        <Chart title="Expenses Overview" data={mockChartData} color="#FF4F0F" />
      </div>
    </div>
  );
};

export default Dashboard;