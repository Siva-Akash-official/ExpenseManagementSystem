// src/components/ExpenseList.js
import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
    return (
        <div className="expense-list">
            <h2>Expenses</h2>
            {expenses.length === 0 ? (
                <p>No expenses found.</p>
            ) : (
                <ul>
                    {expenses.map((expense) => (
                        <li key={expense.id} className="expense-item">
                            <div>
                                <h3>{expense.title}</h3>
                                <p>Amount: ${expense.amount}</p>
                                <p>Date: {expense.date.toLocaleDateString()}</p>
                                <p>Category: {expense.category}</p>
                            </div>
                            <button
                                onClick={() => onDeleteExpense(expense.id)}
                                className="delete-btn"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExpenseList;