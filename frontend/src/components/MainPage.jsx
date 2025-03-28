import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoShieldCheckmark } from "react-icons/io5";
import { motion } from "framer-motion";
import cyberLogo from '../assets/cybersecurity-logo.gif';

// Animation settings
const fadeInUp = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

// Full-Screen Black Overlay (Prevents Flashing White Screen)
const FullScreenOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsVisible(false), 800); // Hides overlay after 0.8s
  }, []);

  return (
    isVisible && (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full h-full bg-black z-50"
      />
    )
  );
};

const HeroSection = () => (
  <section className="relative bg-black text-white text-center py-28 pt-36">
    {/* Background Animation */}
    <div className="absolute inset-0 bg-[radial-gradient(circle,#8E24AA,#2196F3)] opacity-50 animate-gradient" />

    {/* Large Cyber Security Logo */}
    <motion.div 
      {...fadeInUp}
      className="flex justify-center mb-8"
    >
      <img 
        src={cyberLogo}
        alt="Cyber Security Logo"
        className="w-40 h-40 object-contain animate-pulse"
      />
    </motion.div>

    {/* Animated Heading with Padding */}
    <motion.h1 {...fadeInUp} className="text-7xl font-bold mb-4 pt-4">
      CyberX
    </motion.h1>
    
    {/* Animated Description with Padding */}
    <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-xl mb-8 pt-4">
      Comprehensive vulnerability scanning and threat intelligence at your fingertips.
    </motion.p>

    {/* Centered and Enlarged Button */}
    <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="relative z-10">
      <div className="flex items-center justify-center">
        <div className="relative group">
          <Link
            to="/Login"
            className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-120 active:scale-100"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[4px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative z-10 block px-8 py-3 rounded-xl bg-gray-950">
              <div className="relative z-10 flex items-center space-x-2">
                <span className="transition-all duration-500 group-hover:translate-x-1">Let's get started</span>
                <svg className="w-8 h-8 transition-transform duration-500 group-hover:translate-x-1" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd" />
                </svg>
              </div>
            </span>
          </Link>
        </div>
      </div>
    </motion.div>

    {/* Gradient Background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle,#8E24AA,#2196F3)] opacity-50 animate-gradient z-0" />
  </section>
);

const FeatureCard = ({ title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="relative bg-gray-900 bg-opacity-50 backdrop-blur-md shadow-xl rounded-xl p-6 border border-transparent transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-blue-500/30"
  >
    {/* Gradient Overlay for Hover Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-500 opacity-0 transition-opacity duration-300 hover:opacity-20 rounded-xl" />

    {/* Card Content */}
    <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>

    {/* Floating Glow Effect */}
    <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500 opacity-20 blur-2xl" />
    <div className="absolute bottom-4 right-4 w-10 h-10 bg-purple-500 opacity-30 blur-2xl" />
  </motion.div>
);

// Features Section Component
const FeaturesSection = () => (
  <section className="py-20 bg-gray-100 dark:bg-gray-900 rounded-tl-lg rounded-tr-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Animated "OUR FEATURES" Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-bold text-center mb-12 text-white bg-gray-900 dark:bg-gray-800 p-4 rounded-lg shadow-lg flex items-center justify-center gap-2"
      >
        <IoShieldCheckmark className="text-blue-500 text-5xl" /> Our Features
      </motion.h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[ 
          { title: "Automated Vulnerability Scanning", description: "Our platform integrates multiple tools and APIs to perform comprehensive, automated vulnerability scanning." },
          { title: "Real-Time Dashboard", description: "A real-time dashboard presents an overview of vulnerabilities, risk scores, and threat trends." },
          { title: "OWASP ZAP Integration", description: "Automated web vulnerability scanning (SQLi, XSS, CSRF)." },
          { title: "Nikto Integration", description: "Scans for server misconfigurations, directory traversal, and file inclusion." },
          { title: "Nmap Integration", description: "Network scanning for open ports and service detection." },
          { title: "SQLMap Integration", description: "Focused on detecting SQL Injection vulnerabilities." },
          { title: "VirusTotal API Integration", description: "Provides reputation data and threat intelligence." },
          { title: "Downloadable Reports", description: "Offers downloadable PDF/CSV reports for audit and compliance purposes." },
        ].map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} delay={index * 0.1 + 0.4} />
        ))}
      </div>
    </div>
  </section>
);

// Hover animation
const buttonHover = {
  scale: 1.05,
  boxShadow: "0px 4px 20px rgba(0, 255, 255, 0.6)",
  transition: { duration: 0.3, ease: "easeInOut" },
};

// CTA Component
const CallToAction = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-900 text-white text-center py-20">
    {/* Background Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-tl from-blue-500 via-transparent to-purple-700 opacity-30 blur-3xl" />

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide">
      Ready to Secure Your Application?
    </h2>
    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
      Sign up today and start protecting your digital assets with our comprehensive vulnerability scanning platform.
    </p>

    {/* Animated Button */}
    <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
      <div className="flex items-center justify-center">
        <div className="relative group">
          <Link
            to="/Login"
            className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-120 active:scale-100"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative z-10 block px-8 py-3 rounded-xl bg-gray-950">
              <div className="relative z-10 flex items-center space-x-2">
                <span className="transition-all duration-500 group-hover:translate-x-1">Sign Up Now</span>
                <svg className="w-8 h-8 transition-transform duration-500 group-hover:translate-x-1" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd" />
                </svg>
              </div>
            </span>
          </Link>
        </div>
      </div>
    </motion.div>

    {/* Floating Neon Lights */}
    <div className="absolute top-10 left-10 w-16 h-16 bg-blue-500 opacity-20 blur-2xl rounded-full animate-pulse" />
    <div className="absolute bottom-10 right-10 w-20 h-20 bg-purple-500 opacity-25 blur-3xl rounded-full animate-pulse" />
  </section>
);


// Main Page Component
const MainPage = () => (
  <div>
    <FullScreenOverlay /> {/* Smooth black-to-visible transition */}
    <HeroSection />
    <FeaturesSection />
    <CallToAction />
  </div>
);

export default MainPage;
