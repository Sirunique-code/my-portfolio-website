import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sun, Moon, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Navbar({ currentPath, onNavigate, darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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

  const handleScrollToContact = () => {
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
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-2.5 sm:py-3' : 'py-3.5 sm:py-5'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-3 sm:px-6">
          <nav
            className={`flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 border ${
              darkMode
                ? 'bg-[#141414]/95 border-[#303030]/90 text-white shadow-xl shadow-black/60'
                : 'bg-white/95 border-[#e3e3e3]/90 text-black shadow-xl shadow-black/10'
            } backdrop-blur-2xl`}
          >
            {/* Left: Avatar + Responsive Name + Status */}
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex items-center gap-2.5 sm:gap-3 group min-w-0"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-[#303030]/30 dark:border-[#555]/40 bg-neutral-200 dark:bg-neutral-800 flex-shrink-0 shadow-inner">
                <img
                  src={portfolioData.profile.avatar}
                  alt={portfolioData.profile.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-0 right-0 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#44c92c] ring-2 ring-white dark:ring-[#141414] animate-pulse"></span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-xs sm:text-sm tracking-tight leading-tight truncate">
                  <span className="sm:hidden">{portfolioData.profile.shortName || 'Thaddeaus'}</span>
                  <span className="hidden sm:inline">{portfolioData.profile.name}</span>
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#575757] dark:text-[#a1a1a1] leading-tight flex items-center gap-1 mt-0.5 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#44c92c] flex-shrink-0"></span>
                  <span className="hidden sm:inline">{portfolioData.profile.statusText}</span>
                  <span className="sm:hidden">Available</span>
                </span>
              </div>
            </a>

            {/* Center: Desktop Navigation Links */}
            <div
              className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border ${
                darkMode ? 'bg-[#222222]/80 border-[#303030]' : 'bg-[#f5f5f5]/90 border-[#e3e3e3]'
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

            {/* Right: Theme Toggle & Chat Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
              {/* Dark/Light mode toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme"
                className={`p-2 rounded-full border transition-all duration-200 ${
                  darkMode
                    ? 'border-[#303030] bg-[#222222] text-neutral-300 hover:text-white hover:border-[#555]'
                    : 'border-[#e3e3e3] bg-[#f0f0f0] text-neutral-700 hover:text-black hover:border-neutral-400'
                }`}
              >
                {darkMode ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              {/* Chat CTA Button (Desktop & Tablet) */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToContact();
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
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className={`md:hidden p-2 rounded-full border transition-all duration-200 ${
                  mobileMenuOpen
                    ? darkMode
                      ? 'border-[#00bdf1] bg-[#00bdf1] text-black shadow-md shadow-[#00bdf1]/20'
                      : 'border-[#08b9d4] bg-[#08b9d4] text-white shadow-md shadow-[#08b9d4]/20'
                    : darkMode
                    ? 'border-[#303030] bg-[#222222] text-white hover:border-[#555]'
                    : 'border-[#e3e3e3] bg-[#f0f0f0] text-black hover:border-neutral-400'
                }`}
              >
                {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Slick Fullscreen Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-50 md:hidden flex flex-col justify-between p-5 pt-6 pb-6 overflow-y-auto transition-all duration-300 ${
            darkMode
              ? 'bg-[#0d0d0d]/98 text-white'
              : 'bg-white/98 text-black'
          } backdrop-blur-2xl`}
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800/80">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#303030]/30 dark:border-[#555]/40 bg-neutral-200 dark:bg-neutral-800">
                <img
                  src={portfolioData.profile.avatar}
                  alt={portfolioData.profile.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#44c92c] ring-2 ring-white dark:ring-[#0d0d0d] animate-pulse"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm tracking-tight leading-none">
                  {portfolioData.profile.name}
                </span>
                <span className="text-[11px] text-[#575757] dark:text-[#a1a1a1] flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#44c92c]"></span>
                  {portfolioData.profile.statusText}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme"
                className={`p-2 rounded-full border transition-all ${
                  darkMode
                    ? 'border-[#303030] bg-[#222222] text-neutral-300'
                    : 'border-[#e3e3e3] bg-[#f0f0f0] text-neutral-700'
                }`}
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className={`p-2 rounded-full border transition-all ${
                  darkMode
                    ? 'border-[#303030] bg-[#222222] text-white hover:bg-neutral-800'
                    : 'border-[#e3e3e3] bg-[#f0f0f0] text-black hover:bg-neutral-200'
                }`}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Nav Links with Numbering and Arrow */}
          <nav className="flex flex-col gap-2 my-auto py-6">
            {navLinks.map((link, idx) => {
              const isActive =
                (link.path === '/' && currentPath === '/') ||
                (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`group flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all duration-200 border ${
                    isActive
                      ? darkMode
                        ? 'bg-[#1a1a1a] border-[#00bdf1]/50 text-[#00bdf1]'
                        : 'bg-[#f4f4f4] border-[#08b9d4]/50 text-[#08b9d4]'
                      : darkMode
                      ? 'border-transparent text-neutral-300 hover:bg-[#1a1a1a]/60 hover:text-white'
                      : 'border-transparent text-neutral-700 hover:bg-[#f5f5f5] hover:text-black'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs opacity-40">0{idx + 1}</span>
                    <span className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight uppercase">
                      {link.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className={`transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      isActive ? 'opacity-100 text-[#00bdf1] dark:text-[#00bdf1]' : 'opacity-30 group-hover:opacity-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Bottom Card: Availability, Direct CTA & Socials */}
          <div className="flex flex-col gap-3">
            {/* Quick Action Card */}
            <div
              className={`p-4 rounded-2xl border transition-all ${
                darkMode ? 'bg-[#181818] border-[#2b2b2b]' : 'bg-[#f8f8f8] border-[#e8e8e8]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#08b9d4] dark:text-[#00bdf1] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#44c92c] animate-pulse"></span>
                  Ready to Collaborate
                </span>
                <span className="text-[11px] text-[#575757] dark:text-[#888888]">
                  Response: &lt;24hrs
                </span>
              </div>
              <p className="text-xs text-[#575757] dark:text-[#a1a1a1] leading-relaxed mb-3">
                Have a project or design in mind? Let's turn your vision into reality.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={portfolioData.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    darkMode
                      ? 'bg-[#222222] border-[#383838] text-white hover:bg-neutral-800'
                      : 'bg-white border-[#dedede] text-black hover:bg-neutral-100'
                  }`}
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToContact();
                  }}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold uppercase transition-all shadow-md ${
                    darkMode
                      ? 'bg-[#00bdf1] text-black hover:bg-[#38d4ff] shadow-[#00bdf1]/20'
                      : 'bg-[#08b9d4] text-white hover:bg-[#07a3bb] shadow-[#08b9d4]/20'
                  }`}
                >
                  <span>Start Project</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Social Links Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-neutral-200 dark:border-neutral-800/80 text-xs">
              <span className="text-[#575757] dark:text-[#888888] font-mono text-[11px]">
                © {new Date().getFullYear()} {portfolioData.profile.shortName}
              </span>
              <div className="flex items-center gap-1.5">
                {portfolioData.contact.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-2.5 py-1 rounded-full text-[11px] font-medium border transition-colors ${
                      darkMode
                        ? 'border-[#2d2d2d] bg-[#1a1a1a] text-neutral-400 hover:text-white hover:border-neutral-600'
                        : 'border-[#e0e0e0] bg-[#f5f5f5] text-neutral-600 hover:text-black hover:border-neutral-400'
                    }`}
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
