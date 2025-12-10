import React from 'react';

interface BentoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
  tags?: string[];
}

export const BentoCard: React.FC<BentoCardProps> = ({ 
  title, 
  description, 
  icon, 
  className = '', 
  delay = 0,
  tags = []
}) => {
  return (
    <div 
      className={`bento-card group relative overflow-hidden rounded-3xl bg-white/5 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-md p-8 transition-all duration-500 hover:border-brand-neon/50 hover:shadow-lg hover:shadow-brand-neon/10 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background Gradient Blob */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-neon/5 rounded-full blur-3xl group-hover:bg-brand-neon/10 transition-colors duration-500 pointer-events-none"></div>

      <div className="bento-content relative z-10 flex flex-col h-full justify-between transition-transform duration-300">
        <div>
          <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/10 text-brand-neon group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-brand-neon transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
            {description}
          </p>
        </div>

        {tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 text-xs font-mono uppercase tracking-wider border border-black/10 dark:border-white/10 rounded-full text-gray-500 group-hover:border-brand-neon/30 group-hover:text-gray-400 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};