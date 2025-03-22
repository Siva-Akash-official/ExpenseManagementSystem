import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ExpenseManagement from './components/ExpenseManagement';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  // Effect to persist login state
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  // Effect to apply dark mode to the entire screen
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Handle login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      {/* Dark Mode Toggle Button */}
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Router for Navigation */}
      <Router>
        <Routes>
          {/* Login Page */}
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/expenses" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />

          {/* Register Page */}
          <Route
            path="/register"
            element={
              isAuthenticated ? (
                <Navigate to="/expenses" />
              ) : (
                <Register onRegister={handleLogin} />
              )
            }
          />

          {/* Expense Management Page */}
          <Route
            path="/expenses"
            element={
              isAuthenticated ? (
                <ExpenseManagement onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* Default Route (Redirect to Login) */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;