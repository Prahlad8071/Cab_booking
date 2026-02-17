
import React from 'react';
import { SUGGESTIONS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Suggestions: React.FC = () => {
  return (
    <section className="py-16 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl font-bold mb-8">Suggestions</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUGGESTIONS.map((s) => (
          <div key={s.title} className="bg-zinc-50 rounded-xl overflow-hidden group border border-zinc-100 flex flex-col">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{s.description}</p>
                </div>
                <div className="w-24 h-24 flex-shrink-0 ml-4 rounded-lg overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <button className="bg-white text-black font-semibold px-4 py-2 rounded-full border border-zinc-200 hover:bg-zinc-100 transition-colors inline-flex items-center gap-2 mt-4">
                {s.ctaText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Suggestions;
