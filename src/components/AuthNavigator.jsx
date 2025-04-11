import React, { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const AuthNavigator = ({ children }) => {
  const { userToken } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  // List of public routes that don't require authentication
  const publicRoutes = ['/', '/about', '/faq', '/contact', '/loginPage', '/UserRegister', '/forgot-password', '/TherapistRegister'];

  useEffect(() => {
    // If trying to access a protected route without authentication
    if (!publicRoutes.includes(location.pathname) && !userToken) {
      navigate('/loginPage');
    }
    // If authenticated and trying to access login/register pages
    else if (userToken && (location.pathname === '/loginPage' || location.pathname === '/UserRegister')) {
      navigate('/JournalPage');
    }
  }, [userToken, location.pathname, navigate]);

  return children;
};

export default AuthNavigator; 