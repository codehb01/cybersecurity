import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative text-gray-300 py-10 px-6 overflow-hidden bg-gradient-to-r from-[#1a002e] via-[#0b0426] to-[#040826]">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 opacity-90 animate-gradient"></div>

      <motion.div
        className="relative container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold text-white tracking-wide">CyberX</h2>
          <p className="text-gray-400 text-sm mt-2 max-w-xs">
            AI-powered security for a safer digital world.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-sm">
          {["Home", "Features", "Security Insights", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              className="hover:text-blue-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Security Awareness */}
        <div className="max-w-xs">
          <p className="text-gray-400 text-sm leading-relaxed">
            🔒 <strong>Stay Secure:</strong> Encrypt your data & update passwords regularly.
          </p>
        </div>
      </motion.div>

      {/* Copyright Section */}
      <motion.div
        className="relative border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        © {new Date().getFullYear()} CyberX. All rights reserved.
      </motion.div>

      {/* CSS for Dynamic Gradient Animation */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          animation: gradientShift 12s infinite ease-in-out;
          background-size: 200% 200%;
        }
      `}</style>
    </footer>
  );
}
