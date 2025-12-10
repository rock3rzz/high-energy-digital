import React, { useState } from 'react';
import { Plus, Minus, ChevronDown } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { sfx } from '../utils/audio';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Why hire a consultant vs in-house?",
      a: "Consultants bring specialized skills and objective perspective. We hit the ground running without the need for training, benefits, or HR overhead. You get a senior team for the price of a junior hire."
    },
    {
      q: "What deliverables can we expect?",
      a: "A complete strategy architecture, daily content execution, deep-dive analytics, and monthly growth reporting. You get a fully documented system, not just 'hours worked' or random posts."
    },
    {
      q: "How long until we see results?",
      a: "It depends on the vector. Paid ads can generate leads instantly. Organic social typically sees traction in month one, but compound growth (the 'hockey stick') usually activates around months 3-6 of consistent execution."
    },
    {
      q: "Do you handle paid advertising?",
      a: "Absolutely. We engineer high-ROAS campaigns across LinkedIn, Twitter/X, and Meta. We focus on lowering CPA (Cost Per Acquisition) while scaling volume, using the same creative-first approach as our organic content."
    },
    {
      q: "What does the onboarding process look like?",
      a: "Swift and surgical. We kick off with a strategy deep-dive within 48 hours. We audit your current assets, build the roadmap, and typically go live with the first wave of content within 7 days of signing."
    },
    {
      q: "Do you understand tech products?",
      a: "Yes. Our DNA is in Tech and Cybersecurity. We know the difference between a firewall, a VPN, and a zero-trust architecture. Your content will sound like it came from an engineer, not a generic marketer."
    },
    {
      q: "Do you offer custom enterprise packages?",
      a: "Yes. While we have core protocols, we engineer bespoke growth systems for enterprise clients with specific compliance, volume, or multi-region needs. Contact us for a custom scope."
    }
  ];

  return (
    <section id="faq" className="py-40 border-t border-white/5 bg-[#050505] transition-colors duration-300 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Reveal width="100%">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tighter uppercase">
              Common <span className="text-brand-neon drop-shadow-[0_0_15px_rgba(222,105,203,0.4)]">Questions</span>
            </h2>
            <p className="text-gray-500 font-mono text-sm tracking-[0.2em] uppercase">
              // FAQ
            </p>
          </div>
        </Reveal>

        <div className="space-y-6">
          {faqs.map((item, i) => (
            <Reveal key={i} delay={i * 50} width="100%">
              <div 
                className={`
                  group border rounded-xl overflow-hidden transition-all duration-300
                  ${openIndex === i 
                    ? 'border-brand-neon bg-brand-neon/[0.03] shadow-[0_0_20px_rgba(222,105,203,0.1)]' 
                    : 'border-white/10 bg-white/[0.01] hover:border-white/30 hover:bg-white/[0.02]'
                  }
                `}
                onMouseEnter={() => sfx.playHover()}
              >
                <button 
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left cursor-pointer"
                  onClick={() => {
                      sfx.playClick();
                      setOpenIndex(openIndex === i ? null : i);
                  }}
                >
                  <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${openIndex === i ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                     {item.q}
                  </span>
                  <span className={`
                    ml-4 flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300
                    ${openIndex === i 
                      ? 'border-brand-neon bg-brand-neon text-white rotate-180 shadow-[0_0_10px_#DE69CB]' 
                      : 'border-white/10 text-gray-500 group-hover:border-white/30 group-hover:text-white'
                    }
                  `}>
                    <ChevronDown size={20} />
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-[cubic-bezier(0.04,0.62,0.23,0.98)] ${openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-8 md:px-8 text-gray-300 leading-relaxed font-light text-base md:text-lg border-t border-white/5 pt-6">
                    {item.a}
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

export default FAQ;