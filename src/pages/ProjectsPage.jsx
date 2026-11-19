import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsPage({ darkMode, onNavigate }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(portfolioData.projects.map((p) => p.category))];

  const filteredProjects =
    filter === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (p) => p.category.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block font-display text-sm tracking-widest text-[#08b9d4] dark:text-[#00bdf1] uppercase mb-2">
            PROJECTS
          </div>
          <h1 className="font-display font-extrabold text-6xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-[0.9]">
            Take a Look at My Portfolio
          </h1>
          <p
            className={`mt-4 max-w-2xl text-base sm:text-lg ${
              darkMode ? 'text-[#cccccc]' : 'text-[#575757]'
            }`}
          >
            A curated showcase of recent client work, web designs, design systems, and digital product experiences.
          </p>
        </div>

        {/* Benefits Ticker */}
        <div className="py-4 mb-12 overflow-hidden border-y border-[#e3e3e3] dark:border-[#303030]">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...portfolioData.tickers.projects, ...portfolioData.tickers.projects].map((item, idx) => (
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

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 border ${
                filter === c
                  ? darkMode
                    ? 'bg-white text-black border-white shadow-sm'
                    : 'bg-black text-white border-black shadow-sm'
                  : darkMode
                  ? 'bg-[#1c1c1c] text-[#cccccc] border-[#303030] hover:bg-[#242424]'
                  : 'bg-[#f2f2f2] text-[#575757] border-[#e3e3e3] hover:bg-[#e8e8e8]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onNavigate(`/projects/${project.slug}`)}
              className={`group cursor-pointer rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col justify-between ${
                darkMode
                  ? 'bg-[#1c1c1c] border-[#303030] hover:border-[#555]'
                  : 'bg-[#f2f2f2] border-[#e3e3e3] hover:border-neutral-400'
              }`}
            >
              {/* Image Container with zoom effect */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 m-3 rounded-2xl">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Meta & Arrow */}
              <div className="px-6 py-5 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight group-hover:text-[#08b9d4] dark:group-hover:text-[#00bdf1] transition-colors">
                    {project.title}
                  </h3>
                  <p
                    className={`text-xs mt-1 line-clamp-1 ${
                      darkMode ? 'text-[#a1a1a1]' : 'text-[#616161]'
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex gap-4 mt-2 text-[11px] text-[#575757] dark:text-[#888]">
                    <span>Client: {project.client}</span>
                    <span>&bull;</span>
                    <span>{project.duration}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110 flex-shrink-0 ${
                    darkMode
                      ? 'bg-[#242424] border-[#3a3a3a] text-white group-hover:bg-white group-hover:text-black'
                      : 'bg-[#e5e5e5] border-[#d4d4d4] text-black group-hover:bg-black group-hover:text-white'
                  }`}
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
