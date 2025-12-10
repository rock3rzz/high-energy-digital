import React, { useEffect, useRef } from 'react';
import { NeonButton } from './ui/NeonButton';
import { Reveal } from './ui/Reveal';
import { HyperText } from './ui/HyperText';

const Hero: React.FC = () => {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Optimize: Only calculate on animation frame
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;

        if (layer1Ref.current) {
            // Layer 1 moves opposite to mouse (Background feel)
            layer1Ref.current.style.transform = `translate(${x * -20}px, ${y * -10}px)`;
        }
        if (layer2Ref.current) {
            // Layer 2 moves with mouse (Foreground feel)
            layer2Ref.current.style.transform = `translate(${x * 20}px, ${y * 10}px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(frameId);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/5 bg-transparent pt-40 md:pt-20 perspective-1000">
      
      <div className="max-w-[95vw] md:max-w-[90vw] mx-auto px-4 md:px-6 relative z-10 w-full">
        
        <div className="flex flex-col items-center justify-center text-center space-y-12">
           
           {/* Main Text Container */}
           <div className="relative w-full">
             
             {/* NOISE SECTION - Parallax Layer 1 */}
             <div 
                ref={layer1Ref}
                className="relative group mb-4 transition-transform duration-100 ease-out will-change-transform"
             >
                <Reveal width="100%">
                  <div className="flex items-center justify-center gap-4 mb-4">
                     <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-500"></div>
                     <h2 className="text-xl md:text-3xl font-bold text-gray-400 tracking-[0.2em] uppercase drop-shadow-md font-mono">
                        We handle the
                     </h2>
                     <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-500"></div>
                  </div>
                </Reveal>
                
                <Reveal width="100%" delay={100}>
                   <div className="relative mix-blend-normal flex justify-center">
                      {/* HyperText with Purple Glow */}
                      <div className="relative text-[15vw] md:text-[160px] leading-[0.8] font-black tracking-tighter text-white transition-all duration-500 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                        <HyperText 
                          text="NOISE" 
                          className="text-white dark:text-white"
                          duration={1000}
                        />
                      </div>
                   </div>
                </Reveal>
             </div>

             {/* BUSINESS SECTION - Parallax Layer 2 */}
             <div 
                ref={layer2Ref}
                className="relative mt-4 md:mt-8 transition-transform duration-100 ease-out will-change-transform"
             >
                <Reveal width="100%" delay={300}>
                   <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-neon/50"></div>
                     <h2 className="text-xl md:text-3xl font-bold text-white tracking-[0.2em] uppercase drop-shadow-md font-mono">
                        You handle the
                     </h2>
                     <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-neon/50"></div>
                   </div>
                </Reveal>

                <Reveal width="100%" delay={400}>
                   <h1 className="relative z-10 text-[15vw] md:text-[160px] leading-[0.8] font-black tracking-tighter text-white mix-blend-normal drop-shadow-[0_0_30px_rgba(222,105,203,0.3)]">
                      BUSINESS<span className="text-brand-neon">.</span>
                      {/* Subtle glow behind title */}
                      <div className="absolute inset-0 bg-brand-neon/20 blur-[100px] md:blur-[150px] -z-10 rounded-full opacity-50 animate-pulse-slow"></div>
                   </h1>
                </Reveal>
             </div>
           </div>

           {/* Clean Button Section - Static (Anchor) */}
           <Reveal delay={600}>
             <div className="mt-16 w-full max-w-4xl flex flex-col items-center gap-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left relative z-10">
                   
                   <div className="max-w-lg text-center">
                      <div className="flex items-center justify-center gap-3 mb-6">
                         <div className="w-2 h-2 bg-brand-neon rounded-full animate-pulse shadow-[0_0_10px_#DE69CB]"></div>
                         <span className="font-mono text-[10px] text-brand-neon tracking-[0.2em] uppercase">Agency Status: Active</span>
                      </div>
                      <p className="text-white font-medium text-xl md:text-2xl mb-10 leading-relaxed">
                         You close the deals. <span className="text-brand-cyan text-glow">We drive the demand.</span>
                      </p>
                      
                      <NeonButton onClick={scrollToContact} className="w-full md:w-auto mx-auto hover:scale-105 transition-transform duration-300">
                         START PROJECT
                      </NeonButton>
                   </div>

                </div>
             </div>
           </Reveal>

        </div>

      </div>

    </section>
  );
};

export default Hero;