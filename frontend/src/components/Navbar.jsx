import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, Search, Home, User, Settings } from "lucide-react";

const Navbar = ({ user, setDarkMode, darkMode, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const onLogout = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                My App
              </h1>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink href="/" label="Home" icon={<Home size={18} />} />
              <NavLink href="/search" label="Search" icon={<Search size={18} />} />
              <NavLink href="/settings" label="Settings" icon={<Settings size={18} />} />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

            {user ? (
              <UserMenu user={user} onLogout={onLogout} />
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md hover:shadow-purple-400/30"
              >
                Login
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              onClick={toggleMenu}
              className="ml-2 p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, label, icon }) => (
  <Link
    to={href}
    className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-transform transform hover:scale-110 hover:shadow-md hover:shadow-blue-500/50 hover:shadow-purple-600/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    {icon && <span className="mr-2">{icon}</span>}
    {label}
  </Link>
);

const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:scale-110 hover:shadow-md hover:shadow-blue-500/50 hover:shadow-purple-600/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-transform"
    aria-label="Toggle dark mode"
  >
    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

export default Navbar;
