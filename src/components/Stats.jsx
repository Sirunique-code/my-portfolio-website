import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Stats({ darkMode }) {
  return (
    <section className="py-8 sm:py-12 border-y transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {portfolioData.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:scale-102 flex flex-col justify-between ${
                darkMode
                  ? 'bg-[#1c1c1c] border-[#303030] hover:border-[#444]'
                  : 'bg-[#f2f2f2] border-[#e3e3e3] hover:border-neutral-300'
              }`}
            >
              <div className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#08b9d4] dark:text-[#00bdf1] mb-2">
                {stat.value}
              </div>
              <div
                className={`text-xs sm:text-sm font-medium tracking-wide uppercase ${
                  darkMode ? 'text-[#a1a1a1]' : 'text-[#616161]'
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
