import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, Search, Home, User, Settings } from "lucide-react";

const Navbar = ({ user, setDarkMode, darkMode, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Apply dark mode to document
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
          {/* Logo and brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                My App
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink href="/" label="Home" icon={<Home size={18} />} />
              <NavLink
                href="/search"
                label="Search"
                icon={<Search size={18} />}
              />
              <NavLink
                href="/settings"
                label="Settings"
                icon={<Settings size={18} />}
              />
            </div>
          </div>

          {/* Right section: theme toggle and user menu */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

            {user ? (
              <UserMenu user={user} onLogout={onLogout} />
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink
              href="/"
              label="Home"
              icon={<Home size={18} />}
              onClick={closeMenu}
            />
            <MobileNavLink
              href="/search"
              label="Search"
              icon={<Search size={18} />}
              onClick={closeMenu}
            />
            <MobileNavLink
              href="/settings"
              label="Settings"
              icon={<Settings size={18} />}
              onClick={closeMenu}
            />
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            {user ? (
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.avatar || "https://via.placeholder.com/40"}
                    alt="User avatar"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {user.email}
                  </div>
                </div>
                <button
                  className="ml-auto p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="px-5">
                <Link
                  to="/login"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors block text-center"
                  onClick={closeMenu}
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop navigation link
const NavLink = ({ href, label, icon }) => (
  <Link
    to={href}
    className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    {icon && <span className="mr-2">{icon}</span>}
    {label}
  </Link>
);

// Mobile navigation link
const MobileNavLink = ({ href, label, icon, onClick }) => (
  <Link
    to={href}
    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    onClick={onClick}
  >
    {icon && <span className="mr-3">{icon}</span>}
    {label}
  </Link>
);

// Theme toggle button
const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    aria-label="Toggle dark mode"
  >
    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

// User menu dropdown
const UserMenu = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <img
          className="h-8 w-8 rounded-full"
          src={user.avatar || "https://via.placeholder.com/32"}
          alt="User avatar"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-md shadow-lg py-1 z-10 border border-gray-200 dark:border-gray-700">
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Your Profile
          </Link>
          <Link
            to="/settings"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Account Settings
          </Link>
          <div className="border-t border-gray-200 dark:border-gray-700"></div>
          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={onLogout}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
