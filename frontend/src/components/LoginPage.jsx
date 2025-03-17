// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar.jsx"; // Correct import path

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username === "admin" && password === "password") {
//       onLogin();
//       navigate("/");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
//       <Navbar />
//       <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
//         <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
//           Login
//         </h2>
//         <form onSubmit={handleSubmit} className="mt-6">
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
//           Don't have an account?{" "}
//           <a href="/register" className="text-blue-500 hover:underline">
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username === "admin" && password === "password") {
//       onLogin();
//       navigate("/");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
//       <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8">
//         <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
//           Login
//         </h2>
//         <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
//           />
//           <button
//   type="submit"
//   className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-102
//              hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 shadow-md hover:shadow-lg hover:shadow-purple-400/30"
// >
//   Login
// </button>

//         </form>
//         <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
//           Don't have an account?{" "}
//           <a href="/register" className="text-blue-500 hover:underline">
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api"; // Ensure you have an API utility for requests
import { GOOGLE_ACCESS_TOKEN } from "../token"; // Store Google token
import google from "../assets/google.png"; // Google Icon
import { useAuth } from "../auth"; // Import authentication context

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function from auth context

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Send login request to backend
      const success = await login({ username, password });

      if (success) {
        navigate("/dashboard", { replace: true });
      } else {
        setError("Login failed. Check credentials.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Login
  // const handleGoogleLogin = () => {
  //   window.location.href = "http://localhost:8000/accounts/google/login/";
  // };
  const handleGoogleLogin = () => {
    window.location.href =
      "http://localhost:8000/accounts/google/login/?process=login";
  };



  useEffect(() => {
    const handleGoogleCallback = async () => {
      if (window.location.pathname === "/google-callback") {
        const params = new URLSearchParams(window.location.search);
        const googleToken = params.get("access_token");

        if (googleToken) {
          localStorage.setItem(GOOGLE_ACCESS_TOKEN, googleToken);
          await login({ google_token: googleToken });
          navigate("/dashboard", { replace: true });
        }
      }
    };

    handleGoogleCallback();
  }, [navigate, login]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.15 }}
          className="text-2xl font-bold text-center text-gray-800 dark:text-white"
        >
          Login
        </h2>

        {error && <div className="text-red-500 text-center mt-2">{error}</div>}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <motion.input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <motion.input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105
                       hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 shadow-md hover:shadow-lg hover:shadow-purple-400/30"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Google Login Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full mt-4 flex items-center justify-center border rounded-lg py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <img src={google} alt="Google" className="w-5 h-5 mr-2" />
          Login with Google
        </button>

        {/* Navigation to Register */}
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
