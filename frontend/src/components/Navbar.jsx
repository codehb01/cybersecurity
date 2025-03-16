import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, Search, Home, Settings } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const Navbar = ({ user, setDarkMode, darkMode, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const controls = useAnimation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Detect Scroll Direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling Down - Hide Navbar
        setIsVisible(false);
      } else {
        // Scrolling Up - Show Navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Animate Navbar Visibility
  useEffect(() => {
    controls.start({
      y: isVisible ? 0 : "-100%", // Move navbar up or down
      opacity: isVisible ? 1 : 0,
      transition: { duration: 0.6, ease: "easeOut" },
    });
  }, [isVisible, controls]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const onLogout = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <motion.nav
      animate={controls}
      initial={{ y: -100, opacity: 0 }}
      className="bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 shadow-lg rounded-xl backdrop-blur-lg m-4 p-4 fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl z-50"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            CyberX
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="/" label="Home" icon={<Home size={18} />} />
          <NavLink href="/search" label="Search" icon={<Search size={18} />} />
          <NavLink href="/settings" label="Settings" icon={<Settings size={18} />} />
        </div>

        {/* Theme & Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          {user ? (
            <button
              onClick={onLogout}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg transition hover:scale-105"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg transition hover:scale-105"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:hidden mt-4 flex flex-col space-y-2 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 backdrop-blur-lg rounded-lg p-4 shadow-md"
        >
          <NavLink href="/" label="Home" icon={<Home size={18} />} onClick={closeMenu} />
          <NavLink href="/search" label="Search" icon={<Search size={18} />} onClick={closeMenu} />
          <NavLink href="/settings" label="Settings" icon={<Settings size={18} />} onClick={closeMenu} />
          {user ? (
            <button
              onClick={onLogout}
              className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-lg transition hover:scale-105"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg transition hover:scale-105"
            >
              Login
            </Link>
          )}
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavLink = ({ href, label, icon, onClick }) => (
  <Link
    to={href}
    onClick={onClick}
    className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-transform transform hover:scale-110 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    {icon && <span className="mr-2">{icon}</span>}
    {label}
  </Link>
);

const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800 transition-transform"
    aria-label="Toggle dark mode"
  >
    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

export default Navbar;
