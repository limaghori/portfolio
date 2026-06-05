import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "Student Portal",
      description: "A comprehensive school management system simulating student enrollment, dynamic profile rendering, and secure form validation built with pure JavaScript.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      link: "https://github.com/limaghori/student-portal"
    },
    {
      id: 2,
      title: "Freelance Invoice & Client Manager",
      description: "A complete billing application for freelancers utilizing localStorage for persistent data storage and external APIs for dynamic data fetching.",
      tech: ["React", "Tailwind CSS", "Node.js", "LocalStorage"],
      link: "https://github.com/limaghori/Freelance-Invoice-Client-Manager-App"
    }
  ];

  return (
    <section id="projects" className="py-12 border-b border-gray-100 dark:border-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
        💻 My Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myProjects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}