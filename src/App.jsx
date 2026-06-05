 import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';

import ProjectUpdates from './components/ProjectUpdates';
import ThemeToggle from './components/ThemeToggle';
import Contact from './components/Contact';
import FeedbackWall from './components/FeedbackWall';

import myNewPhoto from './assets/me.jpg'; 

export default function App() {
  const developerName = "Lima Ghori"; 


  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'light';
  });

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('portfolio_theme', nextTheme);
  };

  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

 
  const [techFilter, setTechFilter] = useState('All');
  const [visibleDetails, setVisibleDetails] = useState({});

  const projectsData = [
    { id: 1, title: 'Student Management Portal', tech: 'JavaScript', featured: true, desc: 'A custom web system simulating real-world student enrollments forms, reactive inputs dashboards, and localStorage state persistence models.' },
    { id: 2, title: 'Freelance Invoice App', tech: 'React', featured: true, desc: 'An interactive financial micro-service layout allowing users to run asynchronous component operations to perform complete CRUD client tracking.' },
    { id: 3, title: 'Developer Portfolio Hub', tech: 'React', featured: false, desc: 'A single-page React framework engineered via automated compilation bundles tracking deployment status pipelines.' }
  ];

  const toggleDetails = (id) => {
    setVisibleDetails(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProjects = techFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.tech === techFilter);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      { }
      <ProjectUpdates />

      <div className="container mx-auto px-4">
        { }
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <Header developerName={developerName} welcomeMessage="Building fast, modular, and responsive solutions for the web." />
        <Profile avatar={myNewPhoto} title="Full-Stack Web Developer" bio="Passionate developer experienced in building web structures." />
        <About />

        { }
        <section id='about' className="py-12 border-t border-b dark:border-gray-800 my-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold tracking-tight">💻 Interactive Projects Grid</h2>
            
            <div className="flex gap-2">
              {['All', 'React', 'JavaScript'].map(tech => (
                <button
                  key={tech}
                  onClick={() => setTechFilter(tech)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    techFilter === tech ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <div key={project.id} className="border dark:border-gray-800 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                
                {project.featured && (
                  <span className="absolute top-3 right-3 bg-teal-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                    ⭐ Featured
                  </span>
                )}

                <h3 className="text-xl font-bold mb-2 pt-2">{project.title}</h3>
                <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-2.5 py-0.5 rounded-full font-semibold mb-4">
                  {project.tech}
                </span>

                <div className="mt-2">
                  <button 
                    onClick={() => toggleDetails(project.id)}
                    className="text-xs text-blue-500 hover:underline font-bold flex items-center gap-1 focus:outline-none"
                  >
                    {visibleDetails[project.id] ? '🔼 Hide Details' : '🔽 View Details'}
                  </button>
                  
                  {visibleDetails[project.id] && (
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-100 dark:border-gray-800">
                      {project.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <Contact />

        {}
        <FeedbackWall />

        {}
        <Footer developerName={developerName} />
      </div>

      {}
      <ThemeToggle theme={theme} onToggleTheme={toggleTheme} />
    </div>
  );
}