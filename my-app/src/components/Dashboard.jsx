import React from 'react';
import LineChartComponent from './LineChartComponent';
import PieChartComponent from './PieChartComponent';
import '../Styles/dashboard.css'; // Import CSS for layout

const Dashboard = () => (
  <div className="dashboard">
    <LineChartComponent />
    <PieChartComponent />
  </div>
);

export default Dashboard;