import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const UserPanel = () => {
  const { userToken } = useContext(UserContext);

  if (!userToken) {
    return <Navigate to="/loginPage" />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">User Panel</h2>
        <p className="text-center">Welcome to the user panel. You are logged in!</p>
      </div>
    </div>
  );
};

export default UserPanel; 