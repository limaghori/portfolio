import React from 'react';

export default function ThemeToggle({ theme, onToggleTheme }) {
  return (
    <button
      onClick={onToggleTheme}
      className={`fixed bottom-5 right-5 z-50 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 shadow-lg flex items-center gap-2 border ${
        theme === 'dark'
          ? 'bg-gray-800 text-yellow-400 border-gray-700 hover:bg-gray-700'
          : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-50'
      }`}
    >
      {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
