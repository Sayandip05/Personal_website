import React from 'react';
import { WORK_EXPERIENCES } from '../constants';
import BlurText from './BlurText';

const Work: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col gap-1 w-full border-b border-white/5 pb-6 mb-2">
        <BlurText 
          text="Recent Experience"
          className="text-3xl font-bold text-white"
          delay={50}
          animateBy="words"
        />
        <p className="text-slate-400">Showcasing selected professional work and internships.</p>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col gap-8">
        {WORK_EXPERIENCES.map((exp) => (
          <div key={exp.id} className="group relative">
            {/* Ambient Outer Glow on Hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            
            <div className="relative w-full bg-surface-dark rounded-3xl p-8 border border-white/5 shadow-2xl flex flex-col gap-6">
              {/* Header Info */}
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-3xl text-primary">{exp.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{exp.company}</h3>
                    <p className="text-lg font-medium text-primary">{exp.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm shadow-sm">
                  <span className="material-symbols-outlined text-lg text-slate-400">calendar_today</span>
                  <span className="text-sm font-semibold text-slate-300">{exp.period}</span>
                </div>
              </div>

              {/* Separator */}
              <div className="w-full h-px bg-white/5"></div>

              {/* Body Content */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-slate-300 leading-relaxed font-normal">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-4 mt-6">
                    {exp.highlights.map((highlight, idx) => {
                      const parts = highlight.split(/(25%|Storybook library)/g);
                      
                      return (
                        <li key={idx} className="flex items-start gap-4 group/item">
                          <div className="mt-1 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-[14px] text-green-500 font-bold">check</span>
                          </div>
                          <span className="text-slate-400 text-sm leading-relaxed group-hover/item:text-slate-200 transition-colors">
                            {parts.map((part, i) => 
                              (part === '25%' || part === 'Storybook library') 
                                ? <strong key={i} className="text-white font-semibold">{part}</strong> 
                                : part
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Sidebar Details */}
                <div className="md:col-span-1 flex flex-col gap-6">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/5">
                    <a 
                      href={exp.link} 
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-indigo-400 font-bold transition-all group/link"
                    >
                      <span>View Case Study</span>
                      <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;