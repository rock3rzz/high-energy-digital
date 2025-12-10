import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Activity, Globe, Wifi } from 'lucide-react';
import StarBorder from './ui/StarBorder';
import { sfx } from '../utils/audio';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
       {/* Sharp Square Logo - UPSCALED */}
       <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-brand-neon border-2 border-brand-neon shadow-[0_0_20px_rgba(222,105,203,0.4)] transition-transform duration-300 hover:scale-105">
          <span className="font-black text-black text-xl tracking-tighter">HD</span>
       </div>
       <span className="font-bold text-2xl md:text-3xl tracking-tight text-white hidden md:block">
          HED<span className="text-brand-neon">.</span>
       </span>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLElement>, id: string) => {
    sfx.playClick();
    e.preventDefault();
    setIsOpen(false);
    if (id === 'top') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
       return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Adjusted for taller header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* GLOBAL HEADER CONTAINER */}
      <header className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-300">
        
        {/* TOP SYSTEM STATUS BAR - Visible on Desktop */}
        <div className={`hidden md:flex items-center justify-between px-8 py-1.5 border-b border-white/10 transition-all duration-300 ${scrolled ? 'bg-[#030303] text-gray-400' : 'bg-[#030303]/50 backdrop-blur-md text-gray-300'}`}>
            <div className="flex items-center gap-6 text-[10px] font-mono tracking-[0.2em] uppercase">
                <div className="flex items-center gap-2">
                    <Globe size={10} className="text-brand-cyan" />
                    <span>Global Agency</span>
                </div>
                <div className="w-px h-3 bg-white/20"></div>
                <div className="flex items-center gap-2">
                    <Wifi size={10} className="text-brand-neon" />
                    <span>Fast Response</span>
                </div>
            </div>

            <div className="flex items-center gap-6 text-[10px] font-mono tracking-[0.2em] uppercase">
               <div className="flex items-center gap-2 text-brand-neon">
                  <Activity size={10} className="animate-pulse" />
                  <span>Accepting New Clients</span>
               </div>
               <div className="w-px h-3 bg-white/20"></div>
               <div className="text-gray-500">
                  Availability: <span className="text-white animate-pulse">Limited</span>
               </div>
            </div>
        </div>

        {/* MAIN COMMAND DECK */}
        <div 
          className={`
            border-b border-white/10
            transition-all duration-300
            ${scrolled ? 'bg-[#030303]/95 backdrop-blur-xl py-3 shadow-2xl' : 'bg-transparent py-4 md:py-5'}
          `}
        >
          <div className="max-w-[98%] mx-auto px-4 md:px-8 flex items-center justify-between relative">
            
            {/* LEFT: LOGO */}
            <div 
                className="cursor-pointer flex items-center shrink-0 z-20" 
                onClick={(e) => handleNavClick(e as any, 'top')}
                onMouseEnter={() => sfx.playHover()}
            >
              <Logo />
            </div>

            {/* CENTER: TECHNICAL NAVIGATION - Absolute Centered */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              {['Services', 'Process', 'About'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  onMouseEnter={() => sfx.playHover()}
                  className="group relative px-2 py-1 text-xs lg:text-sm font-bold text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-[0.15em] font-mono"
                >
                  <span className="absolute -left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-brand-neon text-lg font-black">[</span>
                  {item}
                  <span className="absolute -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-brand-neon text-lg font-black">]</span>
                  
                  {/* Underline Glitch */}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-neon scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
            </nav>

            {/* RIGHT: ACTIONS */}
            <div className="flex items-center gap-6 shrink-0 z-20">
              
              {/* Desktop CTA */}
              <div className="hidden md:block">
                <StarBorder
                  as="a"
                  href="#contact"
                  onClick={(e: React.MouseEvent) => handleNavClick(e, 'contact')}
                  onMouseEnter={() => sfx.playHover()}
                  color="#DE69CB"
                  speed="4s"
                  className="group"
                >
                  <span className="px-5 py-2.5 lg:px-6 lg:py-3 font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] text-white group-hover:text-brand-neon transition-colors flex items-center gap-3">
                    Start Project <ArrowUpRight size={16} />
                  </span>
                </StarBorder>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                className="md:hidden w-12 h-12 flex items-center justify-center border border-white/20 bg-black text-white active:scale-95 transition-all hover:border-brand-neon"
                onClick={() => {
                    sfx.playClick();
                    setIsOpen(!isOpen);
                }}
                onMouseEnter={() => sfx.playHover()}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      <div 
        className={`
          fixed inset-0 z-[9998] bg-[#030303] flex flex-col items-center justify-center gap-10
          transition-all duration-300
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
          {/* Background Texture */}
          <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none"></div>

          {['Services', 'Process', 'About', 'Contact'].map((item, i) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              onMouseEnter={() => sfx.playHover()}
              className="relative text-5xl md:text-7xl font-black text-white uppercase tracking-tighter hover:text-brand-neon transition-all"
            >
              <span className="text-gray-800 mr-4 font-mono text-2xl align-top mt-2 inline-block">0{i+1}</span>
              {item}
            </a>
          ))}
          
          <div className="mt-12 w-full max-w-xs px-6">
             <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              onMouseEnter={() => sfx.playHover()}
              className="flex items-center justify-center w-full py-5 bg-brand-neon text-black font-black uppercase tracking-widest text-sm border-2 border-brand-neon hover:bg-black hover:text-brand-neon transition-all duration-300"
             >
               Start Project
             </a>
          </div>
      </div>
    </>
  );
};

export default Navbar;