import { useState } from "react";

export default function HomePage() {
  // State to store user input from the search bar
  const [search, setSearch] = useState("");

  return (
    // Main container with full-screen height, flex for centering, and a gradient background
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 relative overflow-hidden">
      {/* Background Animation - Using CSS instead of Framer Motion */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#8E24AA,#2196F3)] opacity-50 animate-fadeIn" />

      {/* Hero Section: Title - Using CSS animations */}
      <h1 className="text-5xl font-extrabold text-center mb-4 tracking-wide animate-fadeInDown">
        Cyber Threat & Web Security Platform
      </h1>

      {/* Hero Section: Subtitle - Using CSS animations with delay */}
      <p className="text-lg text-center mb-6 max-w-2xl text-gray-300 animate-fadeInUp animation-delay-300">
        Stay ahead of cyber threats with <strong>real-time security monitoring</strong>,
        <strong> AI-driven risk analysis</strong>, and <strong> automated protection</strong>.
      </p>

      {/* Search Bar Container - Using CSS animations with longer delay */}
      <div className="relative w-full max-w-xl animate-fadeInUp animation-delay-500">
        {/* Input Field */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter website URL..."
          className="w-full p-4 text-lg text-gray-900 rounded-lg shadow-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Scan Button */}
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition hover:scale-105 active:scale-95">
          Scan
        </button>
      </div>

      {/* CSS for animations - add this to your global CSS or use styled-jsx */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInDown {
          from { 
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 2s forwards;
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.8s forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}





// import { motion } from "framer-motion";

// const features = [
//   "Real-time Updates",
//   "Offline Access",
//   "User-friendly UI",
//   "Secure & Reliable",
// ];

// export default function HomePage() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 px-6">
//       {/* Heading */}
//       <motion.h1
//         className="text-4xl font-bold text-center mb-4"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         Welcome to Our Platform
//       </motion.h1>

//       {/* Subtitle */}
//       <motion.p
//         className="text-lg text-center mb-6 max-w-xl text-gray-600"
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
//       >
//         Experience seamless connectivity, powerful features, and an intuitive
//         design built for efficiency.
//       </motion.p>

//       {/* Features List */}
//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0, y: 10 },
//           visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
//         }}
//       >
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-md border border-gray-200"
//             variants={{
//               hidden: { opacity: 0, y: 10 },
//               visible: { opacity: 1, y: 0 },
//             }}
//           >
//             <span className="text-green-500 text-xl">✔</span>
//             <span className="text-gray-800">{feature}</span>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Get Started Button */}
//       <motion.button
//         className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg shadow-md transition-transform transform hover:scale-105"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         Get Started
//       </motion.button>
//     </div>
//   );
// }import { useState } from "react";import { motion } from "framer-motion";