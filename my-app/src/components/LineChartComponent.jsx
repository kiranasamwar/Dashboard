// LineChartComponent.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register components needed for Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// Sample data
const data = {
  labels: ['06/30/2024 - 07/06/2024', '07/07/2024 - 07/13/2024', '07/14/2024 - 07/21/2024', '07/22/2024 - 07/28/2024'], // X-axis labels
  datasets: [
    {
      label: 'Sales',
      data: [1600,800, 800,800],
      borderColor: '#8884d8',
      backgroundColor: 'rgba(136, 132, 216, 0.2)',
      yAxisID: 'left-y-axis',
      fill: false,
    },
    {
      label: 'Orders',
      data: [3,2,1,1],
      borderColor: '#82ca9d',
      backgroundColor: 'rgba(130, 202, 157, 0.2)',
      yAxisID: 'right-y-axis',
      fill: false,
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
          return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
        },
      },
    },
  },
  scales: {
    x: {
      type: 'category',
      labels: ['06/30/2024 - 07/06/2024', '07/07/2024 - 07/13/2024', '07/14/2024 - 07/21/2024', '07/22/2024 - 07/28/2024'],
      title: {
        display: true,
        text: 'Period',
      },
    },
    'left-y-axis': {
      type: 'linear',
      position: 'left',
      title: {
        display: true,
        text: 'Sales',
      },
      min:0,
      ticks: {
        stepSize: 400, // Set the step size for the left y-axis
      },
    },
    'right-y-axis': {
      type: 'linear',
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: 'Orders',
      },
      min:0,
      ticks: {
        stepSize: 1, // Set the step size for the left y-axis
      },
    },
  },
};

const LineChartComponent = () => (
  <div className="line-container">
    <h1>Sales and Orders Line Chart</h1>
    <Line data={data} options={options} />
  </div>
);

export default LineChartComponent;
