import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SignupPage from '../pages/UserRegister.jsx';
const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="absolute transform -rotate-45 blur-3xl opacity-20 bg-gradient-to-r from-blue-300 via-purple-300 to-green-200 w-[800px] h-[800px] -top-1/4 -left-1/4"></div>
        <div className="absolute transform rotate-45 blur-3xl opacity-20 bg-gradient-to-r from-green-200 via-purple-300 to-blue-300 w-[800px] h-[800px] -bottom-1/4 -right-1/4"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            Find Clarity, One Journal at a Time
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            AI-assisted therapy, human connection, and real-time support—all in one place.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 transform transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Link to="/UserRegister">Start Your Journey</Link>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 