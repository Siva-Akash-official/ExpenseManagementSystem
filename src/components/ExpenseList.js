import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ExpenseList.css';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
    const handleDelete = (id, title) => {
        if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
            onDeleteExpense(id);
            toast.success(`"${title}" deleted successfully!`);
        }
    };

    return (
        <div className="expense-list">
            <h2>Expenses</h2>
            {expenses.length === 0 ? (
                <p>No expenses found.</p>
            ) : (
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {expenses.map((expense) => (
                        <motion.li
                            key={expense.id}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="expense-item"
                        >
                            <div>
                                <h3>{expense.title}</h3>
                                <p>Amount: ${expense.amount.toFixed(2)}</p>
                                <p>Date: {expense.date.toLocaleDateString()}</p>
                                <p>Category: {expense.category}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(expense.id, expense.title)}
                                className="delete-btn"
                                aria-label={`Delete expense: ${expense.title}`}
                            >
                                Delete
                            </button>
                        </motion.li>
                    ))}
                </motion.ul>
            )}
        </div>
    );
};

export default ExpenseList;