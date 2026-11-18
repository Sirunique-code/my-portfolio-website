import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage({ darkMode, onNavigate }) {
  return (
    <div className="pt-40 pb-32 flex flex-col items-center justify-center text-center px-4 min-h-[70vh]">
      <div className="max-w-md">
        <span className="font-display text-lg tracking-widest text-[#08b9d4] dark:text-[#00bdf1] uppercase block mb-2">
          where am I
        </span>
        <h1 className="font-display font-extrabold text-8xl sm:text-9xl tracking-tight leading-none mb-4">
          404
        </h1>
        <p
          className={`text-base sm:text-lg mb-8 ${
            darkMode ? 'text-[#a1a1a1]' : 'text-[#616161]'
          }`}
        >
          Oops, this page could not be found
        </p>

        <button
          onClick={() => onNavigate('/')}
          className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-display text-lg uppercase tracking-wider transition-all duration-300 border ${
            darkMode
              ? 'bg-white text-black border-white hover:bg-neutral-200 shadow-xl shadow-white/10'
              : 'bg-black text-white border-black hover:bg-neutral-800 shadow-xl shadow-black/10'
          }`}
        >
          <ArrowLeft size={16} />
          <span>Go Home</span>
        </button>
      </div>
    </div>
  );
}
