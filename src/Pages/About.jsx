import React from 'react';
import { useAppContext } from '../context/AppContext';

const About = () => {

  const { isDarkMode } = useAppContext();

  const skills = [
    { name: 'React.js', level: '85%' },
    { name: 'JavaScript (ES6+)', level: '80%' },
    { name: 'Tailwind CSS', level: '90%' },
    { name: 'UI/UX Design', level: '75%' },
    { name: 'Git & GitHub', level: '85%' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-white min-h-screen">
    
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-2">About Me</h1>
        <p className="text-gray-400 text-sm">Passionate Computer Science Student & Frontend Developer</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="md:col-span-1 bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Education</h3>
            <p className="text-sm font-semibold">B.S. in Computer Science</p>
            <p className="text-xs text-gray-400 mb-6">Current Student</p>

            <h3 className="text-xl font-bold mb-2 text-cyan-400">Current Focus</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Deep diving into component-driven architecture, global state management (Context API), and client-side routing.
            </p>
          </div>

        
          <div className="mt-8 pt-4 border-t border-white/10 text-xs text-gray-400 flex justify-between items-center">
            <span>Global Theme Status:</span>
            <span className={`px-2 py-1 rounded font-bold ${isDarkMode ? 'bg-amber-500/20 text-amber-400' : 'bg-cyan-500/20 text-cyan-400'}`}>
              {isDarkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
            </span>
          </div>
        </div>

      
        <div className="md:col-span-2 bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">My Journey</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            As a Computer Science student, I treat portfolio development not just as an assignment, but as a scalable engineering challenge. 
            This portfolio has evolved from basic HTML/CSS layouts in Part 1, to adding custom hooks and validation in Part 2, and now fully implementing client-side multi-page routing with dynamic filters in Part 3.
          </p>

          <h3 className="text-xl font-bold mb-4 text-cyan-400">Technical Skills</h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-cyan-400 font-bold">{skill.level}</span>
                </div>
                
                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-cyan-400 h-full transition-all duration-500" 
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;