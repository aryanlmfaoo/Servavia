import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full">
              {/* Logo placeholder - to be filled later */}
            </div>
            <span className="text-xl font-bold text-gray-800">Nomads Neural</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              to="/features"
              className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              Features
            </Link>
            <Link
              to="/faq"
              className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors duration-300">
              Login
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white rounded-full hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
