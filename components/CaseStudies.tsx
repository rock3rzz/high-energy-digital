import React from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowUpRight } from 'lucide-react';
import { sfx } from '../utils/audio';

const CaseStudies: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-[#030303] border-t border-white/20 relative">
       <div className="max-w-7xl mx-auto px-6">
          <Reveal>
             <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase mb-20">
                Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-cyan drop-shadow-[0_0_10px_rgba(222,105,203,0.3)]">Roster</span>
             </h2>
          </Reveal>

          <div className="space-y-6">
             
             {/* CLIENT 1 */}
             <Reveal width="100%">
                <div 
                    className="group relative border border-white/20 bg-[#050505] hover:border-brand-neon/80 transition-all duration-500 overflow-hidden rounded-2xl"
                    onMouseEnter={() => sfx.playHover()}
                >
                   <div className="absolute inset-0 bg-gradient-to-r from-brand-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   
                   <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
                      <div className="flex-1">
                         <div className="flex items-center gap-3 mb-4">
                            <span className="font-mono text-xs text-brand-neon border border-brand-neon/40 px-2 py-1 rounded bg-brand-neon/10">CASE_01</span>
                            <span className="font-mono text-xs text-gray-400">SOCIAL_GROWTH</span>
                         </div>
                         <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3 group-hover:text-brand-neon transition-colors duration-300">Beal and Harlow</h3>
                         <p className="text-gray-300 font-light text-lg">Zero to Hero Trajectory</p>
                      </div>
                      
                      <div className="hidden md:block w-px h-24 bg-white/20"></div>
                      
                      <div className="flex items-center gap-4">
                         <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-neon group-hover:border-brand-neon group-hover:shadow-[0_0_20px_#DE69CB] transition-all duration-500">
                            <ArrowUpRight className="text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45 group-hover:text-black" size={24} />
                         </div>
                      </div>
                   </div>
                </div>
             </Reveal>

             {/* CLIENT 2 */}
             <Reveal width="100%">
                <div 
                    className="group relative border border-white/20 bg-[#050505] hover:border-brand-cyan/80 transition-all duration-500 overflow-hidden rounded-2xl"
                    onMouseEnter={() => sfx.playHover()}
                >
                   <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   
                   <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
                      <div className="flex-1">
                         <div className="flex items-center gap-3 mb-4">
                            <span className="font-mono text-xs text-brand-cyan border border-brand-cyan/40 px-2 py-1 rounded bg-brand-cyan/10">CASE_02</span>
                            <span className="font-mono text-xs text-gray-400">STRATEGY</span>
                         </div>
                         <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3 group-hover:text-brand-cyan transition-colors duration-300">NoBlueberry Label</h3>
                         <p className="text-gray-300 font-light text-lg">Professional Audit & Architecture</p>
                      </div>
                      
                      <div className="hidden md:block w-px h-24 bg-white/20"></div>
                      
                      <div className="flex items-center gap-4">
                         <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-cyan group-hover:border-brand-cyan group-hover:shadow-[0_0_20px_#00f0ff] transition-all duration-500">
                            <ArrowUpRight className="text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45 group-hover:text-black" size={24} />
                         </div>
                      </div>
                   </div>
                </div>
             </Reveal>

             {/* CLIENT 3 */}
             <Reveal width="100%">
                <div 
                    className="group relative border border-white/20 bg-[#050505] hover:border-white/80 transition-all duration-500 overflow-hidden rounded-2xl"
                    onMouseEnter={() => sfx.playHover()}
                >
                   <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   
                   <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
                      <div className="flex-1">
                         <div className="flex items-center gap-3 mb-4">
                            <span className="font-mono text-xs text-white border border-white/40 px-2 py-1 rounded bg-white/10">CASE_03</span>
                            <span className="font-mono text-xs text-gray-400">TRAFFIC</span>
                         </div>
                         <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3 group-hover:text-gray-200 transition-colors duration-300">The Safer Internet Project</h3>
                         <p className="text-gray-300 font-light text-lg">Traffic Explosion System</p>
                      </div>
                      
                      <div className="hidden md:block w-px h-24 bg-white/20"></div>
                      
                      <div className="flex items-center gap-4">
                         <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_20px_white] transition-all duration-500">
                            <ArrowUpRight size={24} />
                         </div>
                      </div>
                   </div>
                </div>
             </Reveal>

          </div>
       </div>
    </section>
  );
};

export default CaseStudies;