import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Key } from 'lucide-react';

export function FutureVault() {
  const [isLocked, setIsLocked] = useState(true);
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const correctPin = '1234';

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === correctPin) {
      setIsLocked(false);
      setError(false);
    } else {
      setError(true);
      setPin('');
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <section id="future-vault" className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px]" />
      </div>

      <AnimatePresence mode="wait">
        {isLocked ? (
          <motion.div
            key="locked"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-md"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-warm-gold/50 to-transparent" />
              
              <div className="w-20 h-20 mx-auto mb-8 bg-black/40 rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <Lock size={32} className="text-warm-gold/80" />
              </div>
              
              <h1 className="text-3xl font-serif text-parchment mb-4 tracking-wide">Future Vault 🔒</h1>
              <p className="text-soft-lavender/60 text-sm mb-10 italic">
                "Letters for the right time."
              </p>

              <form onSubmit={handleUnlock} className="flex flex-col gap-6">
                <div className="relative">
                  <input
                    type="password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="Enter Password"
                    className={`w-full bg-black/20 border ${error ? 'border-red-500 text-red-500' : 'border-white/10 text-white'} rounded-xl py-4 px-6 text-center text-xl tracking-[0.5em] focus:outline-none focus:border-warm-gold/50 transition-colors`}
                  />
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="absolute -bottom-6 left-0 w-full text-center text-xs text-red-400"
                    >
                      Incorrect key
                    </motion.div>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-colors border border-white/5 mt-2"
                >
                  <Key size={18} className="text-warm-gold" />
                  Enter Vault
                </motion.button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 w-full max-w-4xl text-center"
          >
            <div className="w-16 h-16 mx-auto mb-8 bg-warm-gold/10 rounded-full flex items-center justify-center border border-warm-gold/30">
              <Unlock size={28} className="text-warm-gold" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif text-parchment mb-6">The Vault is Open</h1>
            <p className="text-soft-lavender/80 text-lg mb-12 max-w-2xl mx-auto">
              Welcome to the future chapters.
            </p>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
              <p className="text-soft-lavender/50 text-xl font-serif italic">
                Future letters will appear here...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
