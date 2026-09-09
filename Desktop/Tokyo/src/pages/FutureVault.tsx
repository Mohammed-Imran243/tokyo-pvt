import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Key, Sparkles } from 'lucide-react';

export function FutureVault() {
  const [isLocked, setIsLocked] = useState(true);
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  const correctPin = '1234';

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.trim() === correctPin) {
      setIsLocked(false);
      setError(false);
    } else {
      setError(true);
      setShaking(true);
      setPin('');
      setTimeout(() => setShaking(false), 600);
      setTimeout(() => setError(false), 2500);
    }
  };

  return (
    <div className="py-8 md:py-12 max-w-2xl mx-auto px-4 min-h-[75vh] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {isLocked ? (
          <motion.div
            key="locked"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="paper-texture rounded-3xl p-8 sm:p-12 text-center border border-warm-brown/30 shadow-2xl relative overflow-hidden">
              {/* Glass Vault Glow Detail */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-blush/10 blur-[80px] pointer-events-none" />

              {/* Lock Visual Icon */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-20 h-20 mx-auto mb-6 bg-scrapbook-bg/70 rounded-full flex items-center justify-center border border-warm-brown/30 shadow-xl relative"
              >
                <Lock size={30} className="text-blush" />
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-gold animate-ping opacity-40" />
              </motion.div>

              <span className="text-xs font-sans tracking-widest uppercase text-blush block mb-1 font-medium">
                Secret Memory Box
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl text-cream mb-2">
                Future Vault 🔒
              </h1>

              <p className="font-handwriting text-xl text-cream/60 mb-8 italic">
                "Letters reserved for the right time."
              </p>

              {/* Lock Form */}
              <form onSubmit={handleUnlock} className="max-w-xs mx-auto flex flex-col gap-4">
                <motion.div
                  animate={shaking ? { x: [-8, 8, -6, 6, -4, 4, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <input
                    type="password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="Enter PIN"
                    maxLength={10}
                    className={`w-full bg-scrapbook-bg/60 border ${
                      error
                        ? 'border-red-400/80 text-red-300'
                        : 'border-warm-brown/30 text-cream focus:border-blush/60'
                    } rounded-xl py-3.5 px-4 text-center text-xl tracking-[0.4em] font-mono focus:outline-none transition-colors placeholder:font-sans placeholder:text-sm placeholder:tracking-normal placeholder:text-cream/30`}
                  />
                </motion.div>

                {error && (
                  <p className="text-red-400/80 text-xs font-sans">
                    Incorrect PIN code...
                  </p>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 bg-blush/15 hover:bg-blush/25 border border-blush/30 text-cream font-serif text-base rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Key size={16} className="text-blush" />
                  Unlock Vault
                </motion.button>
              </form>

              <p className="mt-8 text-[11px] font-sans text-cream/30">
                Default PIN: 1234
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-blush/15 rounded-full flex items-center justify-center border border-blush/30 shadow-xl">
              <Unlock size={32} className="text-blush" />
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl text-cream mb-3">
              The Vault is Open ✨
            </h1>

            <p className="font-handwriting text-2xl text-blush-light mb-8">
              Welcome to the future chapters for Kullachi ♡
            </p>

            <div className="paper-texture rounded-3xl p-10 sm:p-14 border border-warm-brown/20 flex flex-col items-center justify-center min-h-[260px] shadow-xl">
              <Sparkles size={36} className="text-warm-gold mb-4 animate-pulse" />
              <p className="font-handwriting text-2xl sm:text-3xl text-cream/70 leading-relaxed mb-2">
                "Future letters, memories, and promises will appear here as time unfolds."
              </p>
              <p className="text-xs font-sans text-cream/40 mt-4">
                Thank you for being in my story ♡
              </p>
            </div>

            <button
              onClick={() => setIsLocked(true)}
              className="mt-8 text-xs font-sans text-cream/40 hover:text-cream/80 underline underline-offset-4"
            >
              Lock vault again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
