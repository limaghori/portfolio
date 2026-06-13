import React, { useState } from 'react';

function Resume() {
  const skills = ["React.js", "JavaScript (ES6)", "HTML5 & CSS3", "Responsive Design", "Git & GitHub"];
  const [downloadMessage, setDownloadMessage] = useState("");

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setDownloadMessage("✅ Resume download initiated successfully!");
    // clear the message after 3 seconds
    setTimeout(() => setDownloadMessage(""), 3000);
  };
  
  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Segoe UI, sans-serif', direction: 'ltr', textAlign: 'left' }}>
      <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '30px' }}>My Resume</h2>
      
      {/* Resume Download Section */}
      <div style={{ textAlign: 'center', marginBottom: '40px', background: 'var(--card-bg)', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
        <p style={{ marginBottom: '15px' }}>To get the full version of my resume as a PDF file, click the button below:</p>
        <button 
          onClick={handleDownloadClick}
          style={{
            background: 'var(--primary-color)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '6px',
            border: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'inline-block',
            boxShadow: '0 4px 10px rgba(79, 70, 229, 0.2)',
            transition: 'transform 0.2s'
          }}
        >
          📥 Download PDF Resume
        </button>
        
        {downloadMessage && (
          <p style={{ marginTop: '15px', color: '#10b981', fontWeight: '600', animation: 'fadeIn 0.5s' }}>
            {downloadMessage}
          </p>
        )}
      </div>

      {/* Technical Skills Section */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ borderBottom: '2px solid var(--primary-color)', paddingBottom: '5px' }}>Technical Skills</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '15px' }}>
          {skills.map((skill, index) => (
            <span key={index} style={{ background: 'var(--card-bg)', border: '1px solid var(--primary-color)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.9rem' }}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ borderBottom: '2px solid var(--primary-color)', paddingBottom: '5px' }}>Education</h3>
        <div style={{ marginTop: '15px', background: 'var(--card-bg)', padding: '15px', borderRadius: '6px' }}>
          <h4 style={{ margin: '0 0 5px 0' }}>Bachelor of Computer Science</h4>
          <p style={{ margin: 0, color: 'gray', fontSize: '0.9rem' }}>Focused on Web Development and Frontend Technologies</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;