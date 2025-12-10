import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const mouseDown = () => setClicked(true);
    const mouseUp = () => setClicked(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
    };
  }, []);

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body { cursor: none; }
        }
      `}</style>
      
      {/* Crosshair Lines */}
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-[1px] bg-white/50" />
        {/* Vertical Line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-10 bg-white/50" />
        
        {/* Center Box */}
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-brand-neon transition-all duration-100 ${clicked ? 'w-2 h-2 bg-brand-neon' : 'w-4 h-4 bg-transparent'}`} 
        />
      </div>
    </>
  );
};

export default Cursor;