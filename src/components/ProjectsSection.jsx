import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsSection({ darkMode, onNavigate }) {
  return (
    <section id="projects" className="py-20 md:py-32 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-block font-display text-sm tracking-widest text-[#08b9d4] dark:text-[#00bdf1] uppercase mb-2">
              PROJECTS
            </div>
            <h2 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.95]">
              Take a Look at My Portfolio
            </h2>
          </div>

          <button
            onClick={() => onNavigate('/projects')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 border self-start md:self-auto ${
              darkMode
                ? 'bg-[#1c1c1c] text-white border-[#303030] hover:bg-[#242424] hover:border-[#555]'
                : 'bg-[#f2f2f2] text-black border-[#e3e3e3] hover:bg-[#e8e8e8]'
            }`}
          >
            <span>View all projects</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {portfolioData.projects.map((project) => (
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
              <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-neutral-900 m-3 rounded-2xl">
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
                </div>

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110 ${
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

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('/projects')}
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-display text-lg tracking-wider uppercase transition-all duration-300 border ${
              darkMode
                ? 'bg-white text-black border-white hover:bg-neutral-200 shadow-xl shadow-white/10'
                : 'bg-black text-white border-black hover:bg-neutral-800 shadow-xl shadow-black/10'
            }`}
          >
            <span>View all Projects</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
