import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 bg-white/10 backdrop-blur-md text-white flex flex-col justify-between shadow-lg">
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
            project.status === 'Completed' ? 'bg-green-500/20 text-green-300' :
            project.status === 'Featured' ? 'bg-amber-500/20 text-amber-300' : 'bg-blue-500/20 text-blue-300'
          }`}>
            {project.status}
          </span>
          <span className="text-xs text-gray-400">ID: {project.id}</span>
        </div>

        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span key={tech} className="bg-white/10 text-xs px-2.5 py-1 rounded-md border border-white/5">
              {tech}
            </span>
          ))}
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1 text-gray-300">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden" role="progressbar" aria-valuenow={project.progress} aria-valuemin="0" aria-valuemax="100">
            <div className="bg-cyan-400 h-full transition-all duration-500" style={{ width: `${project.progress}%` }}></div>
          </div>
        </div>

        <button 
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-cyan-400 hover:underline mb-3 block focus:outline-none"
        >
          {isExpanded ? 'Show Less ▲' : 'More Info ▼'}
        </button>
        
        {isExpanded && (
          <p className="text-xs text-gray-400 bg-black/20 p-3 rounded-lg mb-4 leading-relaxed border border-white/5">
            {project.longDescription}
          </p>
        )}
      </div>

      <div className="flex gap-3 mt-2">
        <Link to={`/projects/${project.id}`} className="flex-1 text-center bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 rounded-lg text-sm transition-colors">
          View Project
        </Link>
        <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 text-center border border-white/20 hover:bg-white/5 py-2 rounded-lg text-sm transition-colors">
          GitHub Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;