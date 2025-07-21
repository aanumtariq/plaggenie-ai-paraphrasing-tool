import React, { createContext, useState, useContext } from 'react';

// Create a Context for authentication
const AuthContext = createContext();

// Custom hook to access authentication status
export const useAuth = () => useContext(AuthContext);

// Provide the AuthContext to the rest of the app
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
