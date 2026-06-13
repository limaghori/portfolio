import React from 'react';

function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="project-card" style={{
      background: 'var(--card-bg)',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease',
      border: '1px solid rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ color: 'gray', fontSize: '0.95rem' }}>{description}</p>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '15px' }}>
        {tags.map((tag, index) => (
          <span key={index} style={{ background: 'var(--primary-color)', color: '#fff', padding: '3px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
            {tag}
          </span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', fontWeight: 'bold', textDecoration: 'none' }}>
        Look Project←
      </a>
    </div>
  );
}

export default ProjectCard;