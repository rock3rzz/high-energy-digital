import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { SpotlightCard } from './ui/SpotlightCard';
import { Zap, Target, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 relative overflow-hidden bg-transparent">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-brand-neon/50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading Section */}
        <Reveal width="100%">
          <div className="text-center mb-24 max-w-5xl mx-auto">
             {/* Technical Label - Anti-Pill */}
             <div className="inline-flex items-center gap-3 text-brand-neon font-mono text-xs uppercase tracking-[0.2em] mb-10">
                <span className="text-white/50">[</span>
                <span className="animate-pulse">ABOUT US</span>
                <span className="text-white/50">]</span>
             </div>
             
             <h2 className="text-4xl md:text-7xl font-bold leading-[0.95] text-white tracking-tighter drop-shadow-lg">
                High Energy Digital blends <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-brand-cyan drop-shadow-[0_0_20px_rgba(222,105,203,0.2)]">
                  innovative strategies
                </span>
                <br /> with enthusiasm.
             </h2>
          </div>
        </Reveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Identity */}
          <Reveal delay={100} width="100%">
            <SpotlightCard className="h-full p-10 !rounded-none border-white/10 bg-black/50" spotlightColor="rgba(222, 105, 203, 0.2)">
              <div className="flex flex-col gap-8 h-full">
                <div className="w-14 h-14 bg-brand-neon/10 flex items-center justify-center border border-brand-neon/30 shadow-[0_0_20px_rgba(222,105,203,0.1)]">
                  <Target className="text-brand-neon" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest font-mono">// Who We Are</h3>
                  <p className="text-gray-400 font-light leading-relaxed text-lg border-l-2 border-white/10 pl-4">
                    We help brands stand out, resonate, and engage. We specialize in elevating online presence through tailored digital marketing solutions.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Card 2: Method */}
          <Reveal delay={200} width="100%">
            <SpotlightCard className="h-full p-10 !rounded-none border-white/10 bg-black/50" spotlightColor="rgba(0, 240, 255, 0.2)">
              <div className="flex flex-col gap-8 h-full">
                <div className="w-14 h-14 bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/30 shadow-[0_0_20px_rgba(0,240,255,0.1)]">
                  <Cpu className="text-brand-cyan" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest font-mono">// How We Work</h3>
                  <p className="text-gray-400 font-light leading-relaxed text-lg border-l-2 border-white/10 pl-4">
                    We combine creativity, data-driven insights, and a results-oriented approach to capture attention and drive tangible growth.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Card 3: Vision */}
          <Reveal delay={300} width="100%">
            <SpotlightCard className="h-full p-10 !rounded-none border-white/10 bg-black/50" spotlightColor="rgba(255, 255, 255, 0.15)">
              <div className="flex flex-col gap-8 h-full">
                <div className="w-14 h-14 bg-white/10 flex items-center justify-center border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <Zap className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest font-mono">// Our Vision</h3>
                  <p className="text-gray-400 font-light leading-relaxed text-lg border-l-2 border-white/10 pl-4">
                    We aim for digital excellence where every click becomes a meaningful connection. The future with HED is electrifying.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

        </div>
        
        {/* Bottom Decorative Line */}
        <div className="mt-32 flex justify-center">
            <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-brand-neon/50 to-transparent shadow-[0_0_15px_#DE69CB]"></div>
        </div>

      </div>
    </section>
  );
};

export default About;