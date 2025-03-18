import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Lock, Mail, Eye, EyeOff, AlertTriangle } from "lucide-react";
import Button from "../components/Button";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 8 || !/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
      setError("Password must be at least 8 characters long and include an uppercase letter and a special character.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log("User signed up:", { email });
    navigate("/home", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,#8E24AA,#2196F3)] opacity-50 animate-gradient" />
      
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md dark:bg-gray-800/60 shadow-xl rounded-lg p-8 relative z-10 mt-8">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 p-3 rounded-full">
            <Shield size={32} className="text-white" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-white animate-fadeInDown">Sign Up</h2>

        {error && (
          <motion.div className="text-red-500 text-center mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <AlertTriangle className="inline mr-2" size={18} /> {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <motion.input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100/80 dark:bg-gray-700/80 text-gray-800 dark:text-white focus:ring-2 focus:ring-gradient-to-r focus:from-blue-500 focus:to-purple-500 outline-none"
          />
          
          <motion.div className="relative" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg bg-gray-100/80 dark:bg-gray-700/80 text-gray-800 dark:text-white focus:ring-2 focus:ring-gradient-to-r focus:from-blue-500 focus:to-purple-500 outline-none"
            />
            <button type="button" className="absolute right-3 top-3 text-gray-500" onClick={togglePassword}>
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </motion.div>

          <motion.div className="relative" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg bg-gray-100/80 dark:bg-gray-700/80 text-gray-800 dark:text-white focus:ring-2 focus:ring-gradient-to-r focus:from-blue-500 focus:to-purple-500 outline-none"
            />
            <button type="button" className="absolute right-3 top-3 text-gray-500" onClick={toggleConfirmPassword}>
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </motion.div>

          <div className="px-32 mt-0 animate-fadeInUp animation-delay-300"> 
           <Button text="Sign Up" onClick={handleSubmit} />

          </div>
        </form>

        <p className="mt-4 text-center text-gray-200 dark:text-gray-400 animate-fadeInUp animation-delay-700">
          Already have an account? {" "}
          <span className="text-blue-400 cursor-pointer hover:underline" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
