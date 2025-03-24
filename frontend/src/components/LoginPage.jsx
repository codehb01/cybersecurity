import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import google from "../assets/google.png";
import Button from "../components/Button";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("Login functionality not implemented.");
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8000/accounts/google/login/?process=login";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 pt-16 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#8E24AA,#2196F3)] opacity-50 animate-gradient" />

      <div className="w-full max-w-md bg-white/10 backdrop-blur-md dark:bg-gray-800/60 shadow-xl rounded-lg p-8 relative z-10 mt-8">
        <h2 className="text-2xl font-bold text-center text-white dark:text-white animate-fadeInDown">Login</h2>

        {error && <div className="text-red-500 text-center mt-2">{error}</div>}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Username Input */}
          <motion.input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100/80 dark:bg-gray-700/80 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Password Input */}
          <motion.input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100/80 dark:bg-gray-700/80 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Login Button */}
          <div className="px-32 mt-0 animate-fadeInUp animation-delay-300">
            <Button onClick={handleSubmit} text="Login" />
          </div>

          {/* Google Login Button */}
          <div className="flex justify-center animate-fadeInUp animation-delay-500">
            <motion.button
              type="button"
              onClick={handleGoogleLogin}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="w-3/5 flex items-center justify-center border rounded-lg py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <img src={google} alt="Google" className="w-5 h-5 mr-2" />
              Login with Google
            </motion.button>
          </div>
        </form>

        {/* Navigation to Register */}
        <p className="mt-4 text-center text-gray-200 dark:text-gray-400 animate-fadeInUp animation-delay-700">
          Don't have an account?{" "}
          <span className="text-blue-400 cursor-pointer hover:underline" onClick={() => navigate("/register")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
