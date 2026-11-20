import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolio_theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    if (currentPath === '/' || currentPath === '') {
      return <HomePage darkMode={darkMode} onNavigate={handleNavigate} />;
    }
    if (currentPath === '/projects' || currentPath === '/projects/') {
      return <ProjectsPage darkMode={darkMode} onNavigate={handleNavigate} />;
    }
    if (currentPath === '/services' || currentPath === '/services/') {
      return <ServicesPage darkMode={darkMode} onNavigate={handleNavigate} />;
    }
    if (currentPath.startsWith('/projects/')) {
      const slug = currentPath.replace('/projects/', '').replace(/\/$/, '');
      return (
        <ProjectDetailPage
          slug={slug}
          darkMode={darkMode}
          onNavigate={handleNavigate}
        />
      );
    }
    return <NotFoundPage darkMode={darkMode} onNavigate={handleNavigate} />;
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? 'bg-[#0f0f0f] text-white' : 'bg-white text-black'
      }`}
    >
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      {renderContent()}
      <Footer darkMode={darkMode} onNavigate={handleNavigate} />
      <Analytics />
    </div>
  );
}
