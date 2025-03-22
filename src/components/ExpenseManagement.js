import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import ExpenseSummary from './ExpenseSummary';
import Dashboard from './Dashboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ExpenseManagement.css';

const ExpenseManagement = ({ onLogout }) => {
  const [expenses, setExpenses] = useState([]);
  const [selectedYear, setSelectedYear] = useState('2023');

  // Add a new expense
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    toast.success('Expense added successfully!');
  };

  // Delete an expense
  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((exp) => exp.id !== id));
  };

  // Export expenses to CSV
  const exportToCSV = () => {
    if (expenses.length === 0) {
      toast.error('No expenses to export!');
      return;
    }

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      expenses
        .map((expense) =>
          [
            expense.title,
            expense.amount,
            expense.date.toLocaleDateString(),
            expense.category,
          ].join(',')
        )
        .join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'expenses.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('Expenses exported to CSV successfully!');
  };

  return (
    <div className="expense-management">
      <h1>Expense Management</h1>
      <button onClick={onLogout} className="logout-btn">
        Logout
      </button>
      <button onClick={exportToCSV} className="export-btn">
        Export to CSV
      </button>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseFilter
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
      />
      <ExpenseSummary expenses={expenses} />
      <Dashboard expenses={expenses} />
      <ExpenseList
        expenses={expenses}
        onDeleteExpense={deleteExpenseHandler}
      />
    </div>
  );
};

export default ExpenseManagement;