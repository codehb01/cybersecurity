import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import MainPage from "./components/MainPage";
//import NotFound from "./pages/NotFound";

// Placeholder components for additional pages
const Search = () => <div className="p-6">Search Page Content</div>;
const Settings = () => <div className="p-6">Settings Page Content</div>;
const Profile = () => <div className="p-6">Profile Page Content</div>;

const App = () => {
  return (
    <Router>
      <MainContent />
      <ToastContainer /> {/* For notifications */}
    </Router>
  );
};

const MainContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col justify-between transition-colors duration-300">
      {/* Conditionally render Navbar */}
      {!hideNavbar && <Navbar />}

      <div className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />

          {/* Other Pages */}
          <Route path="/search" element={<Search />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
