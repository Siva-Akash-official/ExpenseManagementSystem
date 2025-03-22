import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login';
import Register from './Register';
import ExpenseManagement from './components/ExpenseManagement';
import Profile from './Profile';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    toast.success('Logged in successfully!');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    toast.success('Logged out successfully!');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    toast.info(`Switched to ${darkMode ? 'Light Mode' : 'Dark Mode'}`);
  };

  return (
    <div className="App">
      <ToastContainer />
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <Router>
        <Routes>
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
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <Profile onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;