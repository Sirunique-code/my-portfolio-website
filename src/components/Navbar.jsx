import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ currentPath, onNavigate, darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/#about-me' },
  ];

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      if (currentPath !== '/') {
        onNavigate('/');
        setTimeout(() => {
          const el = document.getElementById(path.replace('/#', ''));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(path.replace('/#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <nav
            className={`flex items-center justify-between px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 border ${
              darkMode
                ? 'bg-[#1c1c1c]/80 border-[#303030] text-white shadow-lg shadow-black/40'
                : 'bg-white/80 border-[#e3e3e3] text-black shadow-lg shadow-black/5'
            } glass-nav`}
          >
            {/* Left: Avatar + Name + Online Status */}
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#303030]/20 dark:border-[#555]/40 bg-neutral-200 dark:bg-neutral-800">
                <img
                  src={portfolioData.profile.avatar}
                  alt={portfolioData.profile.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#44c92c] ring-2 ring-white dark:ring-[#1c1c1c] animate-pulse"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm tracking-tight leading-none">
                  {portfolioData.profile.name}
                </span>
                <span className="text-[11px] text-[#575757] dark:text-[#a1a1a1] leading-tight flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#44c92c]"></span>
                  {portfolioData.profile.statusText}
                </span>
              </div>
            </a>

            {/* Center: Desktop Navigation Links */}
            <div
              className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border ${
                darkMode ? 'bg-[#242424]/60 border-[#303030]' : 'bg-[#f5f5f5]/80 border-[#e3e3e3]'
              }`}
            >
              {navLinks.map((link) => {
                const isActive =
                  (link.path === '/' && currentPath === '/') ||
                  (link.path !== '/' && currentPath.startsWith(link.path));
                return (
                  <a
                    key={link.label}
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                      isActive
                        ? darkMode
                          ? 'bg-white text-black font-semibold shadow-sm'
                          : 'bg-black text-white font-semibold shadow-sm'
                        : darkMode
                        ? 'text-[#cccccc] hover:text-white hover:bg-white/5'
                        : 'text-[#575757] hover:text-black hover:bg-black/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Right: Theme Toggle & Chat Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Dark/Light mode toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme"
                className={`p-2 rounded-full border transition-all duration-200 ${
                  darkMode
                    ? 'border-[#303030] bg-[#242424] text-neutral-300 hover:text-white hover:border-[#555]'
                    : 'border-[#e3e3e3] bg-[#f0f0f0] text-neutral-700 hover:text-black hover:border-neutral-400'
                }`}
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* Chat CTA Button */}
              <a
                href="#form"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPath !== '/') {
                    onNavigate('/');
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 150);
                  } else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 border ${
                  darkMode
                    ? 'bg-[#00bdf1] text-black border-[#00bdf1] hover:bg-[#38d4ff] shadow-lg shadow-[#00bdf1]/20'
                    : 'bg-[#08b9d4] text-white border-[#08b9d4] hover:bg-[#07a3bb] shadow-lg shadow-[#08b9d4]/20'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#44c92c] animate-pulse"></span>
                <span>{portfolioData.profile.chatButtonText}</span>
                <ArrowUpRight size={14} />
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className={`md:hidden p-2 rounded-full border transition-colors ${
                  darkMode
                    ? 'border-[#303030] bg-[#242424] text-white'
                    : 'border-[#e3e3e3] bg-[#f0f0f0] text-black'
                }`}
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 md:hidden pt-24 px-6 flex flex-col justify-between pb-8 transition-all duration-300 ${
            darkMode ? 'bg-[#0f0f0f]/98 text-white' : 'bg-white/98 text-black'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`text-2xl font-display tracking-wider py-2 border-b transition-colors ${
                  darkMode
                    ? 'border-[#242424] text-neutral-300 hover:text-white'
                    : 'border-[#e3e3e3] text-neutral-700 hover:text-black'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                if (currentPath !== '/') {
                  onNavigate('/');
                  setTimeout(() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                } else {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`mt-4 flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold tracking-wide border ${
                darkMode
                  ? 'bg-[#00bdf1] text-black border-[#00bdf1]'
                  : 'bg-[#08b9d4] text-white border-[#08b9d4]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#44c92c]"></span>
              <span>{portfolioData.profile.chatButtonText}</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-neutral-800 text-xs text-[#575757]">
            <span>{portfolioData.profile.name} Portfolio</span>
            <div className="flex gap-4">
              {portfolioData.contact.socials.slice(0, 3).map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
