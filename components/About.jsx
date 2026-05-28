import React, { useState } from 'react';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const hobbies = ["Building responsive web portals", "Experimenting with dynamic APIs", "Hardware configuration", "Open-source contribution"];

  return (
    <section id="about">
      <h2>About Me</h2>
      <p style={{ marginTop: '1rem' }}>
        I am an aspiring software engineer focused on constructing intuitive, functional digital solutions. 
        My learning environment centers around modular development and modern styling frameworks.
      </p>
      
      {/* Conditional State Expansion */}
      {isExpanded && (
        <p style={{ marginTop: '1rem' }}>
          Beyond application development, I enjoy exploring desktop environment customization, tweaking systems configurations, and keeping up with evolving technology stacks.
        </p>
      )}

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--accent-color)',
          fontWeight: 'bold',
          cursor: 'pointer',
          padding: '0',
          marginTop: '0.5rem',
          display: 'block'
        }}
      >
        {isExpanded ? 'Show Less ↑' : 'Show More ↓'}
      </button>

      <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem' }}>Interests & Hobbies</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index} style={{ marginLeft: '1.25rem', marginBottom: '0.25rem' }}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
}