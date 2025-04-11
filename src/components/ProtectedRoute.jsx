import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { userToken } = useContext(UserContext);

  if (!userToken) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute; 