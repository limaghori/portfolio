import React from 'react';

export default function Header({ developerName, welcomeMessage }) {
  const quotes = [
    "Simplicity is the soul of efficiency.",
    "First, solve the problem. Then, write the code.",
    "Make it work, make it right, make it fast.",
    "Code is like humor. When you have to explain it, it’s bad."
  ];

  // Pick a stable random quote for this render pass
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <header style={{ padding: '3rem 0', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{developerName}</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
        {welcomeMessage}
      </p>
      <p style={{ fontStyle: 'italic', opacity: 0.8, fontSize: '0.95rem' }}>
        "{randomQuote}"
      </p>
    </header>
  );
}