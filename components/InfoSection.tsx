
import React from 'react';

interface InfoSectionProps {
  title: string;
  description: string;
  image: string;
  ctaPrimary: string;
  ctaSecondary?: string;
  reverse?: boolean;
  isDark?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({ 
  title, 
  description, 
  image, 
  ctaPrimary, 
  ctaSecondary, 
  reverse = false,
  isDark = false 
}) => {
  return (
    <section className={`py-16 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'direction-rtl' : ''}`}>
          <div className={reverse ? 'md:order-2' : ''}>
             <img src={image} alt={title} className="w-full rounded-2xl" />
          </div>
          <div className={reverse ? 'md:order-1' : ''}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">{title}</h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                isDark ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'
              }`}>
                {ctaPrimary}
              </button>
              {ctaSecondary && (
                <button className={`px-6 py-3 rounded-lg font-semibold border transition-colors ${
                  isDark ? 'border-zinc-700 hover:bg-zinc-900' : 'border-zinc-200 hover:bg-zinc-100'
                }`}>
                  {ctaSecondary}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
