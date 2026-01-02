import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { Message } from '../types';
import BlurText from './BlurText';

interface ChatInterfaceProps {
  onSuggest?: (query: string) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim() || loading) return;

    const userQuery = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userQuery }]);
    setLoading(true);

    const response = await geminiService.askSayandip(userQuery);

    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setLoading(false);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const chips = [
    { label: 'See latest project', icon: 'visibility', query: 'Show me your latest project' },
    { label: 'Download Resume', icon: 'download', query: 'How can I get your resume?' },
    { label: 'Copy email address', icon: 'content_copy', query: 'What is your email address?' },
  ];

  return (
    <div className="w-full max-w-3xl flex flex-col items-center gap-4 sm:gap-6 md:gap-8 animate-fade-in-up px-4 sm:px-0">
      {/* Hero Text */}
      {messages.length === 0 && (
        <div className="flex flex-col items-center text-center space-y-4 mb-4">
          <BlurText
            text="Engineering intelligence for the future."
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] justify-center"
            delay={50}
            animateBy="words"
          />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 font-normal max-w-xl leading-relaxed px-2">
            AI Engineer & Full Stack Developer building scalable AI solutions.
          </p>
        </div>
      )}

      {/* Chat History */}
      {messages.length > 0 && (
        <div
          ref={scrollRef}
          className="w-full max-h-[40vh] overflow-y-auto custom-scrollbar flex flex-col gap-4 p-4 mb-4"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                  ? 'bg-primary text-white rounded-tr-none'
                  : 'bg-surface-dark text-slate-200 border border-white/5 rounded-tl-none'
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-2 text-slate-500 text-xs italic ml-2">
              <span className="material-symbols-outlined text-sm animate-spin">sync</span>
              Sayandip is thinking...
            </div>
          )}
        </div>
      )}

      {/* Input Section */}
      <div className="w-full flex flex-col items-center gap-6">
        <form
          onSubmit={handleSubmit}
          className="w-full relative group"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-indigo-500/50 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 pointer-events-none"></div>

          <div className="relative w-full bg-surface-dark rounded-2xl p-2 sm:p-3 flex items-center shadow-2xl shadow-black/50 border border-white/5 h-14 sm:h-16 md:h-20">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="How can I help build your next product?"
              className="flex-1 bg-transparent border-none focus:ring-0 text-base sm:text-lg md:text-xl text-white placeholder-slate-500 font-normal px-3 sm:px-4 h-full outline-none"
            />

            <button
              type="submit"
              disabled={loading || !query.trim()}
              className={`
                bg-primary hover:bg-indigo-600 text-white rounded-xl p-3 aspect-square flex items-center justify-center transition-all
                ${(loading || !query.trim()) ? 'opacity-50 cursor-not-allowed scale-95' : 'hover:scale-105 active:scale-95'}
              `}
            >
              <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
            </button>
          </div>
        </form>

        {/* Quick Suggestion Chips */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full">
          {chips.map((chip) => (
            <button
              key={chip.label}
              onClick={() => {
                setQuery(chip.query);
                // Trigger submit after state update
                setTimeout(() => handleSubmit(), 50);
              }}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-surface-dark border border-slate-700/50 hover:border-primary/50 hover:bg-slate-800 transition-all cursor-pointer group"
            >
              <span className="material-symbols-outlined text-base sm:text-lg text-primary">{chip.icon}</span>
              <span className="text-xs sm:text-sm font-medium text-slate-300">{chip.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;