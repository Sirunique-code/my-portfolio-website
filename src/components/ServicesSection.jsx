import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Check } from 'lucide-react';

export default function ServicesSection({ darkMode, onNavigate }) {
  return (
    <section id="services" className="py-20 md:py-32 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-block font-display text-sm tracking-widest text-[#08b9d4] dark:text-[#00bdf1] uppercase mb-2">
              SERVICES
            </div>
            <h2 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.95]">
              What I Offer
            </h2>
          </div>

          <button
            onClick={() => onNavigate('/services')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 border self-start md:self-auto ${
              darkMode
                ? 'bg-[#1c1c1c] text-white border-[#303030] hover:bg-[#242424]'
                : 'bg-[#f2f2f2] text-black border-[#e3e3e3] hover:bg-[#e8e8e8]'
            }`}
          >
            <span>Explore All Services</span>
          </button>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {portfolioData.services.map((service) => (
            <div
              key={service.number}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:scale-101 flex flex-col justify-between group ${
                darkMode
                  ? 'bg-[#1c1c1c] border-[#303030] hover:border-[#555]'
                  : 'bg-[#f2f2f2] border-[#e3e3e3] hover:border-neutral-400'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-extrabold text-2xl text-[#08b9d4] dark:text-[#00bdf1]">
                    {service.number}
                  </span>
                  <span
                    className={`text-xs uppercase font-semibold tracking-wider px-3 py-1 rounded-full border ${
                      darkMode
                        ? 'bg-[#242424] border-[#3a3a3a] text-neutral-300'
                        : 'bg-white border-[#e0e0e0] text-neutral-600'
                    }`}
                  >
                    {service.tagline}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight uppercase mb-3 group-hover:text-[#08b9d4] dark:group-hover:text-[#00bdf1] transition-colors">
                  {service.title}
                </h3>

                <p
                  className={`text-sm sm:text-base leading-relaxed mb-6 ${
                    darkMode ? 'text-[#a1a1a1]' : 'text-[#616161]'
                  }`}
                >
                  {service.description}
                </p>
              </div>

              {/* Deliverables tags */}
              <div className="pt-6 border-t border-[#e3e3e3] dark:border-[#303030]">
                <div className="text-xs font-semibold tracking-wider uppercase mb-3 text-[#575757] dark:text-[#a1a1a1]">
                  Deliverables
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.deliverables.map((d) => (
                    <span
                      key={d}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 hover:scale-102 ${
                        darkMode
                          ? 'bg-[#242424] border-[#3a3a3a] text-neutral-200 hover:border-[#00bdf1]/50'
                          : 'bg-white border-[#e0e0e0] text-neutral-800 hover:border-[#08b9d4]/50'
                      }`}
                    >
                      <Check size={12} className="text-[#08b9d4] dark:text-[#00bdf1]" />
                      <span>{d}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
