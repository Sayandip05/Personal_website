import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import Playground from './components/Playground';
import Work from './components/Work';
import Contact from './components/Contact';
import About from './components/About';
import ColorBends from './components/ColorBends';
import { NavItem } from './types';
import DarkVeil from './components/DarkVeil';


const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavItem>('Home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background-dark text-white font-display">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main className="flex-1 relative flex flex-col items-center p-6 md:p-12 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen opacity-40"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

        {activeTab === 'Home' && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <DarkVeil />
          </div>
        )}

        <div className="relative z-10 w-full h-full overflow-y-auto custom-scrollbar flex flex-col items-center">
          {activeTab === 'Home' && (
            <div className="min-h-full w-full flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <ColorBends
                  colors={['#4b2bee', '#818cf8', '#1e1b3d']}
                  speed={0.12}
                  warpStrength={1.5}
                  frequency={0.8}
                />
              </div>
              <div className="relative z-10 w-full flex flex-col items-center">
                <ChatInterface />
              </div>
            </div>
          )}


          {activeTab === 'About' && (
            <div className="w-full min-h-full py-4 px-4 flex flex-col items-center justify-start">
              <About />
            </div>
          )}

          {activeTab === 'Work' && (
            <div className="w-full min-h-full py-4 px-4">
              <Work />
            </div>
          )}

          {activeTab === 'Playground' && (
            <div className="w-full min-h-full py-4 px-4">
              <Playground />
            </div>
          )}

          {activeTab === 'Contact' && (
            <div className="w-full min-h-full py-4 px-4 flex flex-col items-center justify-start">
              <Contact />
            </div>
          )}
        </div>

        {/* Minimal Footer */}
        <div className="absolute bottom-6 text-center w-full z-10 pointer-events-none hidden md:block">
          <p className="text-[10px] text-slate-700 font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Sayandip Bar • Designing Intelligence
          </p>
        </div>

        {/* Mobile Toggle Button */}
        <div className="fixed top-4 right-4 md:hidden z-50">
          <button
            onClick={() => setIsSidebarOpen(prev => !prev)}
            className="bg-surface-dark/80 backdrop-blur-md p-3 rounded-xl text-white border border-white/10 shadow-lg"
          >
            <span className="material-symbols-outlined">
              {isSidebarOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;