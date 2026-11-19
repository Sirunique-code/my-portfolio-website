import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Layers } from 'lucide-react';

export default function AboutSection({ darkMode }) {
  return (
    <section id="about-me" className="py-20 md:py-32 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-block font-display text-sm tracking-widest text-[#08b9d4] dark:text-[#00bdf1] uppercase mb-2">
            ABOUT ME
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.95]">
            Let Me Introduce Myself
          </h2>
          <p
            className={`mt-4 max-w-2xl text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-[#cccccc]' : 'text-[#575757]'
            }`}
          >
            I am Thaddeaus Samuel, a multidisciplinary creative professional combining graphic design,
            brand communication, and web development. With 6+ years of design experience and an academic
            background in Computer Science, I turn ideas into functional, visually compelling solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Tech Stack & Tools (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                darkMode ? 'bg-[#1c1c1c] border-[#303030]' : 'bg-[#f2f2f2] border-[#e3e3e3]'
              }`}
            >
              <div className="flex items-center gap-2 mb-6 text-sm font-semibold tracking-wider uppercase">
                <Layers size={18} className="text-[#08b9d4] dark:text-[#00bdf1]" />
                <span>My Stack</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4">
                {portfolioData.stack.map((item) => (
                  <div
                    key={item.name}
                    className={`p-4 rounded-2xl border transition-all duration-200 hover:scale-102 flex flex-col items-center text-center ${
                      darkMode
                        ? 'bg-[#242424] border-[#3a3a3a] text-white'
                        : 'bg-white border-[#e0e0e0] text-black shadow-sm'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center p-2 mb-3 bg-neutral-100 dark:bg-neutral-800">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="font-bold text-sm">{item.name}</span>
                    <span
                      className={`text-[11px] mt-0.5 ${
                        darkMode ? 'text-[#a1a1a1]' : 'text-[#616161]'
                      }`}
                    >
                      {item.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience Timeline (7 cols) */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                darkMode ? 'bg-[#1c1c1c] border-[#303030]' : 'bg-[#f2f2f2] border-[#e3e3e3]'
              }`}
            >
              <div className="flex items-center gap-2 mb-6 text-sm font-semibold tracking-wider uppercase">
                <Briefcase size={18} className="text-[#08b9d4] dark:text-[#00bdf1]" />
                <span>My Experience</span>
              </div>

              <div className="divide-y divide-[#e3e3e3] dark:divide-[#303030]">
                {portfolioData.experience.map((job, idx) => (
                  <div
                    key={idx}
                    className="py-5 sm:py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group"
                  >
                    <div>
                      <h4 className="font-display font-bold text-2xl uppercase tracking-tight group-hover:text-[#08b9d4] dark:group-hover:text-[#00bdf1] transition-colors">
                        {job.role}
                      </h4>
                      <p
                        className={`text-sm mt-0.5 font-medium ${
                          darkMode ? 'text-[#a1a1a1]' : 'text-[#616161]'
                        }`}
                      >
                        Company &middot;{' '}
                        {job.companyUrl ? (
                          <a
                            href={job.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-black dark:text-white hover:text-[#08b9d4] dark:hover:text-[#00bdf1] hover:underline transition-colors"
                          >
                            {job.company}
                          </a>
                        ) : (
                          <span className="text-black dark:text-white font-semibold">
                            {job.company}
                          </span>
                        )}
                      </p>
                    </div>

                    <div
                      className={`text-xs sm:text-sm font-semibold tracking-wide px-3 py-1.5 rounded-full border self-start sm:self-auto ${
                        darkMode
                          ? 'bg-[#242424] border-[#3a3a3a] text-[#cccccc]'
                          : 'bg-white border-[#e0e0e0] text-[#575757]'
                      }`}
                    >
                      {job.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
