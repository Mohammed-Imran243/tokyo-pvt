import { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Sparkles, Moon, Heart } from 'lucide-react';
import { starsData, type StarMemory } from '../data/stars';
import { AnimeSticker } from '../components/AnimeSticker';

export function NightSky() {
  const [selectedStar, setSelectedStar] = useState<StarMemory | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize twinkle properties to avoid random re-renders
  const starsWithDelays = useMemo(() => {
    return starsData.map((star, i) => ({
      ...star,
      twinkleDelay: (i * 0.2) % 3,
      twinkleDuration: 2.5 + ((i % 4) * 0.5),
    }));
  }, []);

  return (
    <div className="relative w-full min-h-[85vh] py-8 md:py-12 select-none overflow-hidden" ref={containerRef}>
      {/* Immersive background sky elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-4 right-8 text-cream/10 md:text-cream/15 transform rotate-12">
          <Moon size={120} strokeWidth={1} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-scrapbook-bg via-scrapbook-bg/80 to-transparent" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 text-center mb-6 md:mb-10 px-4"
      >
        <span className="text-xs font-sans tracking-widest uppercase text-blush block mb-1 font-medium">
          Under the same sky
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream mb-2">
          Night Sky <Sparkles size={28} className="inline text-warm-gold" />
        </h1>

        <p className="font-handwriting text-xl sm:text-2xl text-cream/60 max-w-md mx-auto">
          "Some memories deserve their own star. ♡"
        </p>
        <p className="text-xs font-sans text-cream/40 mt-2">Tap any star to reveal its memory</p>
      </motion.div>

      {/* Interactive Star Field */}
      <div className="relative w-full h-[62vh] sm:h-[68vh] border border-warm-brown/15 rounded-3xl bg-scrapbook-surface/40 backdrop-blur-xs overflow-hidden shadow-2xl">
        {/* SVG Constellation Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          {starsWithDelays.map((star, i) => {
            if (i === starsWithDelays.length - 1) return null;
            const nextStar = starsWithDelays[i + 1];
            const dist = Math.sqrt(Math.pow(star.x - nextStar.x, 2) + Math.pow(star.y - nextStar.y, 2));
            if (dist < 25) {
              return (
                <line
                  key={`line-${i}`}
                  x1={`${star.x}%`}
                  y1={`${star.y}%`}
                  x2={`${nextStar.x}%`}
                  y2={`${nextStar.y}%`}
                  stroke="#e8a0b4"
                  strokeWidth="0.8"
                  strokeDasharray="2 4"
                />
              );
            }
            return null;
          })}
        </svg>

        {/* Stars */}
        {starsWithDelays.map((star) => {
          const isSelected = selectedStar?.id === star.id;

          return (
            <button
              key={star.id}
              onClick={() => setSelectedStar(star)}
              className="absolute group z-10 transform -translate-x-1/2 -translate-y-1/2 p-3 sm:p-4 touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center"
              style={{ left: `${star.x}%`, top: `${star.y}%` }}
              aria-label={`View memory: ${star.title}`}
            >
              <motion.div
                className={`rounded-full bg-cream transition-all duration-300 relative ${
                  isSelected
                    ? 'scale-[2.8] bg-blush shadow-[0_0_25px_rgba(232,160,180,1)]'
                    : 'group-hover:scale-150 group-hover:bg-blush'
                }`}
                style={{
                  width: `${Math.max(star.size * 3.5, 6)}px`,
                  height: `${Math.max(star.size * 3.5, 6)}px`,
                  animation: isSelected ? 'none' : `twinkle ${star.twinkleDuration}s ease-in-out infinite`,
                  animationDelay: `${star.twinkleDelay}s`,
                  boxShadow: isSelected ? '0 0 20px #e8a0b4' : '0 0 10px rgba(253, 245, 230, 0.7)',
                }}
              >
                {/* Glow ring on active selection */}
                {isSelected && (
                  <span className="absolute -inset-2 rounded-full border border-blush/60 animate-ping" />
                )}
              </motion.div>

              {/* Desktop Tooltip */}
              <div className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1 bg-scrapbook-bg/90 backdrop-blur-md rounded-lg border border-warm-brown/30 text-cream text-xs font-serif whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                {star.title}
              </div>
            </button>
          );
        })}
        {/* Anime stickers sitting at bottom landscape edges looking up toward stars */}
        <div className="absolute bottom-2 left-4 sm:left-8 z-20 pointer-events-none">
          <AnimeSticker sectionKey="nightsky-landscape-left" size={48} animation="idle" />
        </div>
        <div className="absolute bottom-2 right-4 sm:right-8 z-20 pointer-events-none">
          <AnimeSticker sectionKey="nightsky-landscape-right" size={44} animation="peek" />
        </div>
      </div>

      {/* Star Memory Modal */}
      <AnimatePresence>
        {selectedStar && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-scrapbook-bg/95 backdrop-blur-xl p-2 sm:p-6 overflow-hidden">
            {/* Top Right High-Visibility Close Button */}
            <button
              onClick={() => setSelectedStar(null)}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 z-[110] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-scrapbook-card/90 hover:bg-blush/20 text-cream border border-blush/40 shadow-xl flex items-center gap-1.5 text-xs sm:text-sm font-sans font-medium transition-all active:scale-95"
              aria-label="Close star memory"
            >
              <X size={18} className="text-blush" />
              <span>Close</span>
            </button>

            {/* Backdrop click to close */}
            <div
              className="absolute inset-0 z-0"
              onClick={() => setSelectedStar(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md sm:max-w-lg max-h-[92vh] sm:max-h-[85vh] overflow-y-auto custom-scrollbar z-10 my-auto flex flex-col items-center p-1"
            >
              {/* Polaroid Photo Frame */}
              <div className="polaroid rounded-xl shadow-2xl border border-warm-brown/20 w-full p-3 sm:p-5 relative flex flex-col items-center">
                {/* Tape detail */}
                <div className="tape absolute -top-3 left-1/2 -translate-x-1/2" />

                {/* 1. COMPLETE IMAGE / VIDEO FITS HERE */}
                <div className="w-full max-h-[46vh] sm:max-h-[54vh] flex items-center justify-center bg-black/30 rounded-lg p-1.5 mb-3 relative overflow-hidden shadow-inner">
                  {selectedStar.image.endsWith('.mp4') || selectedStar.image.endsWith('.webm') || selectedStar.image.endsWith('.mov') ? (
                    <video
                      src={selectedStar.image}
                      controls
                      playsInline
                      className="max-w-full max-h-[44vh] sm:max-h-[50vh] w-auto h-auto object-contain rounded-md shadow-md mx-auto"
                    />
                  ) : (
                    <img
                      src={selectedStar.image}
                      alt={selectedStar.title}
                      className="max-w-full max-h-[44vh] sm:max-h-[50vh] w-auto h-auto object-contain rounded-md shadow-md mx-auto"
                    />
                  )}
                  <div className="absolute top-2 right-2 bg-scrapbook-bg/85 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-sans text-cream/90 flex items-center gap-1 border border-cream/10 z-10 max-w-[75%] truncate">
                    <Sparkles size={11} className="text-blush shrink-0" />
                    <span className="truncate">{selectedStar.title}</span>
                  </div>
                </div>

                {/* 2. Actual Filename Title */}
                <div className="text-center w-full px-2">
                  <h3 className="font-serif text-lg sm:text-2xl text-gray-900 font-bold mb-1 break-all leading-snug">
                    ✦ {selectedStar.title}
                  </h3>

                  <span className="text-[11px] font-sans text-amber-900/80 font-medium flex items-center justify-center gap-1 mb-2">
                    <Calendar size={12} /> {selectedStar.date}
                  </span>

                  <p className="font-handwriting text-base sm:text-xl text-gray-800 italic leading-relaxed mb-3">
                    "{selectedStar.description}"
                  </p>

                  <div className="pt-2 border-t border-black/10 flex items-center justify-between text-[11px] font-sans text-gray-600 mb-2">
                    <span className="flex items-center gap-1 text-rose-800 font-medium">
                      <Heart size={12} className="fill-rose-800" /> Preserved Star
                    </span>
                    <span className="italic font-handwriting text-xs sm:text-sm text-gray-500">Preserved in sky ♡</span>
                  </div>

                  {/* Close Action Button */}
                  <button
                    onClick={() => setSelectedStar(null)}
                    className="w-full py-2.5 px-4 bg-gray-900 text-cream text-xs sm:text-sm font-sans rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-95 shadow-md"
                  >
                    <X size={16} className="text-blush" />
                    <span>Done / Close</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
