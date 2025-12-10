import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center gap-3 ${className}`}>
      {/* Orbit Ring */}
      <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border border-brand-neon/30 rounded-full animate-[spin-slow_10s_linear_infinite]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-brand-neon rounded-full shadow-[0_0_10px_#DE69CB]"></div>
      </div>
      
      {/* Center Dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-brand-neon rounded-full shadow-[0_0_10px_#DE69CB] animate-pulse"></div>

      {/* Text */}
      <span className="font-black text-3xl md:text-4xl tracking-tighter text-white">
        HED<span className="text-brand-neon">.</span>
      </span>

      {/* Crosshair Decoration */}
      <div className="absolute -right-6 top-0">
         <div className="relative w-6 h-6">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-500"></div>
            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-500"></div>
            <div className="absolute inset-0 border border-brand-neon opacity-50"></div>
         </div>
      </div>
    </div>
  );
};

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
      setTimeout(onComplete, 500); // Wait for fade out
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030303] transition-opacity duration-500 pointer-events-none"
      style={{ opacity }}
    >
      <div className="relative flex flex-col items-center justify-center">
        
        {/* Logo with Glow */}
        <div className="relative">
          <div className="absolute inset-0 bg-brand-neon/20 blur-3xl rounded-full animate-pulse"></div>
          <Logo className="relative z-10 scale-125" />
        </div>

        {/* Loading Text */}
        <div className="mt-12 font-mono text-xs text-gray-500 tracking-[0.3em] uppercase animate-pulse">
          Initializing System...
        </div>
      </div>
    </div>
  );
};

export default Loader;