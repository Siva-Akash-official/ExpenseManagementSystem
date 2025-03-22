import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = ({ expenses }) => {
  const categories = ['Food', 'Transport', 'Entertainment', 'Utilities', 'Other'];
  const categoryTotals = categories.map((category) =>
    expenses
      .filter((expense) => expense.category === category)
      .reduce((sum, expense) => sum + expense.amount, 0)
  );

  const barData = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses by Category',
        data: categoryTotals,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: expenses.map((expense) => expense.date.toLocaleDateString()),
    datasets: [
      {
        label: 'Expense Trends',
        data: expenses.map((expense) => expense.amount),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  const pieData = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses by Category',
        data: categoryTotals,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2>Expense Dashboard</h2>
      <div className="chart-container">
        <div className="chart">
          <Bar data={barData} />
        </div>
        <div className="chart">
          <Line data={lineData} />
        </div>
        <div className="chart">
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;