import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Navbar.css';

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(10px)', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 1000 }}>
      <Link to="/" style={{ fontWeight: 'bold', textDecoration: 'none', color: 'var(--primary-color)', fontSize: '1.5rem' }}>
        Portfolio
      </Link>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'var(--primary-color)' : 'var(--text-color)', textDecoration: 'none' })}>Home</NavLink>
        <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'var(--primary-color)' : 'var(--text-color)', textDecoration: 'none' })}>About</NavLink>
        <NavLink to="/projects" style={({ isActive }) => ({ color: isActive ? 'var(--primary-color)' : 'var(--text-color)', textDecoration: 'none' })}>Projects</NavLink>
        <NavLink to="/resume" style={({ isActive }) => ({ color: isActive ? 'var(--primary-color)' : 'var(--text-color)', textDecoration: 'none' })}>Resume</NavLink>
        <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'var(--primary-color)' : 'var(--text-color)', textDecoration: 'none' })}>Contact</NavLink>
        
        <button 
          onClick={toggleTheme} 
          aria-label="Change light and dark theme"
          style={{ background: 'none', border: '1px solid var(--text-color)', padding: '5px 10px', cursor: 'pointer', borderRadius: '5px', color: 'var(--text-color)' }}
        >
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;