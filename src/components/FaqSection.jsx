import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection({ darkMode }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 transition-colors duration-300">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-block font-display text-sm tracking-widest text-[#08b9d4] dark:text-[#00bdf1] uppercase mb-2">
            FAQ
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.95]">
            Frequently Answered Questions
          </h2>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-4">
          {portfolioData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  darkMode
                    ? 'bg-[#1c1c1c] border-[#303030]'
                    : 'bg-[#f2f2f2] border-[#e3e3e3]'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 sm:py-6 flex items-center justify-between gap-4 text-left font-display font-bold text-xl sm:text-2xl uppercase tracking-tight transition-colors hover:text-[#08b9d4] dark:hover:text-[#00bdf1]"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-neutral-800 text-white border-neutral-700'
                        : 'bg-neutral-200 dark:bg-neutral-800 border-transparent'
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed border-t border-[#e3e3e3] dark:border-[#2a2a2a]">
                    <p className={darkMode ? 'text-[#a1a1a1]' : 'text-[#616161]'}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
