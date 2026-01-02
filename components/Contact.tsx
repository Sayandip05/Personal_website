import React, { useState } from 'react';
import BlurText from './BlurText';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}! (Simulated)`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-fade-in-up py-10">
      {/* Left Column: Text & Info */}
      <div className="flex flex-col gap-10 text-center lg:text-left">
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <BlurText
              text="Let's start a"
              className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] justify-center lg:justify-start"
              delay={40}
              animateBy="words"
            />
            <BlurText
              text="conversation."
              className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400 leading-[1.1] justify-center lg:justify-start"
              delay={40}
              animateBy="words"
            />
          </div>
          <p className="text-lg text-slate-400 font-normal leading-relaxed max-w-md mx-auto lg:mx-0">
            Interested in working together? Fill out the form or drop me a direct email to discuss your next project.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-sm mx-auto lg:mx-0">
          <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm group hover:border-primary/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">mail</span>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email</p>
              <p className="text-base font-medium text-white">sayandip@bar.design</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="w-full relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-indigo-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>

        <form
          onSubmit={handleSubmit}
          className="relative w-full bg-surface-dark rounded-3xl p-8 md:p-10 flex flex-col gap-6 shadow-2xl border border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 pl-1">Name</label>
              <input
                required
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-background-dark border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 pl-1">Email</label>
              <input
                required
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-background-dark border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 pl-1">Subject</label>
            <input
              required
              type="text"
              placeholder="Project Proposal"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-background-dark border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 pl-1">Message</label>
            <textarea
              required
              rows={4}
              placeholder="How can I help you build your next big thing?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-background-dark border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-primary hover:bg-indigo-600 text-white font-bold rounded-xl py-4 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group/btn active:scale-[0.98]"
          >
            <span className="tracking-wide">Send Message</span>
            <span className="material-symbols-outlined text-[20px] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform">send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;