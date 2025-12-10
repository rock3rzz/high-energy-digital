import React, { useEffect, useRef, useState } from 'react';
import { Reveal } from './ui/Reveal';
import { MessageSquare, Star, Radio } from 'lucide-react';
import { sfx } from '../utils/audio';

const reviews = [
  {
    text: "High Energy Digital took my social media profiles from zero to hero with a really solid plan of attack. Highly recommended!",
    author: "Rosa Maria Aguado",
    role: "Beal and Harlow"
  },
  {
    text: "These guys are really great to work with. Extremely professional and helpful when I asked them questions. Don’t look anywhere else for your digital marketing needs!",
    author: "Aaron Loeb",
    role: "NoBlueberry Label"
  },
  {
    text: "Results started off slow, but once they started coming through, we couldn’t stop the traffic to our site and socials! Highly recommended. Get in touch and start winning!",
    author: "David Lee",
    role: "The Safer Internet Project"
  }
];

// Individual Card Component to handle Shine Logic
const TestimonialCard = ({ review, index }: { review: typeof reviews[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [triggerShine, setTriggerShine] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (!cardRef.current || hasPlayed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the shine based on index for a cascading effect
          const delay = 300 + (index * 200);
          setTimeout(() => {
            setTriggerShine(true);
            setHasPlayed(true);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index, hasPlayed]);

  return (
    <div 
       ref={cardRef}
       className="relative h-full p-10 border border-white/20 bg-[#0a0a0a] hover:border-brand-neon/60 transition-all duration-300 flex flex-col justify-between group shadow-none hover:shadow-[0_0_30px_rgba(222,105,203,0.15)] rounded-2xl overflow-hidden"
       onMouseEnter={() => sfx.playHover()}
    >
       {/* Glossy Light Sweep Overlay */}
       {triggerShine && (
          <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute top-0 bottom-0 left-[-150%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-sweep"></div>
          </div>
       )}
       
       {/* Header */}
       <div className="relative z-10 flex justify-between items-start mb-8">
          <div className="flex gap-1">
             {[1,2,3,4,5].map(s => (
                <Star key={s} size={16} className="fill-brand-neon text-brand-neon drop-shadow-[0_0_5px_rgba(222,105,203,0.5)]" />
             ))}
          </div>
          <MessageSquare size={24} className="text-white/40 group-hover:text-brand-neon transition-colors" />
       </div>

       {/* Quote */}
       <p className="relative z-10 text-lg md:text-xl font-light text-white leading-relaxed mb-10">
          "{review.text}"
       </p>

       {/* Author Info - High Visibility */}
       <div className="relative z-10 border-t border-white/20 pt-6 mt-auto">
          <div className="font-bold text-white text-lg mb-1 group-hover:text-brand-neon transition-colors">
             {review.author}
          </div>
          <div className="font-mono text-xs text-gray-400 uppercase tracking-[0.2em]">
             {review.role}
          </div>
       </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-40 bg-[#050505] relative border-t border-white/20 overflow-hidden transition-colors duration-300">
      
      {/* Background Grid for Texture */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex items-center justify-between mb-20">
           <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase flex items-center gap-6 drop-shadow-md">
                 <div className="relative">
                    <div className="absolute inset-0 bg-brand-neon/50 blur-xl rounded-full animate-pulse"></div>
                    <Radio className="text-brand-neon relative z-10" size={32} />
                 </div>
                 Client <span className="text-gray-400">Reviews</span>
              </h2>
           </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {reviews.map((review, i) => (
              <Reveal key={i} delay={i * 150} width="100%">
                 <TestimonialCard review={review} index={i} />
              </Reveal>
           ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;