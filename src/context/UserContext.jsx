import React, { createContext, useState, useEffect } from 'react';
import { getToken, saveToken, deleteToken } from '../utils/token';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = getToken();
        if (token) {
          setUserToken(token);
        }
      } catch (error) {
        console.error('Error checking auth:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = (token) => {
    const success = saveToken(token);
    if (success) {
      setUserToken(token);
    }
    return success;
  };

  const logout = () => {
    const success = deleteToken();
    if (success) {
      setUserToken(null);
    }
    return success;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider value={{ userToken, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}; 