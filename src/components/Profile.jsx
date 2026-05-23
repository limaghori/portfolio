import React from 'react';

export default function Profile({ avatar, title, bio }) {
  const profileStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '1.5rem',
    padding: '2rem 0',
  };

  return (
    <div style={profileStyle}>
      <img 
        src={avatar} 
        alt="Developer Profile" 
        style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--accent-color)' }}
      />
      <div>
        <h2>{title}</h2>
        <p style={{ maxWidth: '600px', margin: '0.5rem auto 0', opacity: 0.9 }}>{bio}</p>
      </div>
    </div>
  );
}