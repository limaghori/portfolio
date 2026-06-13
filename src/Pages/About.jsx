import React from 'react';

function About() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Segoe UI, sans-serif', lineHeight: '1.6', direction: 'ltr', textAlign: 'left' }}>
      <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>About Me</h2>
      
      <div style={{ background: 'var(--card-bg)', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0,0,0,0.08)' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
          Hello! I am a passionate Computer Science student and a frontend developer focused on building modern, responsive, and user-friendly web applications.
        </p>
        
        <p style={{ fontSize: '1rem', color: 'gray', marginBottom: '25px' }}>
          Through my academic journey and practical projects, I have gained hands-on experience with modern frontend technologies, especially <strong>React.js</strong>, state management, and semantic UI design. I enjoy solving complex problems, writing clean code, and continuously learning new tools to improve user experience and performance.
        </p>
        
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>My Core Values</h3>
        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
          <li style={{ marginBottom: '5px' }}>Writing maintainable, clean, and reusable React components.</li>
          <li style={{ marginBottom: '5px' }}>Ensuring high accessibility (a11y) and responsive design for all devices.</li>
          <li style={{ marginBottom: '5px' }}>Optimizing web performance for fast and seamless user interactions.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;