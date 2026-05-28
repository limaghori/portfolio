import React from 'react';

export default function Footer({ developerName }) {
  const footerStyle = {
    padding: '3rem 0',
    textAlign: 'center',
    borderTop: '1px solid var(--border-color)',
    marginTop: '2rem'
  };

  return (
    <footer style={footerStyle}>
      <div style={{ marginBottom: '1rem' }}>
        <a href="https://github.com" target="_blank" rel="noreferrer" style={{ margin: '0 0.75rem' }}>GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ margin: '0 0.75rem' }}>LinkedIn</a>
      </div>
      <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
        &copy; {new Date().getFullYear()} {developerName}. All rights reserved.
      </p>
    </footer>
  );
}