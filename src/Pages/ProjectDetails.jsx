import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const ProjectDetails = () => {
  const { id } = useParams();
  const { projects } = useContext(AppContext);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // شبیه‌سازی لودینگ (بر اساس نیازمندی پارت ۳ برای useEffect)
    const foundProject = projects.find(p => p.id === id);
    setTimeout(() => {
      setProject(foundProject);
      setLoading(false);
    }, 500);
  }, [id, projects]);

  if (loading) return <div className="text-center py-10">Loading project details...</div>;
  if (!project) return <div className="text-center py-10">Project not found! <Link to="/projects" className="text-blue-500">Back</Link></div>;

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <Link to="/projects" className="text-blue-500 text-sm mb-4 inline-block">← Back to Projects</Link>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <div className="mb-4">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{project.status}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{project.longDescription}</p>
      <div className="border-t pt-4">
        <h4 className="font-semibold mb-2">Technologies Used:</h4>
        <div className="flex gap-2">
          {project.technologies.map(tech => (
            <span key={tech} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded text-sm">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;