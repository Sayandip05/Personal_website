import React from 'react';
import { PROFILE_AVATAR, PROFILE_NAME } from '../constants';
import BlurText from './BlurText';

const About: React.FC = () => {
  const techStack = [
    'Python', 'PyTorch', 'TensorFlow', 'LangChain', 'React', 'TypeScript', 'Docker', 'AWS'
  ];

  const socialLinks = [
    { icon: 'code', href: '#', label: 'GitHub' },
    { icon: 'link', href: '#', label: 'LinkedIn' },
    { icon: 'share', href: '#', label: 'Twitter' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 animate-fade-in-up py-2 px-4 md:px-0">
      {/* Page Title */}
      <div className="flex items-center gap-6">
        <BlurText
          text="About Me"
          className="text-3xl font-bold text-white whitespace-nowrap"
          delay={50}
          animateBy="letters"
        />
        <div className="h-[1px] w-full bg-white/5 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-dark rounded-3xl p-6 md:p-8 flex flex-col items-center border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

            <div className="relative mb-6">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden ring-4 ring-white/5 relative z-10">
                <img
                  src={PROFILE_AVATAR}
                  alt={PROFILE_NAME}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-background-dark rounded-lg flex items-center justify-center border border-white/10 z-20 shadow-lg">
                <span className="material-symbols-outlined text-primary text-base">verified_user</span>
              </div>
            </div>

            <div className="text-center space-y-1 mb-6 relative z-10">
              <h2 className="text-lg font-bold text-white tracking-tight">{PROFILE_NAME}</h2>
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest opacity-90">
                AI Engineer | Full Stack Dev
              </p>
            </div>

            <div className="flex gap-2.5 mb-8 relative z-10">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 hover:border-primary/30 border border-transparent transition-all shadow-sm"
                  aria-label={social.label}
                >
                  <span className="material-symbols-outlined text-base">{social.icon}</span>
                </a>
              ))}
            </div>

            <button className="w-full bg-primary hover:bg-indigo-600 text-white text-[12px] font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/10 active:scale-[0.98] relative z-10">
              <span className="material-symbols-outlined text-base">download</span>
              <span>Resume</span>
            </button>
          </div>
        </div>

        {/* Right Column: Info Content */}
        <div className="lg:col-span-8 flex flex-col gap-6 pb-12">
          {/* Introduction Box */}
          <div className="bg-surface-dark/40 rounded-3xl p-6 md:p-8 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Introduction</span>
            </div>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-normal">
              I build <span className="text-white font-semibold">intelligent, scalable AI systems</span> that solve real-world problems. With a background in full-stack engineering, I bridge the gap between research models and production-ready applications.
            </p>
          </div>

          {/* Stats and Current Focus Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              <div className="bg-surface-dark/30 rounded-2xl p-5 border border-white/5 flex flex-col gap-0.5">
                <span className="text-2xl font-bold text-white tracking-tight">5+</span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Years Experience</span>
              </div>
              <div className="bg-surface-dark/30 rounded-2xl p-5 border border-white/5 flex flex-col gap-0.5">
                <span className="text-2xl font-bold text-white tracking-tight">42</span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Completed Projects</span>
              </div>
              <div className="flex items-center gap-2.5 pl-2">
                <span className="material-symbols-outlined text-primary text-base">location_on</span>
                <span className="text-[12px] text-slate-400 font-medium">San Francisco, CA</span>
              </div>
            </div>

            <div className="bg-surface-dark/40 rounded-3xl p-6 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-4 right-4 text-white/[0.03] group-hover:text-white/[0.07] transition-colors">
                <span className="material-symbols-outlined text-5xl rotate-12">rocket_launch</span>
              </div>
              <h3 className="text-base font-bold text-white mb-3">Current Focus</h3>
              <p className="text-[12px] text-slate-400 leading-relaxed mb-6 relative z-10 max-w-[95%]">
                Researching Agentic workflows and multi-modal LLMs to create more autonomous systems.
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                <span className="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-500 text-[10px] font-bold border border-amber-500/20">Agents</span>
                <span className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-500 text-[10px] font-bold border border-blue-500/20">RAG</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Footer */}
          <div className="bg-surface-dark/30 rounded-3xl p-6 border border-white/5 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold text-white">Tech Stack</h3>
              <span className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em]">Core toolkit</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-background-dark/50 border border-white/5 text-[12px] font-semibold text-slate-300 hover:text-white hover:border-primary/30 transition-all cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;