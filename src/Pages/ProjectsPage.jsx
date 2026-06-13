import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  // Get projects from context, fallback to empty array if undefined
  const { projects = [] } = useAppContext(); 
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('All');

  // Safely extract unique technologies
  const allTechs = ['All', ...new Set(projects.flatMap(p => p.technologies || []))];

  // Filter projects based on search and selected technology with safe checks
  const filteredProjects = projects.filter(project => {
    const titleText = project.title || '';
    const matchesSearch = titleText.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = selectedTech === 'All' || (project.technologies && project.technologies.includes(selectedTech));
    return matchesSearch && matchesTech;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen text-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-2">My Projects</h1>
        <p className="text-gray-400 text-sm">A curated list of my work, featuring advanced tech stack filtering.</p>
      </div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white/5 p-4 rounded-xl border border-white/10">
        <input 
          type="text" 
          placeholder="Search projects..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-cyan-400 text-sm"
        />
        <select 
          value={selectedTech} 
          onChange={(e) => setSelectedTech(e.target.value)}
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-cyan-400 text-sm"
        >
          {allTechs.map(tech => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>
      </div>

      {/* Dynamic Projects Grid Layout */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-10">No projects found matching the criteria.</p>
      )}
    </div>
  );
};

export default ProjectsPage;