import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Sparkles, Heart } from 'lucide-react';
import type { Letter } from '../../data/letters';
import { AnimeSticker } from '../AnimeSticker';

interface LetterCardProps {
  letter: Letter;
  autoOpen?: boolean;
  rotationAngle?: number;
}

export function LetterCard({ letter, autoOpen = false, rotationAngle = 0 }: LetterCardProps) {
  const [isOpen, setIsOpen] = useState(autoOpen);

  useEffect(() => {
    if (autoOpen) {
      setIsOpen(true);
    }
  }, [autoOpen]);

  const isSpecial = letter.isSpecial || letter.id === 'letter-final';

  return (
    <>
      {/* Physical Envelope Card */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`w-full text-left rounded-2xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 group ${
          isSpecial
            ? 'envelope bg-gradient-to-br from-[#f5e6d0] via-[#eed8be] to-[#e6ccb2] border-2 border-blush/60 shadow-xl hover:shadow-2xl hover:border-blush'
            : 'envelope bg-gradient-to-br from-[#f8eee0] via-[#e8dcc4] to-[#ded0b8] border border-warm-brown/30 shadow-lg hover:shadow-xl hover:border-warm-brown/60'
        }`}
        style={{ transform: `rotate(${rotationAngle}deg)` }}
        whileHover={{ y: -6, rotate: 0, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Physical Anime Sticker peeking from behind envelope corner */}
        <div className="absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-4 z-20 pointer-events-none opacity-90">
          <AnimeSticker sectionKey={`envelope-${letter.id}`} size={48} animation="idle" />
        </div>

        {/* Tape detail */}
        <div className="tape absolute -top-2 left-1/2 -translate-x-1/2" />

        {/* Envelope stamp / seal badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          {isSpecial ? (
            <div className="wax-seal">
              <Sparkles size={20} className="text-yellow-200" />
            </div>
          ) : (
            <div className="wax-seal">
              <span className="font-serif text-amber-200 text-lg font-bold">H</span>
            </div>
          )}
        </div>

        <div className="pr-14">
          <span className={`text-[11px] font-sans font-semibold tracking-widest uppercase block mb-1.5 ${
            isSpecial ? 'text-rose-800 font-bold' : 'text-amber-900/80'
          }`}>
            {letter.category}
          </span>

          <h3 className={`text-2xl sm:text-3xl font-serif mb-2 leading-snug ${
            isSpecial ? 'text-rose-950 font-bold' : 'text-gray-900'
          }`}>
            {letter.title}
          </h3>

          <p className="text-xs sm:text-sm font-handwriting text-gray-700/80 mb-4 line-clamp-2 leading-relaxed">
            "{letter.preview}"
          </p>

          <div className="flex items-center justify-between text-xs text-gray-600 border-t border-black/10 pt-3">
            <span className="font-sans text-[11px] text-gray-500">{letter.date}</span>
            <span className={`font-serif font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1 ${
              isSpecial ? 'text-rose-800' : 'text-amber-900'
            }`}>
              Open letter <Mail size={14} />
            </span>
          </div>
        </div>
      </motion.button>

      {/* Full Letter Parchment Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-scrapbook-bg/90 backdrop-blur-md"
            />

            {/* Parchment Paper Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className="relative w-full max-w-2xl max-h-[85vh] flex flex-col z-10 my-auto"
            >
              <div className="parchment-texture rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] border border-[#e8dcc4] relative">
                {/* Wax Seal Decoration */}
                <div className="absolute top-4 right-12 hidden sm:flex items-center justify-center">
                  <div className="wax-seal rotate-12 transform scale-110">
                    {isSpecial ? (
                      <Sparkles size={22} className="text-yellow-200" />
                    ) : (
                      <Heart size={20} className="text-amber-200 fill-amber-200" />
                    )}
                  </div>
                </div>

                {/* Modal Header */}
                <div className="flex justify-between items-start p-6 sm:p-8 border-b border-black/10 pr-16">
                  <div>
                    <span className="text-xs font-sans font-semibold tracking-wider text-rose-800 uppercase block mb-1">
                      {letter.category}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 font-bold">{letter.title}</h2>
                    <p className="text-gray-600 text-xs font-sans mt-1">{letter.date}</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-black/5 transition-colors absolute top-4 right-4"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Letter Content */}
                <div className="p-6 sm:p-10 overflow-y-auto flex-1 custom-scrollbar">
                  <div className="font-handwriting text-2xl sm:text-3xl text-gray-900 leading-relaxed whitespace-pre-wrap">
                    {letter.content}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 bg-black/5 border-t border-black/10 text-center relative">
                  {/* Subtle sticker hidden at bottom right of letter parchment */}
                  <div className="absolute -bottom-3 right-4 pointer-events-none z-20 opacity-85">
                    <AnimeSticker sectionKey={`letter-content-${letter.id}`} size={46} animation="peek" />
                  </div>
                  <span className="font-handwriting text-gray-600 text-lg">
                    Written with care for Kullachi ♡
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
