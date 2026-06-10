import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const { projects } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('All');

  const allTechs = ['All', ...new Set(projects.flatMap(p => p.technologies))];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = selectedTech === 'All' || project.technologies.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      
    
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input 
          type="text" 
          placeholder="Search projects..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
        />
        <select 
          value={selectedTech} 
          onChange={(e) => setSelectedTech(e.target.value)}
          className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
        >
          {allTechs.map(tech => <option key={tech} value={tech}>{tech}</option>)}
        </select>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;