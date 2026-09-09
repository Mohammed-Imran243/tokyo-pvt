import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { lettersData } from '../data/letters';
import { LetterCard } from '../components/ui/LetterCard';
import { AnimeSticker } from '../components/AnimeSticker';

export function Letters() {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [autoOpenSpecial, setAutoOpenSpecial] = useState<boolean>(false);

  useEffect(() => {
    if (searchParams.get('special') === 'true') {
      setAutoOpenSpecial(true);
    }
  }, [searchParams]);

  const categories = ['All', ...Array.from(new Set(lettersData.map((l) => l.category)))];

  const filteredLetters = selectedCategory === 'All'
    ? lettersData
    : lettersData.filter((l) => l.category === selectedCategory);

  // Pre-calculated aesthetic rotations for envelope scrapbook feel
  const rotations = [-2, 1.5, -1, 2, -1.5];

  return (
    <div className="py-8 md:py-12 max-w-5xl mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 md:mb-12 relative"
      >
        <span className="text-xs font-sans tracking-widest uppercase text-blush block mb-2 font-medium">
          Words from the heart
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream mb-3">
          Envelopes & Letters <Mail size={32} className="inline text-blush" />
        </h1>

        <p className="font-handwriting text-xl sm:text-2xl text-cream/60 max-w-md mx-auto">
          "Some feelings are better written than spoken."
        </p>
      </motion.div>

      {/* Category Pills */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-10 relative">
        <div className="absolute -top-5 right-2 sm:right-10 pointer-events-none opacity-85">
          <AnimeSticker sectionKey="letters-category-corner" size={46} animation="peek" />
        </div>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-blush text-scrapbook-bg shadow-md font-semibold'
                : 'paper-texture text-cream/60 hover:text-cream border border-warm-brown/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Letters Envelope Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredLetters.map((letter, index) => {
          const isSpecialParam = autoOpenSpecial && (letter.isSpecial || letter.id === 'letter-final');
          const rot = rotations[index % rotations.length];

          return (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <LetterCard
                letter={letter}
                autoOpen={isSpecialParam}
                rotationAngle={rot}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-16 pt-8 border-t border-warm-brown/15">
        <p className="font-handwriting text-xl text-cream/40">
          Click any envelope to read its letter ♡
        </p>
      </div>
    </div>
  );
}
