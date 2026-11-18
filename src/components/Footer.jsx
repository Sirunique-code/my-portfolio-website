import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

export default function Footer({ darkMode, onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-20 pb-12 border-t transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Giant "START A PROJECT" Banner */}
        <div
          onClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`cursor-pointer p-8 sm:p-16 rounded-3xl border transition-all duration-300 group relative overflow-hidden mb-16 ${
            darkMode
              ? 'bg-[#1c1c1c] border-[#303030] hover:border-[#555] hover:bg-[#222222]'
              : 'bg-[#f2f2f2] border-[#e3e3e3] hover:border-neutral-400 hover:bg-[#eaeaea]'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
            <div>
              <span className="text-xs uppercase font-semibold tracking-widest text-[#08b9d4] dark:text-[#00bdf1] block mb-2">
                Have an idea?
              </span>
              <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-[0.9] group-hover:text-[#08b9d4] dark:group-hover:text-[#00bdf1] transition-colors">
                START A PROJECT
              </h2>
            </div>

            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110 flex-shrink-0 ${
                darkMode
                  ? 'bg-white text-black border-white'
                  : 'bg-black text-white border-black'
              }`}
            >
              <ArrowUpRight size={32} />
            </div>
          </div>
        </div>

        {/* Footer Navigation & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#e3e3e3] dark:border-[#303030]">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
              <img
                src={portfolioData.profile.avatar}
                alt={portfolioData.profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-sm tracking-tight">
                {portfolioData.profile.name}
              </div>
              <div className="text-xs text-[#575757] dark:text-[#a1a1a1]">
                {portfolioData.profile.jobTitle}
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider">
            <button
              onClick={() => {
                onNavigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#08b9d4] dark:hover:text-[#00bdf1] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate('/projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#08b9d4] dark:hover:text-[#00bdf1] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => {
                onNavigate('/services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#08b9d4] dark:hover:text-[#00bdf1] transition-colors"
            >
              Services
            </button>
            <a
              href="#about-me"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('about-me');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-[#08b9d4] dark:hover:text-[#00bdf1] transition-colors"
            >
              About
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 text-xs">
            {portfolioData.contact.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="text-[#575757] dark:text-[#a1a1a1] hover:text-black dark:hover:text-white transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#575757] dark:text-[#a1a1a1]">
          <div>
            &copy; {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
              darkMode
                ? 'bg-[#1c1c1c] border-[#303030] hover:bg-[#242424] text-white'
                : 'bg-[#f2f2f2] border-[#e3e3e3] hover:bg-[#e8e8e8] text-black'
            }`}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
