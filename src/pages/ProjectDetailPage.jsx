import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';

export default function ProjectDetailPage({ slug, darkMode, onNavigate }) {
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-40 pb-32 text-center max-w-xl mx-auto px-4">
        <h1 className="font-display font-extrabold text-6xl uppercase mb-4">Project Not Found</h1>
        <p className="text-sm text-neutral-400 mb-8">
          The project you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={() => onNavigate('/projects')}
          className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  const otherProjects = portfolioData.projects.filter((p) => p.slug !== slug);

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('/projects')}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all mb-8 border ${
            darkMode
              ? 'bg-[#1c1c1c] text-neutral-300 border-[#303030] hover:text-white hover:bg-[#242424]'
              : 'bg-[#f2f2f2] text-neutral-700 border-[#e3e3e3] hover:text-black hover:bg-[#e8e8e8]'
          }`}
        >
          <ArrowLeft size={14} />
          <span>Back to Projects</span>
        </button>

        {/* Project Header */}
        <div className="mb-12">
          <div className="inline-block font-display text-sm tracking-widest text-[#08b9d4] dark:text-[#00bdf1] uppercase mb-2">
            {project.category}
          </div>
          <h1 className="font-display font-extrabold text-6xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-[0.9] mb-6">
            {project.title}
          </h1>
          <p
            className={`max-w-3xl text-lg sm:text-xl leading-relaxed ${
              darkMode ? 'text-[#cccccc]' : 'text-[#575757]'
            }`}
          >
            {project.description}
          </p>
        </div>

        {/* Project Meta Bar & Live Demo CTA */}
        <div
          className={`p-6 sm:p-8 rounded-3xl border mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 ${
            darkMode ? 'bg-[#1c1c1c] border-[#303030]' : 'bg-[#f2f2f2] border-[#e3e3e3]'
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 flex-1">
            <div>
              <div className="text-[11px] font-semibold tracking-wider uppercase text-[#575757] dark:text-[#888] mb-1">
                Services
              </div>
              <div className="font-bold text-sm sm:text-base">{project.category}</div>
            </div>

            <div>
              <div className="text-[11px] font-semibold tracking-wider uppercase text-[#575757] dark:text-[#888] mb-1">
                Client
              </div>
              <div className="font-bold text-sm sm:text-base">{project.client}</div>
            </div>

            <div>
              <div className="text-[11px] font-semibold tracking-wider uppercase text-[#575757] dark:text-[#888] mb-1">
                Duration
              </div>
              <div className="font-bold text-sm sm:text-base">{project.duration}</div>
            </div>

            <div>
              <div className="text-[11px] font-semibold tracking-wider uppercase text-[#575757] dark:text-[#888] mb-1">
                Date
              </div>
              <div className="font-bold text-sm sm:text-base">{project.year}</div>
            </div>
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 border self-start md:self-auto ${
              darkMode
                ? 'bg-[#00bdf1] text-black border-[#00bdf1] hover:bg-[#38d4ff] shadow-lg shadow-[#00bdf1]/20'
                : 'bg-[#08b9d4] text-white border-[#08b9d4] hover:bg-[#07a3bb] shadow-lg shadow-[#08b9d4]/20'
            }`}
          >
            <span>Live Demo</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Visual Showcase Gallery */}
        <div className="flex flex-col gap-8 mb-20">
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
            <img
              src={project.coverImage}
              alt={`${project.title} Preview 1`}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
            <img
              src={project.showcaseImage}
              alt={`${project.title} Preview 2`}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* More Projects Section */}
        <div className="pt-16 border-t border-[#e3e3e3] dark:border-[#303030]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#08b9d4] dark:text-[#00bdf1] uppercase block mb-1">
                MORE PROJECT
              </span>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-tight">
                View All Projects
              </h3>
            </div>
            <button
              onClick={() => {
                onNavigate('/projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`p-3 rounded-full border transition-all ${
                darkMode
                  ? 'bg-[#1c1c1c] border-[#303030] text-white hover:bg-[#242424]'
                  : 'bg-[#f2f2f2] border-[#e3e3e3] text-black hover:bg-[#e8e8e8]'
              }`}
            >
              <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.slice(0, 2).map((op) => (
              <div
                key={op.id}
                onClick={() => {
                  onNavigate(`/projects/${op.slug}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`group cursor-pointer p-4 rounded-3xl border transition-all duration-300 hover:shadow-xl ${
                  darkMode
                    ? 'bg-[#1c1c1c] border-[#303030] hover:border-[#555]'
                    : 'bg-[#f2f2f2] border-[#e3e3e3] hover:border-neutral-400'
                }`}
              >
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 mb-4">
                  <img
                    src={op.coverImage}
                    alt={op.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between px-2 pb-2">
                  <div>
                    <h4 className="font-display font-bold text-2xl uppercase tracking-tight group-hover:text-[#08b9d4] dark:group-hover:text-[#00bdf1] transition-colors">
                      {op.title}
                    </h4>
                    <span className="text-xs text-[#575757] dark:text-[#888]">
                      {op.category}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-transparent group-hover:border-white/20 transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
