import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { lettersData } from '../data/letters';
import { LetterCard } from '../components/ui/LetterCard';

export function Letters() {
  const [activeCategory, setActiveCategory] = useState<string>('All Letters');
  
  const categories = useMemo(() => {
    const cats = new Set(lettersData.map(l => l.category));
    return ['All Letters', ...Array.from(cats)];
  }, []);

  const filteredLetters = useMemo(() => {
    if (activeCategory === 'All Letters') return lettersData;
    return lettersData.filter(l => l.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="letters" className="min-h-screen py-12 px-6 md:py-24 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12 md:mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-parchment mb-4">Letters ✨</h1>
        <p className="text-soft-lavender/70 text-lg max-w-2xl mx-auto">
          "Some words are too special to be said, so I write them here."
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category 
                ? 'bg-warm-gold/20 text-warm-gold border border-warm-gold/50 shadow-[0_0_15px_rgba(212,175,55,0.15)]' 
                : 'bg-white/5 text-soft-lavender/70 border border-white/5 hover:bg-white/10 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Letters Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredLetters.map((letter, index) => (
          <motion.div
            layout
            key={letter.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <LetterCard letter={letter} />
          </motion.div>
        ))}
        {filteredLetters.length === 0 && (
          <div className="col-span-full py-20 text-center text-soft-lavender/50">
            No letters found in this category.
          </div>
        )}
      </motion.div>
    </section>
  );
}
