import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const activeStyle = ({ isActive }) => 
    isActive 
      ? "text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1" 
      : "text-gray-300 hover:text-cyan-400 transition-colors";

  return (
    <header className="border-b border-white/10 p-4 sticky top-0 bg-gray-900/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <NavLink to="/" className="text-xl font-bold text-white">
          Lima<span className="text-cyan-400">.Dev</span>
        </NavLink>
        
      
        <nav className="flex items-center gap-6 text-sm font-medium">
          <NavLink to="/" className={activeStyle}>Home</NavLink>
          <NavLink to="/about" className={activeStyle}>About</NavLink>
          <NavLink to="/projects" className={activeStyle}>Projects</NavLink>
          <NavLink to="/contact" className={activeStyle}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;