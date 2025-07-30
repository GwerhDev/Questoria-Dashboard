import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const adventurersData = [
  { name: 'Jan', adventurers: 400 },
  { name: 'Feb', adventurers: 300 },
  { name: 'Mar', adventurers: 500 },
  { name: 'Apr', adventurers: 450 },
  { name: 'May', adventurers: 600 },
  { name: 'Jun', adventurers: 700 },
];

const questsData = [
  { name: 'Jan', quests: 120 },
  { name: 'Feb', quests: 150 },
  { name: 'Mar', quests: 130 },
  { name: 'Apr', quests: 180 },
  { name: 'May', quests: 200 },
  { name: 'Jun', quests: 220 },
];

const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
      <div className="bg-surface p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2 text-text-primary">Adventurers Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={adventurersData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4a3b2e" />
            <XAxis dataKey="name" stroke="#d1d5db" />
            <YAxis stroke="#d1d5db" />
            <Tooltip cursor={{ fill: 'rgba(255,255,255,0.1)' }} contentStyle={{ backgroundColor: '#2e2014', border: 'none', color: '#f9fafb' }} itemStyle={{ color: '#f9fafb' }} />
            <Legend />
            <Bar dataKey="adventurers" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-surface p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2 text-text-primary">Quests Finished Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={questsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4a3b2e" />
            <XAxis dataKey="name" stroke="#d1d5db" />
            <YAxis stroke="#d1d5db" />
            <Tooltip cursor={{ fill: 'rgba(255,255,255,0.1)' }} contentStyle={{ backgroundColor: '#2e2014', border: 'none', color: '#f9fafb' }} itemStyle={{ color: '#f9fafb' }} />
            <Legend />
            <Line type="monotone" dataKey="quests" stroke="#82ca9d" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardCharts;
