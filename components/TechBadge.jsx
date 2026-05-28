import React from 'react';

const badgeStyle = {
  display: 'inline-block',
  padding: '0.25rem 0.75rem',
  margin: '0.25rem',
  borderRadius: '9999px',
  fontSize: '0.85rem',
  fontWeight: '500',
  backgroundColor: 'var(--badge-bg)',
  color: 'var(--badge-text)',
};

export default function TechBadge({ text }) {
  return <span style={badgeStyle}>{text}</span>;
}