import React from 'react';

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div style={{ 
      backgroundColor: 'var(--card-bg, #ffffff)', 
      border: '1px solid #e0e0e0', 
      borderRadius: '12px', 
      padding: '1.5rem', 
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'between',
      height: '100%'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-color, #333)' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: '1.5', flexGrow: 1 }}>{description}</p>
      
      {/* بخش تکنولوژی‌ها */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0' }}>
        {tech && tech.map((item, index) => (
          <span key={index} style={{ 
            fontSize: '0.8rem', 
            padding: '0.25rem 0.75rem', 
            backgroundColor: '#e0f2fe', 
            color: '#0369a1', 
            borderRadius: '9999px',
            fontWeight: '500'
          }}>
            {item}
          </span>
        ))}
      </div>

      {/* لینک مستقیم به گیت‌هاب شما */}
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ 
          display: 'inline-block', 
          color: '#0284c7', 
          textDecoration: 'none', 
          fontWeight: 'bold',
          fontSize: '0.95rem'
        }}
      >
        View Project ➜
      </a>
    </div>
  );
}