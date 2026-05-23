import React from 'react';

export default function Navbar({ theme, onToggleTheme }) {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 0',
    borderBottom: '1px solid var(--border-color)',
  };

  const listStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
  };

  return (
    <nav style={navStyle}>
      <ul style={listStyle}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button 
        onClick={onToggleTheme}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          border: '1px solid var(--border-color)',
          backgroundColor: 'var(--card-bg)',
          color: 'var(--text-color)',
          cursor: 'pointer'
        }}
      >
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </nav>
  );
}