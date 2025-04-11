import React from 'react';
import { motion } from 'framer-motion';
import { UserContext } from '../context/UserContext';

const Settings = () => {
  const { userToken } = React.useContext(UserContext);

  if (!userToken) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-32 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Settings</h1>
        
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Account Settings</h2>
            <p className="text-gray-600">Manage your account preferences and security settings.</p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Notifications</h2>
            <p className="text-gray-600">Configure your notification preferences.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Privacy</h2>
            <p className="text-gray-600">Control your privacy settings and data sharing preferences.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Settings; 