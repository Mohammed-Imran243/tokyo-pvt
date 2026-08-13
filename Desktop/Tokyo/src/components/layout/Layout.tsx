import React, { useState } from 'react';
import { Home, Compass, Mail, Image as ImageIcon, Mic, Sparkles, Lock, Heart, Menu, X, Feather } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'journey', label: 'Our Story', icon: Compass },
  { id: 'letters', label: 'Letters', icon: Mail },
  { id: 'memories', label: 'Memories', icon: ImageIcon },
  { id: 'voice-room', label: 'Voice Room', icon: Mic },
  { id: 'night-sky', label: 'Night Sky', icon: Sparkles },
  { id: 'future-vault', label: 'Future Vault', icon: Lock },
  { id: 'about', label: 'About Us', icon: Heart },
];

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
}

export function Layout({ children, activeSection }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featherClicks, setFeatherClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleFeatherClick = () => {
    const next = featherClicks + 1;
    setFeatherClicks(next);
    if (next >= 5) {
      setShowEasterEgg(true);
      setFeatherClicks(0);
      setTimeout(() => setShowEasterEgg(false), 4000);
    }
  };

  return (
    <div className="flex min-h-screen bg-midnight text-soft-lavender relative">

      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-deep-purple rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-indigo-900 rounded-full blur-[120px]" />
      </div>

      {/* Easter Egg Notification */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-deep-purple/90 backdrop-blur-xl border border-warm-gold/30 text-parchment px-6 py-3 rounded-xl shadow-2xl text-center max-w-[90vw]"
          >
            <p className="font-handwriting text-xl">"Some stories are written in the stars." ✨</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-midnight/80 backdrop-blur-md z-50 flex items-center justify-between px-6 border-b border-white/5">
        <button onClick={handleFeatherClick} className="flex items-center gap-2">
          <Feather className="text-warm-gold" size={20} />
          <span className="font-serif text-xl text-parchment tracking-widest">H&H</span>
        </button>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 -mr-2 text-soft-lavender hover:text-white transition-colors">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-midnight/95 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col h-[100dvh] overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex items-center gap-4 py-4 px-6 rounded-2xl text-lg font-medium transition-all duration-300 text-left",
                    activeSection === item.id ? "bg-white/10 text-warm-gold shadow-[0_0_20px_rgba(212,175,55,0.15)]" : "text-soft-lavender/70 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <item.icon size={24} className={activeSection === item.id ? "text-warm-gold" : ""} />
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-auto pt-10 pb-6 text-center text-xs text-soft-lavender/40 font-serif">
              For Tokyo, from Harry
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-72 bg-midnight/50 backdrop-blur-md border-r border-white/5 z-30 fixed top-0 left-0 h-screen overflow-y-auto custom-scrollbar">
        <div className="p-10 flex flex-col items-center">
          <button onClick={handleFeatherClick} className="w-16 h-16 mb-6 rounded-full bg-gradient-to-tr from-warm-gold/20 to-deep-purple flex items-center justify-center border border-warm-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:scale-105 transition-transform">
            <Sparkles className="text-warm-gold" size={28} />
          </button>
          <h2 className="font-serif text-2xl font-semibold text-parchment text-center tracking-wide">
            Our Memory<br />Universe
          </h2>
        </div>

        <nav className="flex-1 px-6 pb-10 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "flex items-center gap-4 py-3.5 px-5 rounded-xl text-[15px] font-medium transition-all duration-300 group text-left w-full",
                activeSection === item.id ? "bg-white/10 text-warm-gold shadow-[0_0_15px_rgba(212,175,55,0.1)]" : "text-soft-lavender/70 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon size={20} className={cn(
                "transition-transform duration-300 group-hover:scale-110",
                activeSection === item.id ? "text-warm-gold" : "text-soft-lavender/50"
              )} />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="w-full min-w-0 relative z-10 pt-16 md:pt-0 md:ml-72 scroll-smooth overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
