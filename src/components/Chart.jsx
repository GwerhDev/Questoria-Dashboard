import React from 'react';

const Chart = ({ title, data, color }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div
        className="h-48 flex items-end justify-center text-white font-extrabold text-xl"
        style={{ backgroundColor: color }}
      >
        {/* Mock Chart Representation */}
        <p>Chart Placeholder</p>
      </div>
      <div className="mt-2 text-sm text-gray-500 font-medium">
        {data && data.labels && (
          <p>Data for: {data.labels.join(', ')}</p>
        )}
        {data && data.datasets && data.datasets[0] && (
          <p>{data.datasets[0].label}: {data.datasets[0].data.join(', ')}</p>
        )}
      </div>
    </div>
  );
};

export default Chart;