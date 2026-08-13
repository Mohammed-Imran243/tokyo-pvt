import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MailOpen } from 'lucide-react';
import type { Letter } from '../../data/letters';

interface LetterCardProps {
  letter: Letter;
}

export function LetterCard({ letter }: LetterCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Letter Card (Envelope Preview) */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="w-full text-left bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <MailOpen size={48} />
        </div>
        
        <span className="text-xs font-semibold text-warm-gold tracking-widest uppercase mb-2 block">
          {letter.category}
        </span>
        <h3 className="text-xl font-serif text-parchment mb-2">{letter.title}</h3>
        <p className="text-soft-lavender/60 text-sm mb-4 line-clamp-2">{letter.preview}</p>
        <div className="flex items-center justify-between text-xs text-soft-lavender/40">
          <span>{letter.date}</span>
          <span className="group-hover:text-warm-gold transition-colors">Read letter →</span>
        </div>
      </motion.button>

      {/* Full Letter Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-midnight/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl max-h-[90vh] flex flex-col z-10"
            >
              {/* Parchment Paper */}
              <div className="parchment-texture rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-[#e8dcc4] relative">
                
                {/* Wax Seal Decoration */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-800 rounded-full flex items-center justify-center shadow-lg border-2 border-red-900 opacity-90 rotate-12 transform scale-75 md:scale-100 hidden sm:flex">
                  <div className="w-12 h-12 border border-red-950 rounded-full flex items-center justify-center">
                    <span className="font-serif text-red-300 text-xl font-bold">H</span>
                  </div>
                </div>

                <div className="flex justify-between items-center p-6 border-b border-black/10">
                  <div>
                    <h2 className="font-serif text-2xl text-gray-900 mb-1">{letter.title}</h2>
                    <p className="text-gray-600 text-sm font-handwriting">{letter.date}</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-black/5 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar flex-1">
                  <div className="font-handwriting text-2xl md:text-3xl text-gray-800 leading-relaxed whitespace-pre-wrap">
                    {letter.content}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
