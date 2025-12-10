import React, { useState, useEffect, useRef, useMemo } from 'react';
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
import { ScrollToTop } from './components/ui/ScrollToTop';

// Optimized MouseSpotlight - Reduced radius and complexity
const MouseSpotlight = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        if (divRef.current) {
          // Smaller radius, simpler gradient for performance
          divRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(222, 105, 203, 0.04), transparent 40%)`;
        }
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frameId);
    }
  }, []);

  return (
    <div 
      ref={divRef}
      className="fixed inset-0 z-[1] pointer-events-none mix-blend-screen"
      style={{ 
        background: `radial-gradient(600px circle at 50% 50%, rgba(222, 105, 203, 0.04), transparent 40%)` 
      }}
    />
  );
};

const App: React.FC = () => {
  // Memoize colors to prevent reference changes
  const themeColors = useMemo(() => ['#000000', '#DE69CB', '#00f0ff'], []);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#030303] text-white overflow-x-hidden font-sans selection:bg-brand-neon selection:text-white relative">
        
        {/* LAYER 1: Liquid Shader - HEAVILY OPTIMIZED */}
        <div className="fixed inset-0 z-0">
          <LiquidEther 
              className="w-full h-full"
              colors={themeColors}
              mouseForce={15}      // Reduced force
              cursorSize={200}     // Smaller cursor influence
              viscous={20} 
              dt={0.015} 
              autoSpeed={0.1}      // Slower auto movement
              resolution={0.2}     // CRITICAL: 0.2 resolution = 1/25th the pixel processing of 1.0
              iterationsViscous={10} // Reduced from 32
              iterationsPoisson={10} // Reduced from 32
          />
        </div>

        {/* Removed: Global Backdrop Blur (GPU Killer) */}
        {/* Removed: Noise SVG (CPU Killer) */}
        {/* Removed: GradualBlurs (Composite Killer) */}

        {/* LAYER 3: Mouse Spotlight (Lightweight) */}
        <MouseSpotlight />

        <Cursor />

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