import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div className={`
      relative backdrop-blur-md bg-white/5 border border-white/10 
      ${hoverEffect ? 'hover:border-neon-pink/50 hover:bg-white/10 transition-all duration-300 group' : ''}
      ${className}
    `}>
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20 group-hover:border-neon-pink/50 transition-colors" />
      <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/20 group-hover:border-neon-pink/50 transition-colors" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/20 group-hover:border-neon-pink/50 transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 group-hover:border-neon-pink/50 transition-colors" />
      
      {children}
    </div>
  );
};