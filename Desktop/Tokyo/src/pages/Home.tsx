import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function Home() {
  const scrollToJourney = () => {
    const el = document.getElementById('journey');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      
      {/* Starry Night Sky Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-white rounded-full animate-twinkle opacity-70"></div>
        <div className="absolute top-[30%] right-[25%] w-1.5 h-1.5 bg-warm-gold rounded-full animate-twinkle opacity-90" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[50%] left-[45%] w-1 h-1 bg-white rounded-full animate-twinkle opacity-50" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-[20%] right-[15%] w-2 h-2 bg-subtle-pink rounded-full animate-twinkle opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-[70%] left-[10%] w-1 h-1 bg-white rounded-full animate-twinkle opacity-40" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[15%] right-[40%] w-1.5 h-1.5 bg-warm-gold rounded-full animate-twinkle opacity-60" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-[40%] right-[30%] w-1 h-1 bg-white rounded-full animate-twinkle opacity-80" style={{ animationDelay: '4s' }}></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10 flex flex-col items-center max-w-2xl w-full"
      >
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
          className="mb-8 relative"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/10 bg-gradient-to-b from-indigo-900/30 to-midnight flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(100,50,200,0.15)] relative">
             <div className="absolute bottom-0 w-full h-[60%] bg-midnight rounded-t-[100px] opacity-90 border-t border-white/5 flex items-end justify-center px-4">
                <div className="w-12 h-24 bg-black rounded-t-full mx-1 opacity-80" />
                <div className="w-10 h-20 bg-black rounded-t-full mx-1 opacity-80" />
             </div>
             <div className="absolute top-8 right-10 w-12 h-12 rounded-full bg-parchment shadow-[0_0_20px_#fdf5e6] opacity-80" />
          </div>
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-parchment mb-4 tracking-wide font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          Harry & Hermione <span className="text-warm-gold">♡</span>
        </h1>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="font-script text-3xl md:text-4xl text-subtle-pink mb-10 transform -rotate-2"
        >
          <p className="mb-2">"After all this time?"</p>
          <p className="ml-12 text-warm-gold text-4xl md:text-5xl">"Always."</p>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 1.5 }}
          className="text-soft-lavender/80 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg mx-auto"
        >
          A private space for our memories, our bond and everything we don't always know how to say.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <button 
            onClick={scrollToJourney}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-parchment font-medium rounded-full overflow-hidden transition-all duration-500 border border-white/10 hover:border-warm-gold/50 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] backdrop-blur-sm"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative text-lg tracking-wide flex items-center gap-2">
              Enter Our World <Sparkles size={18} className="text-warm-gold animate-pulse" />
            </span>
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}
