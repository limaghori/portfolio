import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';

import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import ProjectsPage from './Pages/ProjectsPage.jsx';
import ProjectDetails from './Pages/ProjectDetails.jsx';
import NotFound from './Pages/NotFound.jsx';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Header />
          
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;