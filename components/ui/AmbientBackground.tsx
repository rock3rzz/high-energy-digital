import React from 'react';

const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base dark layer */}
      <div className="absolute inset-0 bg-[#030303]" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern z-[1] opacity-40" />

      {/* Ambient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-purple/20 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-aurora" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-brand-cyan/20 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-aurora" style={{ animationDelay: '-5s' }} />
      <div className="absolute top-[20%] right-[20%] w-[30vw] h-[30vw] bg-brand-neon/15 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob" />
    </div>
  );
};

export default AmbientBackground;