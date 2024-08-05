// PieChartComponent.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

// Sample data
const data = {
  labels: ['Sales', 'Orders'], // Labels for each segment
  datasets: [
    {
      label: 'Data Distribution',
      data: [3000, 2200], // Data values corresponding to each label
      backgroundColor: ['#8884d8', '#82ca9d'], // Colors for each segment
      borderColor: ['#8884d8', '#82ca9d'],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.label}: ${tooltipItem.raw}`;
        },
      },
    },
  },
};

const PieChartComponent = () => (
  <div className="pie-container">
    <h1>Sales and Orders Pie Chart</h1>
    <Pie data={data} options={options}/>
  </div>
);

export default PieChartComponent;
