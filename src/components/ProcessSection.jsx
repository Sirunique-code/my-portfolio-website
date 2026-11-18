import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function ProcessSection({ darkMode, onNavigate }) {
  return (
    <section id="process" className="py-20 md:py-32 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-block font-display text-sm tracking-widest text-[#08b9d4] dark:text-[#00bdf1] uppercase mb-2">
            PROCESS
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.95]">
            How We Work Together
          </h2>
        </div>

        {/* 3 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {portfolioData.process.map((step) => (
            <div
              key={step.number}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                darkMode
                  ? 'bg-[#1c1c1c] border-[#303030] hover:border-[#555]'
                  : 'bg-[#f2f2f2] border-[#e3e3e3] hover:border-neutral-400'
              }`}
            >
              <div>
                {/* Step character video */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 bg-neutral-900 border border-white/10">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src={step.video} type="video/mp4" />
                  </video>
                </div>

                <div className="font-display font-extrabold text-2xl text-[#08b9d4] dark:text-[#00bdf1] mb-2">
                  {step.number}
                </div>

                <h3 className="font-display font-bold text-3xl uppercase tracking-tight mb-3">
                  {step.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? 'text-[#a1a1a1]' : 'text-[#616161]'
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ready to Get Started Banner Card */}
        <div
          className={`p-8 sm:p-12 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 ${
            darkMode
              ? 'bg-gradient-to-br from-[#1c1c1c] via-[#222222] to-[#171717] border-[#303030]'
              : 'bg-gradient-to-br from-[#f2f2f2] via-[#ebebeb] to-[#f7f7f7] border-[#e3e3e3]'
          }`}
        >
          <div className="max-w-xl">
            <h3 className="font-display font-extrabold text-4xl sm:text-5xl uppercase tracking-tight mb-3">
              {portfolioData.readyCard.title}
            </h3>
            <p
              className={`text-base sm:text-lg leading-relaxed mb-6 ${
                darkMode ? 'text-[#cccccc]' : 'text-[#575757]'
              }`}
            >
              {portfolioData.readyCard.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 border ${
                  darkMode
                    ? 'bg-[#00bdf1] text-black border-[#00bdf1] hover:bg-[#38d4ff]'
                    : 'bg-[#08b9d4] text-white border-[#08b9d4] hover:bg-[#07a3bb]'
                }`}
              >
                <span>{portfolioData.readyCard.cta1}</span>
                <ArrowUpRight size={16} />
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
                    ? 'bg-[#242424] text-white border-[#3a3a3a] hover:bg-[#2c2c2c]'
                    : 'bg-white text-black border-[#e0e0e0] hover:bg-neutral-100'
                }`}
              >
                <span>{portfolioData.readyCard.cta2}</span>
              </a>
            </div>
          </div>

          {/* Video Reaction Loop */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-xl bg-neutral-900 flex-shrink-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={portfolioData.readyCard.video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
