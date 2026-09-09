import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData } from '../data/memories';
import { X, Heart, ChevronLeft, ChevronRight, Maximize2, Film, Image as ImageIcon } from 'lucide-react';
import { AnimeSticker } from '../components/AnimeSticker';

export function Memories() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMode, setActiveMode] = useState<'photos' | 'videos'>('photos');
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [fullscreenItem, setFullscreenItem] = useState<any>(null);
  const touchStartX = useRef<number | null>(null);

  // Separate photos (41) and videos (10) strictly
  const photosList = useMemo(() => galleryData.filter((item) => item.type === 'photo'), []);
  const videosList = useMemo(() => galleryData.filter((item) => item.type === 'video'), []);

  const currentList = activeMode === 'photos' ? photosList : videosList;
  const totalPages = currentList.length;

  const currentItem = currentList[currentPage] || currentList[0];

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const switchMode = (mode: 'photos' | 'videos') => {
    if (mode !== activeMode) {
      setActiveMode(mode);
      setCurrentPage(0);
      setDirection(1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (fullscreenItem) {
        if (e.key === 'Escape') setFullscreenItem(null);
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPage, totalPages, fullscreenItem, activeMode]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center py-2 px-2 sm:px-4 select-none">
      {/* Top Header Text */}
      <div className="text-center mb-2 sm:mb-4 z-10">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream font-medium tracking-wider drop-shadow-md">
          Memories
        </h1>
        <p className="font-serif italic text-base sm:text-xl text-blush mt-0.5 flex items-center justify-center gap-1.5 drop-shadow">
          for Kullachi <Heart className="w-4 h-4 text-blush fill-blush inline" />
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* ==================================================
             STATE A — REALISTIC 3D PHYSICAL MAGICAL BOOK
             ================================================== */
          <motion.div
            key="3d-book-cover"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.9,
              rotateY: -80,
              transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[340px] sm:max-w-md md:max-w-lg aspect-[3/4.3] relative cursor-pointer group flex flex-col items-center justify-between p-6 sm:p-8"
            onClick={() => setIsOpen(true)}
            style={{ perspective: '1200px' }}
          >
            {/* Ambient Candlelight Glow Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(234,179,8,0.15)_0%,_transparent_70%)] pointer-events-none rounded-3xl" />

            {/* Physical Anime Stickers peeking from behind book cover & sitting near candle glow */}
            <div className="absolute -top-6 -right-5 sm:-top-8 sm:-right-7 z-20 pointer-events-none">
              <AnimeSticker sectionKey="memories-book-tr" size={60} animation="peek" />
            </div>
            <div className="absolute -bottom-5 -left-4 sm:-bottom-7 sm:-left-6 z-20 pointer-events-none">
              <AnimeSticker sectionKey="memories-book-bl" size={54} animation="idle" />
            </div>

            {/* Floating Magical Particle Orbs */}
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3], y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 right-6 w-12 h-12 rounded-full bg-amber-400/20 blur-xl pointer-events-none"
            />
            <motion.div
              animate={{ opacity: [0.2, 0.6, 0.2], y: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute bottom-8 -left-4 w-16 h-16 rounded-full bg-amber-500/15 blur-xl pointer-events-none"
            />

            {/* 3D Physical Book Structure Container */}
            <motion.div
              whileHover={{ rotateY: -6, scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full relative rounded-2xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 border border-amber-900/60 shadow-[0_30px_60px_rgba(0,0,0,0.95)]"
              style={{
                backgroundImage: `url('/memories/book-cover.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow:
                  '0 25px 60px rgba(0,0,0,0.95), inset 0 0 40px rgba(0,0,0,0.7), inset 0 0 10px rgba(212,175,55,0.3)',
              }}
            >
              {/* Realistic Leather Grain & Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60 pointer-events-none" />

              {/* Physical Book Spine Ridge (3D left shadow) */}
              <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-8 bg-gradient-to-r from-black/90 via-black/40 to-transparent border-r border-amber-500/30 z-10" />

              {/* Physical Page Edges (Right side depth indicator) */}
              <div className="absolute top-2 bottom-2 right-0 w-2 sm:w-3 bg-gradient-to-l from-amber-100/40 via-amber-200/20 to-transparent border-l border-amber-900/50 shadow-inner z-10" />

              {/* Cover Header */}
              <div className="text-center relative z-20 pt-2">
                <span className="text-[10px] sm:text-xs font-serif uppercase tracking-[0.35em] text-amber-200/90 block mb-1 drop-shadow-md">
                  The Magical Tome
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 font-bold uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  MEMORIES OF US
                </h2>
              </div>

              {/* Subtle Touch/Click Callout Banner at Bottom of Book */}
              <div className="text-center relative z-20 pb-2">
                <div className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-amber-950/80 border border-amber-400/50 text-amber-200 font-serif text-xs sm:text-sm tracking-wider shadow-lg group-hover:border-amber-300 group-hover:bg-amber-900/90 transition-all">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>Tap to open book</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* ==================================================
             STATE B — OPEN MEMORY BOOK (INSIDE PAGES)
             ================================================== */
          <motion.div
            key="book-open"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl flex flex-col items-center select-none"
          >
            {/* Mode Selector Tabs (Photo Book vs Video Chapter) */}
            <div className="flex items-center gap-2 mb-3">
              <button
                onClick={() => switchMode('photos')}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-serif flex items-center gap-1.5 transition-all ${
                  activeMode === 'photos'
                    ? 'bg-amber-400 text-amber-950 font-bold shadow-md'
                    : 'bg-amber-950/60 text-amber-200/70 border border-amber-500/30 hover:text-amber-100'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Photo Book ({photosList.length})</span>
              </button>
              <button
                onClick={() => switchMode('videos')}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-serif flex items-center gap-1.5 transition-all ${
                  activeMode === 'videos'
                    ? 'bg-amber-400 text-amber-950 font-bold shadow-md'
                    : 'bg-amber-950/60 text-amber-200/70 border border-amber-500/30 hover:text-amber-100'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>Video Chapter ({videosList.length})</span>
              </button>
            </div>

            {/* Magical Book Outer Frame (Open Parchment Pages) */}
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="w-full aspect-[4/5.2] sm:aspect-[4/3] max-h-[70vh] sm:max-h-[74vh] relative rounded-2xl p-3 sm:p-6 md:p-8 flex flex-col items-center justify-center overflow-hidden border-4 border-[#3d2414] shadow-2xl"
              style={{
                backgroundColor: '#f6eedc',
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
                boxShadow: 'inset 0 0 50px rgba(60, 35, 15, 0.3), 0 25px 50px rgba(0, 0, 0, 0.85)',
              }}
            >
              {/* Anime sticker peeking from behind open page corner */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 z-30 pointer-events-none">
                <AnimeSticker sectionKey="memories-open-book-corner" size={48} animation="bounce" />
              </div>
              {/* Ornate Corner Elements */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-amber-900/40 rounded-tl-sm pointer-events-none" />
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-amber-900/40 rounded-tr-sm pointer-events-none" />
              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-amber-900/40 rounded-bl-sm pointer-events-none" />
              <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-amber-900/40 rounded-br-sm pointer-events-none" />

              {/* Book Spine Center Shadow */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 sm:w-12 bg-gradient-to-r from-transparent via-amber-950/20 to-transparent pointer-events-none z-10" />

              {/* Animated Page Flip */}
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={`${activeMode}-${currentPage}`}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    rotateY: direction > 0 ? 40 : -40,
                    scale: 0.96,
                  }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    rotateY: direction > 0 ? -40 : 40,
                    scale: 0.96,
                  }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="w-full h-full flex items-center justify-center relative z-0 p-1"
                >
                  {activeMode === 'videos' ? (
                    /* VIDEO PAGE — CLEAN DISPLAY WITHOUT TEXT METADATA */
                    <div className="w-full h-full flex items-center justify-center relative">
                      <video
                        src={currentItem.url}
                        controls
                        playsInline
                        preload="metadata"
                        className="max-w-full max-h-full object-contain rounded-lg shadow-lg border border-amber-950/30"
                      />
                    </div>
                  ) : (
                    /* PHOTO PAGE — CLEAN DISPLAY WITHOUT TEXT METADATA */
                    <div
                      className="w-full h-full flex items-center justify-center relative group cursor-pointer"
                      onClick={() => setFullscreenItem(currentItem)}
                    >
                      <img
                        src={currentItem.url}
                        alt="Memory"
                        className="max-w-full max-h-full object-contain rounded-lg shadow-md border border-amber-950/20 transition-transform duration-300 group-hover:scale-[1.01]"
                        loading="eager"
                      />
                      <div className="absolute bottom-3 right-3 p-2 rounded-full bg-amber-950/70 text-amber-100 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Unobtrusive Page Progress Indicator */}
            <div className="mt-3 text-amber-200/80 font-serif text-sm tracking-widest">
              {currentPage + 1} / {totalPages}
            </div>

            {/* Bottom Controls */}
            <div className="w-full flex items-center justify-between mt-3 px-2">
              <button
                onClick={handlePrev}
                disabled={currentPage === 0}
                className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-xl text-xs sm:text-sm font-serif flex items-center gap-1.5 transition-all ${
                  currentPage === 0
                    ? 'opacity-30 cursor-not-allowed bg-amber-950/20 text-amber-300/40 border border-transparent'
                    : 'bg-amber-950/80 hover:bg-amber-900 text-amber-100 border border-amber-500/40 shadow-md active:scale-95'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-1.5 rounded-full text-xs font-serif text-amber-300/70 hover:text-amber-100 transition-colors"
              >
                Close Book
              </button>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages - 1}
                className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-xl text-xs sm:text-sm font-serif flex items-center gap-1.5 transition-all ${
                  currentPage === totalPages - 1
                    ? 'opacity-30 cursor-not-allowed bg-amber-950/20 text-amber-300/40 border border-transparent'
                    : 'bg-amber-950/80 hover:bg-amber-900 text-amber-100 border border-amber-500/40 shadow-md active:scale-95'
                }`}
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Photo Lightbox */}
      <AnimatePresence>
        {fullscreenItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setFullscreenItem(null)}
          >
            <button
              onClick={() => setFullscreenItem(null)}
              className="absolute top-4 right-4 z-[110] p-2.5 rounded-full bg-black/60 text-white hover:bg-white/20 border border-white/30 transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={fullscreenItem.url}
              alt="Memory Fullscreen"
              className="max-w-full max-h-[90vh] object-contain rounded-md"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
