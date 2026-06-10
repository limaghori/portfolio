import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 text-white">
      <h1 className="text-5xl font-extrabold mb-4">
        Hi, I am a <span className="text-cyan-400">Computer Science Student</span>
      </h1>
      <p className="text-gray-400 max-w-md mb-8">
        Welcome to Part 3 of my advanced developer portfolio. Explore my dynamic projects and feel free to reach out.
      </p>
      
      {/* دکمه‌ها با قابلیت انتقال به صفحات دیگر */}
      <div className="flex gap-4">
        <Link 
          to="/projects" 
          className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
        >
          View Projects
        </Link>
        <Link 
          to="/contact" 
          className="border border-white/20 hover:bg-white/5 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Home;