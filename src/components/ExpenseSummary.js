// src/components/ExpenseSummary.js
import React from 'react';
import './ExpenseSummary.css';

const ExpenseSummary = ({ totalAmount }) => {
  return (
    <div className="expense-summary">
      <h2>Total Expenses: ${totalAmount}</h2>
    </div>
  );
};

export default ExpenseSummary;