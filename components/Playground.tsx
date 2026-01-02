import React from 'react';
import { PLAYGROUND_ITEMS } from '../constants';
import BlurText from './BlurText';

const Playground: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 animate-fade-in-up h-full overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <BlurText 
          text="Playground"
          className="text-3xl font-bold text-white"
          delay={50}
          animateBy="letters"
        />
        <p className="text-slate-400 max-w-2xl leading-relaxed">
          Experimental projects, creative coding sketches, and random ideas that don't fit in the main portfolio.
        </p>
      </div>

      {/* Grid Container */}
      <div className="flex-1 overflow-y-auto pr-2 pb-20 custom-scrollbar">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLAYGROUND_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-surface-dark rounded-2xl border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500 flex flex-col h-64"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="p-7 flex flex-col justify-between h-full relative z-10">
                <div>
                  <div className={`w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center ${item.iconColor} mb-5 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                    <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 mt-auto border-t border-white/5">
                  <div className="flex gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-slate-500 bg-white/5 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={item.link}
                    className="text-slate-500 group-hover:text-primary transition-colors duration-300"
                  >
                    <span className="material-symbols-outlined text-[22px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">arrow_outward</span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div className="group relative border border-dashed border-slate-700/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center h-64 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-500 mb-4 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">add</span>
            </div>
            <h3 className="text-base font-bold text-slate-500 group-hover:text-slate-300 transition-colors">New Experiment</h3>
            <p className="text-xs text-slate-600 mt-1 font-medium tracking-wide uppercase">In Progress</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;