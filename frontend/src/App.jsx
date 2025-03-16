import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import MainPage from "./components/MainPage";

// Placeholder components for protected routes
const Search = () => <div className="p-6">Search Page Content</div>;
const Settings = () => <div className="p-6">Settings Page Content</div>;
const Profile = () => <div className="p-6">Profile Page Content</div>;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedPreference = localStorage.getItem("darkMode");
    return savedPreference !== null
      ? JSON.parse(savedPreference)
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Define login/logout handlers
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <MainContent
        isLoggedIn={isLoggedIn}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        handleLogin={handleLogin} // ✅ Pass handleLogin
        handleLogout={handleLogout}
      />
    </Router>
  );
};

const MainContent = ({ isLoggedIn, darkMode, setDarkMode, handleLogin, handleLogout }) => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <div
      className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${
        darkMode ? "dark bg-gray-950 text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Conditionally render Navbar */}
      {!hideNavbar && (
        <Navbar
          isLoggedIn={isLoggedIn}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleLogout={handleLogout}
        />
      )}

      <div className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<MainPage />} />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" replace /> : <LoginPage onLogin={handleLogin} />}
          />
          <Route path="/register" element={isLoggedIn ? <Navigate to="/" replace /> : <SignupPage />} />

          {/* Protected Routes */}
          <Route path="/search" element={isLoggedIn ? <Search /> : <Navigate to="/login" replace />} />
          <Route path="/settings" element={isLoggedIn ? <Settings /> : <Navigate to="/login" replace />} />
          <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" replace />} />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
