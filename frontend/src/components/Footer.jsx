import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300 py-8 px-6">
      <motion.div
        className="container mx-auto flex flex-col md:flex-row justify-between items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Brand Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-extrabold text-white tracking-wide">
            CyberSecure
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Stay protected with AI-driven security.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <motion.a
            href="#"
            className="hover:text-green-400 transition"
            whileHover={{ scale: 1.1 }}
          >
            Home
          </motion.a>
          <motion.a
            href="#"
            className="hover:text-green-400 transition"
            whileHover={{ scale: 1.1 }}
          >
            Features
          </motion.a>
          <motion.a
            href="#"
            className="hover:text-green-400 transition"
            whileHover={{ scale: 1.1 }}
          >
            Security Insights
          </motion.a>
          <motion.a
            href="#"
            className="hover:text-green-400 transition"
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.a>
        </div>

        {/* Security Awareness */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          <p>
            🔒 **Stay Safe**: Keep your data encrypted & update passwords
            regularly.
          </p>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        © {new Date().getFullYear()} CyberSecure. All rights reserved.
      </motion.div>
    </footer>
  );
}
