import React from 'react';
import { sfx } from '../utils/audio';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#030303] border-t border-white/10 py-8 md:py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        
        {/* Left: Origin Identity */}
        <div className="text-white font-mono text-xs md:text-sm tracking-[0.15em] uppercase font-medium">
          &copy; {new Date().getFullYear()} High Energy Digital. Engineered in Australia.
        </div>

        {/* Right: System Status */}
        <div 
          className="group flex items-center gap-3 cursor-default"
          onMouseEnter={() => sfx.playHover()}
        >
          {/* Active Indicator */}
          <div className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
             <span className="relative inline-flex rounded-full h-full w-full bg-brand-neon"></span>
          </div>
          
          {/* Reactive Text */}
          <span className="text-white font-mono text-xs md:text-sm tracking-[0.15em] uppercase transition-all duration-300 group-hover:text-brand-neon group-hover:drop-shadow-[0_0_8px_rgba(222,105,203,0.8)]">
             All Systems Nominal
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;