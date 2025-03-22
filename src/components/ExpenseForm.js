import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onAddExpense }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const expense = {
            id: Math.random().toString(),
            title,
            amount: +amount,
            date: new Date(date),
            category,
        };
        onAddExpense(expense);
        setTitle('');
        setAmount('');
        setDate('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit} className="expense-form">
            <div className="form-group">
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Category</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <button type="submit" className="submit-btn">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;