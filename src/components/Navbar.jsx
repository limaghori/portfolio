import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(AppContext);

  const linkStyle = ({ isActive }) => 
    isActive ? "text-blue-500 font-bold border-b-2 border-blue-500 pb-1" : "text-gray-600 dark:text-gray-300 hover:text-blue-500";

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700 p-4 sticky top-0 bg-white dark:bg-gray-900 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">MyPortfolio</NavLink>
        
        <div className="flex items-center gap-6">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/about" className={linkStyle}>About</NavLink>
          <NavLink to="/projects" className={linkStyle}>Projects</NavLink>
          <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
          
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;