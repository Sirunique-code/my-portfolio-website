import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function TestimonialSection({ darkMode }) {
  return (
    <section className="py-20 md:py-32 border-y transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block font-display text-sm tracking-widest text-[#08b9d4] dark:text-[#00bdf1] uppercase mb-2">
            TESTIMONIAL
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-[0.95]">
            What My Clients Said
          </h2>
        </div>

        {/* Big Testimonial Card */}
        <div
          className={`max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl border transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden shadow-2xl group ${darkMode
              ? 'bg-[#1c1c1c] border-[#303030] hover:border-[#555]'
              : 'bg-[#f2f2f2] border-[#e3e3e3] hover:border-neutral-400'
            }`}
        >
          {/* Subtle Decorative Watermark */}
          <Quote
            size={160}
            className="absolute -top-10 -left-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none text-current"
          />

          {/* Verified Badge & Rating */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#44c92c]/10 text-[#44c92c] border border-[#44c92c]/20">
              <CheckCircle2 size={12} />
              <span>Verified Client Review</span>
            </div>

            {/* 5 Stars */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </div>

          <blockquote className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-snug uppercase mb-8 relative z-10">
            {portfolioData.testimonial.quote}
          </blockquote>

          {/* Author info */}
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-neutral-800 shadow-md">
              <img
                src={portfolioData.testimonial.avatar}
                alt={portfolioData.testimonial.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <div className="font-bold text-sm sm:text-base">
                {portfolioData.testimonial.author}
              </div>
              <div
                className={`text-xs ${darkMode ? 'text-[#a1a1a1]' : 'text-[#616161]'
                  }`}
              >
                {portfolioData.testimonial.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
