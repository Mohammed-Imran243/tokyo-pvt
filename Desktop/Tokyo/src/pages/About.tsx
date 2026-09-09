import { motion } from 'framer-motion';
import { Heart, Sparkles, Shield } from 'lucide-react';

export function About() {
  return (
    <div className="py-8 md:py-12 max-w-4xl mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <span className="text-xs font-sans tracking-widest uppercase text-blush block mb-2 font-medium">
          About Us
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream mb-3">
          Our Special Bond <Heart size={28} className="inline text-blush fill-blush" />
        </h1>

        <p className="font-handwriting text-2xl text-cream/60 max-w-md mx-auto">
          "A bond without needing a label."
        </p>
      </motion.div>

      {/* Bond Cards - Scrapbook Cards */}
      <div className="space-y-8 md:space-y-12">
        {/* Harry & Hermione */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="paper-texture rounded-3xl p-6 sm:p-10 border border-warm-brown/30 shadow-xl relative overflow-hidden group"
        >
          <div className="tape absolute -top-3 left-10" />

          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
            <img
              src="/harry-hermione.png"
              alt="Harry & Hermione"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl border border-warm-brown/30 object-cover shadow-md shrink-0 group-hover:scale-105 transition-transform"
            />

            <div className="text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Sparkles size={18} className="text-warm-gold" />
                <span className="text-xs font-sans tracking-wider uppercase text-warm-gold font-semibold">
                  Chapter I
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-3">
                Harry & Hermione
              </h2>
              <p className="font-handwriting text-2xl sm:text-3xl text-cream/80 italic leading-relaxed">
                "Brains, loyalty and a bond that survives everything."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Levi & Mikasa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="paper-texture rounded-3xl p-6 sm:p-10 border border-warm-brown/30 shadow-xl relative overflow-hidden group"
        >
          <div className="tape absolute -top-3 right-10" />

          <div className="flex flex-col md:flex-row-reverse gap-6 sm:gap-8 items-center">
            <img
              src="/levi-mikasa.jpg"
              alt="Levi & Mikasa"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl border border-warm-brown/30 object-cover shadow-md shrink-0 group-hover:scale-105 transition-transform"
            />

            <div className="text-center md:text-right flex-1">
              <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                <Shield size={18} className="text-blush" />
                <span className="text-xs font-sans tracking-wider uppercase text-blush font-semibold">
                  Chapter II
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-3">
                Levi & Mikasa
              </h2>
              <p className="font-handwriting text-2xl sm:text-3xl text-cream/80 italic leading-relaxed">
                "Different worlds, same silent understanding."
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Quote */}
      <div className="text-center mt-16 pt-8 border-t border-warm-brown/15">
        <p className="font-handwriting text-xl text-cream/40">
          Made with love for Kullachi ♡
        </p>
      </div>
    </div>
  );
}
