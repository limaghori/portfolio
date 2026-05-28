import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import myNewPhoto from './assets/me.jpg';

export default function App() {
  const [theme, setTheme] = useState('light');
  const developerName = "Lima Developer";

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="container">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Header developerName={developerName} welcomeMessage="Building fast, modular, and responsive solutions for the web." />
      <Profile avatar= {myNewPhoto} title="Full-Stack Web Developer" bio="Passionate developer experienced in building web structures." />
      <About />
      <Projects />
      <Footer developerName={developerName} />
    </div>
  );
}