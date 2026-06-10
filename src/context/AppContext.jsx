import React, { createContext, useState, useContext } from 'react';
import { projectsData } from '../projectsData'; // این خط کاملاً اصلاح شد

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [projects] = useState(projectsData || []); 

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <AppContext.Provider value={{ isDarkMode, toggleTheme, projects }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};