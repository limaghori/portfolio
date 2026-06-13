import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 text-white">
      <h1 className="text-5xl font-extrabold mb-4">
        Hi, I am a <span className="text-cyan-400">Computer Science Student</span>
      </h1>
      <p className="text-gray-400 max-w-md mb-8">
        Welcome to Part 3 of my advanced developer portfolio. Explore my dynamic projects and feel free to reach out.
      </p>
      
      
       <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
  <Link to="/projects" style={{ display: 'inline-block', backgroundColor: '#06b6d4', color: 'black', fontWeight: '600', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none' }}>
    View Projects
  </Link>
  <Link to="/contact" style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontWeight: '600', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none' }}>
    Contact Me
  </Link>
</div>
    </div>
  );
};

export default Home;