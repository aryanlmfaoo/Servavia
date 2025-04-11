import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProfileDropdown from './ProfileDropdown';
import logo from '../assets/logo.jpg'

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 flex items-center justify-center transform transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
              <img src={logo} alt="logo" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Seravia
              </span>
              <span className="text-xs text-gray-500 tracking-wider">MENTAL WELLNESS</span>
            </div>
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
            <Link
              to="/journal"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Journal
            </Link>
            <Link
              to="/reports"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Reports
            </Link>
            <Link
              to="/therapists"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Therapists
            </Link>
          </div>

          {/* Profile Dropdown */}
          <div className="hidden md:flex items-center">
            <ProfileDropdown />
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
