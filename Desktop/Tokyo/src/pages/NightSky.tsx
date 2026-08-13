import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';
import { starsData, type StarMemory } from '../data/stars';

export function NightSky() {
  const [selectedStar, setSelectedStar] = useState<StarMemory | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const starsWithDelays = starsData.map(star => ({
    ...star,
    twinkleDelay: Math.random() * 5,
    twinkleDuration: 3 + Math.random() * 4
  }));

  return (
    <section id="night-sky" className="relative w-full min-h-screen overflow-hidden select-none" ref={containerRef}>
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-midnight to-midnight pointer-events-none" />
      
      {/* Title */}
      <div className="relative z-20 pt-12 px-6 md:pt-16 md:px-10 mb-8 pointer-events-none">
        <h1 className="text-3xl md:text-5xl font-serif text-parchment drop-shadow-lg mb-2">Night Sky ✨</h1>
        <p className="text-soft-lavender/70 text-sm md:text-base tracking-wide">
          "Every star here is a memory of ours."
        </p>
        <p className="text-xs text-white/30 mt-2 block md:hidden">Tap a star to explore</p>
      </div>

      {/* Star Field */}
      <div className="relative w-full" style={{ height: '70vh' }}>
        {/* Constellation Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          {starsWithDelays.map((star, i) => {
            if (i === starsWithDelays.length - 1) return null;
            const nextStar = starsWithDelays[i + 1];
            const dist = Math.sqrt(Math.pow(star.x - nextStar.x, 2) + Math.pow(star.y - nextStar.y, 2));
            if (dist < 20) {
              return (
                <line 
                  key={`line-${i}`}
                  x1={`${star.x}%`} y1={`${star.y}%`}
                  x2={`${nextStar.x}%`} y2={`${nextStar.y}%`}
                  stroke="#e6e6fa" strokeWidth="0.5"
                  strokeDasharray="2 4"
                />
              )
            }
            return null;
          })}
        </svg>

        {/* Stars */}
        {starsWithDelays.map((star) => (
          <button
            key={star.id}
            onClick={() => setSelectedStar(star)}
            className="absolute group z-10 transform -translate-x-1/2 -translate-y-1/2 p-4"
            style={{ left: `${star.x}%`, top: `${star.y}%` }}
            aria-label={`View memory: ${star.title}`}
          >
            <motion.div 
              className={`rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300 ${selectedStar?.id === star.id ? 'scale-[2.5] bg-warm-gold shadow-[0_0_20px_rgba(212,175,55,0.8)]' : 'group-hover:scale-150 group-hover:bg-warm-gold'}`}
              style={{ 
                width: `${Math.max(star.size * 3, 4)}px`, 
                height: `${Math.max(star.size * 3, 4)}px`,
                animation: `twinkle ${star.twinkleDuration}s ease-in-out infinite`,
                animationDelay: `${star.twinkleDelay}s`
              }}
            />
            
            {/* Tooltip (desktop) */}
            <div className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded border border-white/10 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {star.title}
            </div>
          </button>
        ))}
      </div>

      {/* Memory Modal */}
      <AnimatePresence>
        {selectedStar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedStar(null)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-midnight/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedStar(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white/70 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              {selectedStar.image && (
                <div className="w-full h-48 md:h-64 relative">
                  <img src={selectedStar.image} alt={selectedStar.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent" />
                </div>
              )}

              <div className={`p-6 md:p-8 ${!selectedStar.image ? 'pt-12' : ''}`}>
                <div className="flex items-center gap-2 text-warm-gold/80 text-sm mb-3">
                  <Calendar size={14} />
                  <span>{selectedStar.date}</span>
                </div>
                
                <h3 className="text-2xl font-serif text-parchment mb-4">{selectedStar.title}</h3>
                
                <p className="text-soft-lavender/80 leading-relaxed font-light">
                  {selectedStar.description}
                </p>
                
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                  <span className="text-xs text-white/30 font-serif italic">A memory preserved</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
