import React, { createContext, useState, useEffect } from 'react';
import { getToken, saveToken, deleteToken } from '../utils/token';
import api from '../utils/api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = getToken();
        if (token) {
          setUserToken(token);
          // Optionally fetch user data here
          try {
            const response = await api.get('/user/profile');
            setUserData(response.data);
          } catch (error) {
            console.error('Error fetching user profile:', error);
          }
        }
      } catch (error) {
        console.error('Error checking auth:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (token) => {
    const success = saveToken(token);
    if (success) {
      setUserToken(token);
      // Set token in axios instance
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return true;
    }
    return false;
  };

  const logout = () => {
    const success = deleteToken();
    if (success) {
      setUserToken(null);
      setUserData(null);
      // Remove token from axios instance
      delete api.defaults.headers.common['Authorization'];
    }
    return success;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider value={{ userToken, userData, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}; 