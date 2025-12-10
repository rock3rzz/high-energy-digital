import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { Mail, Copy, Check, ArrowUpRight, Terminal, Instagram, Linkedin, Twitter } from 'lucide-react';
import { NeonButton } from './ui/NeonButton';
import { sfx } from '../utils/audio';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    sfx.playClick();
    navigator.clipboard.writeText('clientservices@highenergydigital.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { name: 'Instagram', url: 'https://instagram.com/highenergydigital', Icon: Instagram },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/high-energy-digital/', Icon: Linkedin },
    { name: 'Twitter', url: 'https://x.com/highenergydigit?s=21', Icon: Twitter }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#030303] border-t border-white/20 transition-colors duration-300">
       
       {/* Background Elements */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-neon/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

       <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             
             {/* LEFT: Context & Info */}
             <div>
                <Reveal>
                  <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-brand-neon/40 bg-brand-neon/10 rounded text-brand-neon font-mono text-xs tracking-widest uppercase">
                     <div className="w-1.5 h-1.5 bg-brand-neon rounded-full animate-pulse"></div>
                     Contact Us
                  </div>
                  
                  <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase mb-6 leading-none">
                     Start Your <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-cyan">Project.</span>
                  </h2>
                  
                  <p className="text-xl text-gray-300 font-light leading-relaxed mb-12 max-w-md">
                     Stop shouting into the void. Send us a message and let's discuss your growth.
                  </p>
                </Reveal>

                <Reveal delay={200}>
                   <div>
                         <h4 className="text-gray-400 font-mono text-xs uppercase tracking-[0.2em] mb-6">Social Media</h4>
                         <div className="flex gap-4">
                            {socials.map((item) => (
                               <a 
                                 key={item.name} 
                                 href={item.url} 
                                 target="_blank" 
                                 rel="noopener noreferrer" 
                                 className="w-12 h-12 flex items-center justify-center border border-white/20 bg-white/5 hover:bg-brand-neon hover:border-brand-neon hover:text-black hover:shadow-[0_0_20px_#DE69CB] transition-all duration-300 group"
                                 aria-label={item.name}
                                 onMouseEnter={() => sfx.playHover()}
                                 onClick={() => sfx.playClick()}
                               >
                                  <item.Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                               </a>
                            ))}
                         </div>
                      </div>
                </Reveal>
             </div>

             {/* RIGHT: Direct Signal Console (Replaced Form) */}
             <Reveal delay={100} width="100%">
                <div className="relative group">
                   {/* Border Glow */}
                   <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-neon to-brand-cyan opacity-40 blur-lg group-hover:opacity-60 transition duration-1000"></div>
                   
                   <div className="relative bg-[#050505] border border-white/20 p-10 md:p-16 rounded-xl overflow-hidden flex flex-col items-center justify-center text-center min-h-[400px]">
                      
                      {/* Scanline Effect */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none z-0 opacity-20"></div>

                      <div className="relative z-10 w-full max-w-md">
                          <div className="w-20 h-20 bg-brand-cyan/10 rounded-full flex items-center justify-center mb-8 mx-auto border border-brand-cyan/40 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                             <Terminal size={40} className="text-brand-cyan" />
                          </div>
                          
                          <h3 className="text-white font-bold text-2xl uppercase tracking-widest mb-2">Get In Touch</h3>
                          <p className="text-gray-400 font-mono text-xs mb-10 tracking-widest">We reply within 24 hours.</p>

                          <div className="flex flex-col gap-4">
                             <a href="mailto:clientservices@highenergydigital.com" className="w-full group/btn">
                                <NeonButton className="w-full flex justify-center py-6">
                                   EMAIL US NOW <ArrowUpRight className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </NeonButton>
                             </a>
                             
                             <button 
                               onClick={handleCopy}
                               onMouseEnter={() => sfx.playHover()}
                               className="w-full py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 text-gray-300 hover:text-white transition-all uppercase tracking-widest font-mono text-xs flex items-center justify-center gap-3 rounded-sm active:scale-[0.98]"
                             >
                                {copied ? (
                                    <>COPIED TO CLIPBOARD <Check size={14} className="text-green-500" /></>
                                ) : (
                                    <>clientservices@highenergydigital.com <Copy size={14} /></>
                                )}
                             </button>
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

export default Contact;