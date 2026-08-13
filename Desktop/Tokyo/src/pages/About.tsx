import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="min-h-screen py-12 px-6 md:py-24 max-w-4xl mx-auto flex flex-col items-center">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16 md:mb-24 w-full"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-parchment mb-4">Our Bond</h1>
        <p className="text-soft-lavender/70 text-lg">
          A bond without needing a label.
        </p>
      </motion.div>

      <div className="flex flex-col gap-12 md:gap-20 w-full mb-20">
        
        {/* Harry & Hermione Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-8 items-center md:items-start"
        >
          <div className="w-full md:w-1/3 aspect-[4/5] bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-midnight flex items-center justify-center text-warm-gold/20 font-serif text-6xl group-hover:scale-110 transition-transform duration-700">
               H&H
             </div>
          </div>
          <div className="w-full md:w-2/3 md:pt-10 text-center md:text-left">
            <h2 className="text-3xl font-serif text-parchment mb-4">Harry & Hermione</h2>
            <p className="text-soft-lavender/80 text-xl font-light leading-relaxed italic">
              "Brains, loyalty and a bond that survives everything."
            </p>
          </div>
        </motion.div>

        {/* Levi & Mikasa Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row-reverse gap-8 items-center md:items-start"
        >
          <div className="w-full md:w-1/3 aspect-[4/5] bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-midnight flex items-center justify-center text-subtle-pink/20 font-serif text-6xl group-hover:scale-110 transition-transform duration-700">
               L&M
             </div>
          </div>
          <div className="w-full md:w-2/3 md:pt-10 text-center md:text-right">
            <h2 className="text-3xl font-serif text-parchment mb-4">Levi & Mikasa</h2>
            <p className="text-soft-lavender/80 text-xl font-light leading-relaxed italic">
              "Different worlds, same silent understanding."
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
