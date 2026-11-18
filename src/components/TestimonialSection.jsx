import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Star } from 'lucide-react';

export default function TestimonialSection({ darkMode }) {
  return (
    <section className="py-20 md:py-32 border-y transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
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
          className={`max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl border transition-all duration-300 text-center flex flex-col items-center ${
            darkMode
              ? 'bg-[#1c1c1c] border-[#303030]'
              : 'bg-[#f2f2f2] border-[#e3e3e3]'
          }`}
        >
          {/* 5 Stars */}
          <div className="flex items-center gap-1 mb-6 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>

          <blockquote className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-snug uppercase mb-8">
            {portfolioData.testimonial.quote}
          </blockquote>

          {/* Author info */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-neutral-800">
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
                className={`text-xs ${
                  darkMode ? 'text-[#a1a1a1]' : 'text-[#616161]'
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
