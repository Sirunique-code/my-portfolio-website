import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, ArrowDownRight, ArrowUpRight } from 'lucide-react';

export default function Hero({ darkMode, onNavigate }) {
  const [activeRole, setActiveRole] = useState('GRAPHIC DESIGN');
  const roles = ['GRAPHIC DESIGN', 'WEB DEV', 'BRANDING'];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Greeting Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-6 border transition-all duration-300 ${
            darkMode
              ? 'bg-[#1c1c1c] border-[#303030] text-[#cccccc]'
              : 'bg-[#f2f2f2] border-[#e3e3e3] text-[#575757]'
          }`}
        >
          <Sparkles size={14} className="text-[#08b9d4] dark:text-[#00bdf1]" />
          <span>{portfolioData.profile.greeting}</span>
        </div>

        {/* Giant Headline */}
        <div className="relative w-full select-none">
          <h1 className="font-display font-extrabold text-[18vw] sm:text-[15vw] md:text-[11rem] leading-[0.88] tracking-tighter text-center uppercase transition-all duration-300">
            <span
              className={`block transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-black'
              }`}
            >
              {portfolioData.profile.headlinePart1}
            </span>
            <span
              className={`block transition-colors duration-300 ${
                darkMode
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600'
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500'
              }`}
            >
              {portfolioData.profile.headlinePart2}
            </span>
          </h1>
        </div>

        {/* Central 3D Animated Mascot / Video Box */}
        <div className="relative w-full max-w-[960px] mt-6 sm:mt-10 rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 shadow-2xl bg-neutral-900 group">
          <div
            className={`absolute inset-0 pointer-events-none border transition-colors duration-300 z-10 rounded-2xl sm:rounded-3xl ${
              darkMode ? 'border-[#303030]' : 'border-[#e3e3e3]'
            }`}
          ></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={portfolioData.profile.heroPoster}
            className="w-full h-[280px] sm:h-[420px] md:h-[500px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
          >
            <source src={portfolioData.profile.heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Interactive Floating Tags inside Hero Media */}
          <div className="absolute top-4 left-4 z-20 hidden sm:flex items-center gap-2">
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setActiveRole(r)}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 backdrop-blur-md border ${
                  activeRole === r
                    ? 'bg-white text-black border-white shadow-md'
                    : 'bg-black/60 text-white/80 border-white/20 hover:bg-black/80'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="absolute bottom-4 right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] text-white">
            <span className="w-2 h-2 rounded-full bg-[#44c92c] animate-pulse"></span>
            <span>Based in Nigeria &middot; Available Globally</span>
          </div>
        </div>

        {/* Subtitle & Action CTAs */}
        <div className="max-w-[680px] mt-8 sm:mt-12 flex flex-col items-center">
          <p
            className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed text-center transition-colors ${
              darkMode ? 'text-[#cccccc]' : 'text-[#575757]'
            }`}
          >
            {portfolioData.profile.bio}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 border ${
                darkMode
                  ? 'bg-white text-black border-white hover:bg-neutral-200 shadow-lg shadow-white/10'
                  : 'bg-black text-white border-black hover:bg-neutral-800 shadow-lg shadow-black/10'
              }`}
            >
              <span>Explore Projects</span>
              <ArrowDownRight size={16} />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 border ${
                darkMode
                  ? 'bg-[#1c1c1c] text-white border-[#303030] hover:bg-[#242424]'
                  : 'bg-[#f2f2f2] text-black border-[#e3e3e3] hover:bg-[#e8e8e8]'
              }`}
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
