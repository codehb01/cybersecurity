
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/HomePage";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

// Placeholder components for protected routes
const Search = () => <div className="p-6">Search Page Content</div>;
const Settings = () => <div className="p-6">Settings Page Content</div>;
const Profile = () => <div className="p-6">Profile Page Content</div>;

const App = () => {
  // Login state management
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Dark mode state (stored in localStorage)
  const [darkMode, setDarkMode] = useState(() => {
    const savedPreference = localStorage.getItem("darkMode");
    return savedPreference !== null
      ? JSON.parse(savedPreference)
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Update localStorage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div
        className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${
          darkMode
            ? "dark bg-gray-950 text-gray-200"
            : "bg-gray-50 text-gray-900"
        }`}
      >
        {/* Navbar */}
        <Navbar
          isLoggedIn={isLoggedIn}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleLogout={handleLogout}
        />

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                isLoggedIn ? (
                  <Navigate to="/" replace />
                ) : (
                  <LoginPage onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/register"
              element={
                isLoggedIn ? <Navigate to="/" replace /> : <SignupPage />
              }
            />

            {/* Protected Routes */}
            <Route
              path="/search"
              element={
                isLoggedIn ? <Search /> : <Navigate to="/login" replace />
              }
            />
            <Route
              path="/settings"
              element={
                isLoggedIn ? <Settings /> : <Navigate to="/login" replace />
              }
            />
            <Route
              path="/profile"
              element={
                isLoggedIn ? <Profile /> : <Navigate to="/login" replace />
              }
            />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// // Components
// import Navbar from "./components/Navbar";
// import Home from "./components/HomePage";
// import LoginPage from "./components/LoginPage";
// import SignupPage from "./components/SignupPage";

// // Placeholder components for protected routes
// const Search = () => <div className="p-6">Search Page Content</div>;
// const Settings = () => <div className="p-6">Settings Page Content</div>;
// const Profile = () => <div className="p-6">Profile Page Content</div>;

// const App = () => {
//   // Login state management
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Dark mode state (stored in localStorage)
//   const [darkMode, setDarkMode] = useState(() => {
//     const savedPreference = localStorage.getItem("darkMode");
//     return savedPreference !== null
//       ? JSON.parse(savedPreference)
//       : window.matchMedia("(prefers-color-scheme: dark)").matches;
//   });

//   // Update localStorage whenever darkMode changes
//   useEffect(() => {
//     localStorage.setItem("darkMode", JSON.stringify(darkMode));
//   }, [darkMode]);

//   // Handle login
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   // Handle logout
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <Router>
//       <div
//         className={`min-h-screen transition-colors duration-300 ${
//           darkMode ? "dark bg-gray-950 text-white" : "bg-gray-50 text-black"
//         }`}
//       >
//         {/* Navbar */}
//         <Navbar
//           isLoggedIn={isLoggedIn}
//           darkMode={darkMode}
//           setDarkMode={setDarkMode}
//           handleLogout={handleLogout}
//         />

//         {/* Routing Configuration */}
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/login"
//             element={
//               isLoggedIn ? (
//                 <Navigate to="/" replace />
//               ) : (
//                 <LoginPage onLogin={handleLogin} />
//               )
//             }
//           />
//           <Route
//             path="/register"
//             element={isLoggedIn ? <Navigate to="/" replace /> : <SignupPage />}
//           />

//           {/* Protected Routes */}
//           <Route
//             path="/search"
//             element={isLoggedIn ? <Search /> : <Navigate to="/login" replace />}
//           />
//           <Route
//             path="/settings"
//             element={
//               isLoggedIn ? <Settings /> : <Navigate to="/login" replace />
//             }
//           />
//           <Route
//             path="/profile"
//             element={
//               isLoggedIn ? <Profile /> : <Navigate to="/login" replace />
//             }
//           />

//           {/* Fallback Route */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
