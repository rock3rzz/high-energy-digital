import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { sfx } from '../../utils/audio';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Trigger earlier (500px) so it's available sooner
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    sfx.playClick();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-10 right-10 z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        onMouseEnter={() => sfx.playHover()}
        className="group relative w-14 h-14 flex items-center justify-center bg-black border border-brand-neon/40 hover:border-brand-neon transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.8)]"
        aria-label="Return to top"
      >
        {/* Permanent Glow Background */}
        <div className="absolute inset-0 bg-brand-neon/5 group-hover:bg-brand-neon/10 transition-colors duration-300"></div>
        
        {/* Icon - High Contrast White */}
        <ArrowUp 
            size={20} 
            className="text-white group-hover:text-brand-neon transition-all duration-300 group-hover:-translate-y-1" 
            strokeWidth={2}
        />
        
        {/* Tech Corners - Always Visible */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-brand-neon opacity-100"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-brand-neon opacity-100"></div>
        
        {/* Hover Corners */}
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Kinetic Label - Slide In */}
        <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none">
            <div className="flex items-center gap-3 transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <span className="h-px w-8 bg-brand-neon"></span>
                <span className="font-mono text-xs text-brand-neon font-bold tracking-widest whitespace-nowrap bg-black px-2 py-1 border border-brand-neon/30">
                    RTB [TOP]
                </span>
            </div>
        </div>
      </button>
    </div>
  );
};