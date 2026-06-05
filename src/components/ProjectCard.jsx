import React from 'react';

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all">
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, idx) => (
          <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded bg-gray-150 dark:bg-gray-700 text-gray-850 dark:text-gray-200">
            {t}
          </span>
        ))}
      </div>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors"
      >
        View Code 🚀
      </a>
    </div>
  );
}