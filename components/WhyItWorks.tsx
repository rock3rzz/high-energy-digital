import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { Scan, Map, Zap, BarChart3 } from 'lucide-react';
import { sfx } from '../utils/audio';

const steps = [
  {
    id: "01",
    title: "DIAGNOSTIC AUDIT",
    desc: "We dismantle your current digital presence to find leaks, inefficiencies, and missed opportunities. No sugar-coating.",
    output: "Deliverable: Audit Report",
    icon: <Scan size={24} />
  },
  {
    id: "02",
    title: "STRATEGIC PLAN",
    desc: "We engineer a custom roadmap. This isn't a template; it's a battle plan tailored to your specific market mechanics.",
    output: "Deliverable: Strategy Doc",
    icon: <Map size={24} />
  },
  {
    id: "03",
    title: "ACTIVE DEPLOYMENT",
    desc: "We execute. High-frequency content, precision ad targeting, and community engagement protocols go live.",
    output: "Deliverable: Campaign Launch",
    icon: <Zap size={24} />
  },
  {
    id: "04",
    title: "OPTIMIZATION",
    desc: "We analyze the data stream. If it works, we scale it. If it doesn't, we kill it and iterate. Ruthless efficiency.",
    output: "Deliverable: ROI Analysis",
    icon: <BarChart3 size={24} />
  }
];

const WhyItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="process" className="py-40 relative overflow-hidden bg-[#030303]">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none"></div>

       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start relative z-10">
          
          {/* Left: Sticky Context */}
          <div className="md:sticky md:top-32 h-fit">
             <Reveal>
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-brand-neon/30 bg-brand-neon/5 rounded-sm">
                   <div className="w-2 h-2 bg-brand-neon animate-pulse"></div>
                   <span className="font-mono text-xs text-brand-neon tracking-[0.2em] uppercase">Our Process</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white leading-[0.9]">
                   HOW WE <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-neon to-white">WORK.</span>
                </h2>
                
                <p className="text-xl text-gray-300 font-light leading-relaxed max-w-lg mb-12">
                   Complexity kills momentum. We strip away the fluff and run a linear, 4-stage process designed to extract maximum value from your market.
                </p>

                {/* Decorative Data Box */}
                <div className="hidden md:block p-6 border border-white/20 bg-black/80 font-mono text-xs text-gray-400">
                   <div className="flex justify-between mb-2">
                      <span>STATUS</span>
                      <span className="text-brand-neon">ONLINE</span>
                   </div>
                   <div className="flex justify-between mb-2">
                      <span>Pipeline Status</span>
                      <span>100%</span>
                   </div>
                   <div className="w-full h-1 bg-gray-800 mt-4">
                      <div className="h-full bg-brand-neon w-[70%] animate-pulse"></div>
                   </div>
                </div>
             </Reveal>
          </div>

          {/* Right: The Pipeline */}
          <div className="relative pt-4">
             {/* The Main Bus Line */}
             <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-white/20 md:left-[23px]"></div>

             <div className="space-y-12">
                {steps.map((step, i) => (
                   <Reveal key={i} delay={i * 100} width="100%">
                      <div 
                        className="relative pl-16 md:pl-20 group"
                        onMouseEnter={() => {
                            setActiveStep(i);
                            sfx.playHover();
                        }}
                        onMouseLeave={() => setActiveStep(null)}
                      >
                         
                         {/* The Node (Square) */}
                         <div className={`
                            absolute left-0 md:left-1 top-0 w-10 h-10 md:w-12 md:h-12 
                            border-2 flex items-center justify-center bg-[#030303] transition-all duration-300 z-10
                            ${activeStep === i ? 'border-brand-neon scale-110 shadow-[0_0_15px_#DE69CB]' : 'border-white/30 group-hover:border-white/60'}
                         `}>
                            <span className={`font-mono font-bold text-sm ${activeStep === i ? 'text-brand-neon' : 'text-gray-400'}`}>
                               {step.id}
                            </span>
                         </div>

                         {/* The Card */}
                         <div className={`
                            relative p-8 border transition-all duration-300 bg-[#050505]
                            ${activeStep === i ? 'border-brand-neon/50 bg-brand-neon/[0.04]' : 'border-white/20 hover:border-white/40'}
                         `}>
                            {/* Corner Tech Marks */}
                            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/30"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/30"></div>

                            <div className="flex items-start justify-between mb-4">
                               <h3 className={`text-2xl font-bold uppercase tracking-tight transition-colors ${activeStep === i ? 'text-white' : 'text-gray-200'}`}>
                                  {step.title}
                                </h3>
                                <div className={`transition-colors ${activeStep === i ? 'text-brand-neon' : 'text-gray-500'}`}>
                                   {step.icon}
                                </div>
                            </div>
                            
                            <p className="text-gray-300 leading-relaxed mb-6 font-light">
                               {step.desc}
                            </p>

                            {/* The Output Section - Explicit Deliverable */}
                            <div className={`
                               flex items-center gap-4 py-3 px-4 border-l-2 text-sm font-mono
                               transition-colors duration-300
                               ${activeStep === i ? 'bg-brand-neon/10 border-brand-neon text-brand-neon' : 'bg-white/5 border-white/20 text-gray-400'}
                            `}>
                               <span className="truncate">{step.output}</span>
                            </div>
                         </div>

                         {/* Connection Line Highlight */}
                         <div className={`absolute left-[19px] md:left-[23px] top-12 bottom-[-48px] w-[2px] bg-brand-neon transition-all duration-500 ${activeStep === i ? 'opacity-100' : 'opacity-0'}`}></div>
                      </div>
                   </Reveal>
                ))}
             </div>
          </div>

       </div>
    </section>
  );
};

export default WhyItWorks;