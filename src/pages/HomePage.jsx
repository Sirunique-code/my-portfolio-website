import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialSection from '../components/TestimonialSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';

export default function HomePage({ darkMode, onNavigate }) {
  return (
    <main>
      <Hero darkMode={darkMode} onNavigate={onNavigate} />
      <Stats darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} onNavigate={onNavigate} />
      <AboutSection darkMode={darkMode} />
      <ServicesSection darkMode={darkMode} onNavigate={onNavigate} />
      <ProcessSection darkMode={darkMode} onNavigate={onNavigate} />
      <TestimonialSection darkMode={darkMode} />
      <FaqSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
    </main>
  );
}
