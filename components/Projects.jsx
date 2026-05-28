import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  // لیست پروژه‌های واقعی شما در گیت‌هاب
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
    <section id="projects" style={{ padding: '2rem 0' }}>
      <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>My Projects</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '1.5rem' 
      }}>
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