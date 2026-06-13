import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  // Array of projects with fully English content
  const myProjects = [
    {
      title: "Personal Portfolio React",
      description: "A fully responsive website featuring advanced dynamic dark/light mode and state management using React Context API.",
      tags: ["React", "Context API", "CSS Modules"],
      link: "https://github.com/limaghori/portfolio"
    },
    {
      title: "Task Management System",
      description: "A professional web application designed to track daily tasks, manage routines, and facilitate team collaboration.",
      tags: ["React Router", "LocalStorage", "Tailwind"],
      link: "#"
    }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', direction: 'ltr', textAlign: 'left' }}>
      <h2 style={{ color: 'var(--primary-color)', marginBottom: '40px', fontWeight: 'bold' }}>My Projects</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
        {myProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;