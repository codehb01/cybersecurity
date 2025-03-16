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
// }
import { motion } from "framer-motion";

const features = [
  "Real-time Threat Detection",
  "AI-Powered Security Analysis",
  "Data Encryption & Privacy",
  "Automated Vulnerability Scans",
  "24/7 Monitoring & Alerts",
  "User-Friendly Security Dashboard",
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,#2a2a2a,#000)] opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-center mb-4 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Cyber Threat & Web Security Platform
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg text-center mb-6 max-w-2xl text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        Stay ahead of cyber threats with **real-time security monitoring**,
        **AI-driven risk analysis**, and **automated protection**.
      </motion.p>

      {/* Features List */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 w-full max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700 hover:bg-gray-700 transition"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="text-green-400 text-xl">✔</span>
            <span className="text-gray-200">{feature}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <div className="flex space-x-4">
        <motion.button
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
        <motion.button
          className="border border-gray-400 text-gray-300 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </div>
    </div>
  );
}
