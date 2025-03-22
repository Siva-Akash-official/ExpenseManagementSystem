// src/components/ExpenseFilter.js
import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = ({ selectedYear, onYearChange }) => {
    return (
        <div className="expense-filter">
            <label>Filter by Year:</label>
            <select
                value={selectedYear}
                onChange={(e) => onYearChange(e.target.value)}
            >
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
        </div>
    );
};

export default ExpenseFilter;