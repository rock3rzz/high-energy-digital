import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { Terminal, Cpu, Network, ArrowRight } from 'lucide-react';
import { sfx } from '../utils/audio';

const services = [
  {
    id: '01',
    title: 'Social Media Management',
    desc: 'A digital audit identifies strengths, weaknesses, opportunities.',
    Icon: Network,
    status: 'OPTIMAL',
    color: 'text-brand-neon'
  },
  {
    id: '02',
    title: 'Digital Strategy Audit',
    desc: 'After the audit, we create a strategy to increase ROI.',
    Icon: Terminal,
    status: 'READY',
    color: 'text-brand-cyan'
  },
  {
    id: '03',
    title: 'Design and Implementation',
    desc: 'Once approved, we design and implement the marketing strategy.',
    Icon: Cpu,
    status: 'ACTIVE',
    color: 'text-white'
  }
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 md:py-40 bg-[#030303] border-y border-white/10 relative z-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
           <Reveal>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase drop-shadow-md">
                 Our <span className="text-brand-neon drop-shadow-[0_0_15px_rgba(222,105,203,0.5)]">Services</span>
              </h2>
           </Reveal>
           <div className="hidden md:block font-mono text-xs text-gray-400 tracking-[0.2em]">
              // WHAT WE DO
           </div>
        </div>

        <div className="flex flex-col gap-6">
           {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 100} width="100%">
                 <div 
                    onMouseEnter={() => {
                        setActiveIndex(index);
                        sfx.playHover();
                    }}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`group relative border transition-all duration-500 overflow-hidden ${activeIndex === index ? 'border-brand-neon bg-[#080808] shadow-[0_0_30px_rgba(222,105,203,0.15)]' : 'border-white/20 bg-[#050505]'}`}
                 >
                    {/* Active Background Animation */}
                    {activeIndex === index && (
                       <div className="absolute inset-0 opacity-20 pointer-events-none">
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:24px_24px] animate-[grid-scroll_20s_linear_infinite]"></div>
                       </div>
                    )}

                    {/* Active Strip */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-brand-neon transition-all duration-300 shadow-[0_0_10px_#DE69CB] ${activeIndex === index ? 'opacity-100 h-full' : 'opacity-0 h-0'} hidden md:block`}></div>

                    <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-8 md:items-center">
                       
                       <div className="flex items-start md:items-center gap-6">
                           {/* Icon Box */}
                           <div className={`p-4 border transition-all duration-300 flex-shrink-0 relative overflow-hidden ${activeIndex === index ? 'bg-brand-neon/10 border-brand-neon/50' : 'bg-white/5 border-white/20'}`}>
                              
                              {/* Icon Animation Container */}
                              <div className={`transform transition-all duration-500 ${activeIndex === index ? 'scale-110' : 'scale-100'}`}>
                                <service.Icon 
                                  size={28} 
                                  className={`
                                    transition-all duration-500
                                    ${activeIndex === index 
                                        ? `${service.color} drop-shadow-[0_0_8px_currentColor] animate-pulse` 
                                        : 'text-gray-400 animate-pulse-slow opacity-100'
                                    }
                                  `} 
                                />
                              </div>

                              {/* Corner Accents for Tech Feel */}
                              <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r transition-colors duration-300 ${activeIndex === index ? 'border-brand-neon' : 'border-white/30'}`}></div>
                              <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-colors duration-300 ${activeIndex === index ? 'border-brand-neon' : 'border-white/30'}`}></div>

                           </div>
                           
                           {/* Mobile Title Layout */}
                           <div className="md:hidden flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                     <span className="font-mono text-[10px] text-gray-400 tracking-widest">SERVICE_{service.id}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white uppercase tracking-tight leading-none">
                                   {service.title}
                                </h3>
                           </div>
                       </div>

                       {/* Desktop Title Layout */}
                       <div className="hidden md:block flex-1">
                          <div className="flex items-center gap-4 mb-2">
                             <span className="font-mono text-[10px] text-gray-400 tracking-widest">SERVICE_{service.id}</span>
                          </div>
                          <h3 className="text-4xl font-bold text-white uppercase tracking-tight group-hover:text-white transition-colors">
                             {service.title}
                          </h3>
                       </div>

                       {/* Description */}
                       <div className={`w-full md:w-1/3 transition-all duration-500 ${activeIndex === index ? 'md:opacity-100 md:translate-x-0' : 'md:opacity-60 md:translate-x-4'}`}>
                          <p className="text-gray-300 font-light leading-relaxed text-base md:border-l md:border-white/20 md:pl-6 group-hover:border-brand-neon/50">
                             {service.desc}
                          </p>
                       </div>

                       {/* Arrow */}
                       <div className={`hidden md:flex items-center justify-center w-12 h-12 border transition-all duration-300 ${activeIndex === index ? 'border-brand-neon bg-brand-neon text-black rotate-0 shadow-[0_0_15px_#DE69CB]' : 'border-white/20 text-gray-400 -rotate-45 group-hover:border-white'}`}>
                          <ArrowRight size={24} />
                       </div>
                    </div>
                 </div>
              </Reveal>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Services;