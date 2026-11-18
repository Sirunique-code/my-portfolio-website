import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Check, ArrowUpRight } from 'lucide-react';
import FaqSection from '../components/FaqSection';

export default function ServicesPage({ darkMode, onNavigate }) {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block font-display text-sm tracking-widest text-[#08b9d4] dark:text-[#00bdf1] uppercase mb-2">
            SERVICES
          </div>
          <h1 className="font-display font-extrabold text-6xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-[0.9]">
            What I Bring to the Table
          </h1>
          <p
            className={`mt-4 max-w-2xl text-base sm:text-lg ${
              darkMode ? 'text-[#cccccc]' : 'text-[#575757]'
            }`}
          >
            Tailored creative and design solutions crafted to help your business stand out, engage audiences, and scale effortlessly.
          </p>
        </div>

        {/* Benefits Ticker */}
        <div className="py-4 mb-16 overflow-hidden border-y border-[#e3e3e3] dark:border-[#303030]">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...portfolioData.tickers.services, ...portfolioData.tickers.services].map((item, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${
                  darkMode
                    ? 'bg-[#1c1c1c] border-[#303030] text-[#a1a1a1]'
                    : 'bg-[#f2f2f2] border-[#e3e3e3] text-[#575757]'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#08b9d4] dark:bg-[#00bdf1]"></span>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Services */}
        <div className="flex flex-col gap-10 mb-20">
          {portfolioData.services.map((service) => (
            <div
              key={service.number}
              className={`p-8 sm:p-12 rounded-3xl border transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-8 ${
                darkMode
                  ? 'bg-[#1c1c1c] border-[#303030]'
                  : 'bg-[#f2f2f2] border-[#e3e3e3]'
              }`}
            >
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display font-extrabold text-3xl text-[#08b9d4] dark:text-[#00bdf1]">
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

                <h2 className="font-display font-extrabold text-4xl sm:text-5xl uppercase tracking-tight mb-4">
                  {service.title}
                </h2>

                <p
                  className={`text-base sm:text-lg leading-relaxed ${
                    darkMode ? 'text-[#a1a1a1]' : 'text-[#616161]'
                  }`}
                >
                  {service.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="lg:w-96 flex flex-col gap-3">
                <div className="text-xs font-semibold tracking-wider uppercase mb-1 text-[#575757] dark:text-[#a1a1a1]">
                  Included Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                  {service.deliverables.map((d) => (
                    <div
                      key={d}
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-medium ${
                        darkMode
                          ? 'bg-[#242424] border-[#3a3a3a] text-white'
                          : 'bg-white border-[#e0e0e0] text-black shadow-sm'
                      }`}
                    >
                      <Check size={14} className="text-[#08b9d4] dark:text-[#00bdf1] flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <FaqSection darkMode={darkMode} />
      </div>
    </div>
  );
}
