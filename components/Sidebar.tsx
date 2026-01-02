import React from 'react';
import { NavItem } from '../types';
import { PROFILE_NAME, PROFILE_TITLE, PROFILE_AVATAR } from '../constants';

interface SidebarProps {
  activeTab: NavItem;
  setActiveTab: (tab: NavItem) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const navItems: { label: NavItem; icon: string }[] = [
    { label: 'Home', icon: 'home' },
    { label: 'Work', icon: 'work' },
    { label: 'Playground', icon: 'category' },
    { label: 'About', icon: 'person' },
    { label: 'Contact', icon: 'mail' },
  ];

  const secondaryLinks = [
    { name: 'GitHub', icon: 'code', href: 'https://github.com' },
    { name: 'LinkedIn', icon: 'link', href: 'https://linkedin.com' },
    { name: 'Resume', icon: 'description', href: '#' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed md:relative top-0 left-0 h-full w-[260px] flex-shrink-0 
        bg-[#0d0c15] p-8 z-40 flex flex-col justify-between 
        transition-transform duration-300 border-r border-white/5
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col gap-12">
          {/* Header Section */}
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-full overflow-hidden ring-1 ring-white/10">
              <img 
                alt={PROFILE_NAME} 
                className="w-full h-full object-cover" 
                src={PROFILE_AVATAR} 
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[15px] font-bold text-white leading-tight">{PROFILE_NAME}</h3>
              <p className="text-[11px] text-slate-400 font-medium">{PROFILE_TITLE}</p>
            </div>
          </div>

          {/* Primary Navigation */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setActiveTab(item.label);
                  setIsOpen(false);
                }}
                className={`group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeTab === item.label 
                    ? 'bg-[#1e1b3d] text-white' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${activeTab === item.label ? 'fill-1' : ''}`}>
                  {item.icon}
                </span>
                <span className="text-[14px] font-semibold">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-8">
          {/* Secondary Links */}
          <div className="flex flex-col gap-4">
            {secondaryLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-4 text-slate-400 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {link.icon}
                </span>
                <span className="text-[13px] font-medium">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Availability Status */}
          <div className="pt-6 border-t border-white/5">
            <div className="flex items-center gap-3 px-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500/50 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[11px] font-medium text-slate-400">Available for new projects</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;