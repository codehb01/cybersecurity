import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative text-gray-300 py-8 px-6 overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#040826] via-[#0b0426] to-[#10021c] opacity-90 animate-gradient"></div>

      <motion.div
        className="relative container mx-auto flex flex-col md:flex-row justify-between items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Brand Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-extrabold text-white tracking-wide">
            CyberX
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Stay protected with AI-driven security.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {["Home", "Features", "Security Insights", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              className="hover:text-blue-300 transition"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Security Awareness */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          <p>
            🔒 <strong>Stay Safe:</strong> Keep your data encrypted & update passwords regularly.
          </p>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="relative border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        © {new Date().getFullYear()} CyberX. All rights reserved.
      </motion.div>

      {/* CSS for Dynamic Gradient */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          animation: gradientShift 10s infinite ease-in-out;
          background-size: 200% 200%;
        }
      `}</style>
    </footer>
  );
}
