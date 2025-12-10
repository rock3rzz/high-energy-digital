import React from 'react';
import { sfx } from '../../utils/audio';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const NeonButton: React.FC<NeonButtonProps> = ({ children, className = '', onMouseEnter, onClick, ...props }) => {
  return (
    <button 
      className={`
        relative group overflow-hidden px-10 py-5 
        bg-brand-neon/5 border border-brand-neon text-brand-neon
        font-mono text-sm md:text-base font-bold uppercase tracking-[0.2em]
        transition-all duration-500 ease-out
        shadow-[0_0_20px_rgba(222,105,203,0.2)]
        hover:shadow-[0_0_60px_rgba(222,105,203,0.6),inset_0_0_20px_rgba(222,105,203,0.4)]
        active:scale-[0.98]
        ${className}
      `}
      onMouseEnter={(e) => {
        sfx.playHover();
        if (onMouseEnter) onMouseEnter(e);
      }}
      onClick={(e) => {
        sfx.playClick();
        if (onClick) onClick(e);
      }}
      {...props}
    >
      {/* Background Fill Animation */}
      <div className="absolute inset-0 bg-brand-neon translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-0" />
      
      {/* Inner Border Pulse - Sharp */}
      <div className="absolute inset-0 border border-white/50 scale-[0.95] opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out z-10" />

      {/* Text Content */}
      <span className="relative z-20 flex items-center justify-center gap-2 transition-all duration-300 group-hover:text-white group-hover:tracking-[0.35em] group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
        {children}
      </span>
      
      {/* Corner Decorations - Technical Markers */}
      <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-white opacity-100 z-20" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-white opacity-100 z-20" />
      
      {/* Shine Overlay */}
      <div className="absolute inset-0 -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-30 pointer-events-none"></div>
    </button>
  );
};