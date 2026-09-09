import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Info, HeartHandshake, LogOut, ChevronRight, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function MoreMenu() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    {
      to: '/about',
      icon: Info,
      title: 'About Us',
      subtitle: 'The special bond & promises we share',
      accent: 'text-blush',
    },
    {
      to: '/letters?special=true',
      icon: HeartHandshake,
      title: 'Special Note',
      subtitle: 'A letter I never want you to forget ♡',
      accent: 'text-warm-gold',
    },
  ];

  return (
    <div className="py-8 max-w-xl mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <span className="text-xs font-sans tracking-widest uppercase text-blush block mb-1">
          Explore
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-cream mb-2">
          More Pages <Sparkles size={20} className="inline text-warm-gold" />
        </h1>
        <p className="font-handwriting text-lg text-cream/50">
          Little extra corners of our secret world.
        </p>
      </motion.div>

      {/* Menu Options */}
      <div className="space-y-4 mb-8">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.to}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.1 }}
          >
            <Link
              to={item.to}
              className="paper-texture block p-5 rounded-2xl border border-warm-brown/20 shadow-lg hover:border-blush/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-scrapbook-bg/60 border border-warm-brown/20 ${item.accent}`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl text-cream group-hover:text-blush transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs text-cream/50 font-sans mt-0.5">{item.subtitle}</p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-cream/30 group-hover:text-blush group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Logout Option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={handleLogout}
            className="w-full text-left paper-texture block p-5 rounded-2xl border border-red-500/20 shadow-lg hover:border-red-500/40 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-scrapbook-bg/60 border border-red-500/20 text-red-400">
                  <LogOut size={24} />
                </div>
                <div>
                  <h2 className="font-serif text-xl text-cream group-hover:text-red-300 transition-colors">
                    Lock Scrapbook
                  </h2>
                  <p className="text-xs text-cream/50 font-sans mt-0.5">Return to entry screen</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-cream/30 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="text-center pt-8 border-t border-warm-brown/15">
        <p className="font-handwriting text-xl text-cream/40 mb-1">
          Made for Kullachi ♡
        </p>
        <p className="text-[11px] font-sans text-cream/25">
          A secret digital space built just for you
        </p>
      </div>
    </div>
  );
}
