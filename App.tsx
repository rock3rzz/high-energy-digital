import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiquidEther from './components/ui/LiquidEther';
import About from './components/About';
import Services from './components/Services';
import WhyItWorks from './components/WhyItWorks';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/ui/Cursor';
import { Noise } from './components/ui/Noise';
import GradualBlur from './components/ui/GradualBlur';
import { ScrollToTop } from './components/ui/ScrollToTop';

const MouseSpotlight = () => {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[1] pointer-events-none mix-blend-screen transition-opacity duration-300"
      style={{ 
        background: `radial-gradient(800px circle at ${pos.x}px ${pos.y}px, rgba(222, 105, 203, 0.06), transparent 50%)` 
      }}
    />
  );
};

const App: React.FC = () => {
  // Default and lock to the Dark/Pink theme
  const [themeColors, setThemeColors] = useState(['#000000', '#DE69CB', '#00f0ff']); 

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#030303] text-white overflow-x-hidden font-sans selection:bg-brand-neon selection:text-white relative">
        
        {/* LAYER 1: Liquid Shader */}
        <div className="fixed inset-0 z-0">
          <LiquidEther 
              className="w-full h-full"
              colors={themeColors}
              mouseForce={20} 
              cursorSize={250} 
              viscous={30} 
              dt={0.01} 
              autoSpeed={0.2} 
          />
        </div>

        {/* LAYER 2: Lighter Frost Glass */}
        <div className="fixed inset-0 z-[0] backdrop-blur-[40px] bg-black/30 pointer-events-none" />

        {/* LAYER 3: Mouse Spotlight */}
        <MouseSpotlight />

        <Noise />
        
        <Cursor />

        {/* LAYER 4: Cinematic Gradients */}
        <GradualBlur preset="page-header" zIndex={40} opacity={0.5} />
        <GradualBlur preset="page-footer" zIndex={40} opacity={0.7} />
        
        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <Services />
          <WhyItWorks />
          <About />
          <Testimonials />
          <FAQ />
          <Contact />
          <Footer />
        </main>
        
        <ScrollToTop />
      </div>
    </>
  );
};

export default App;