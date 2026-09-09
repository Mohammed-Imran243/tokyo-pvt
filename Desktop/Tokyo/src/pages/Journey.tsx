import { motion } from 'framer-motion';
import { timelineData } from '../data/timeline';

export function Journey() {
  return (
    <section id="journey" className="min-h-screen py-12 px-6 md:py-24 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16 md:mb-24"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-parchment mb-4">Our Journey So Far ✨</h1>
        <p className="text-soft-lavender/70 text-lg max-w-2xl mx-auto">
          Every chapter of our story, written in time.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical timeline track */}
        <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/10" />

        <div className="flex flex-col gap-12 md:gap-16 relative">
          {timelineData.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className={`relative flex items-start gap-0 md:gap-8 pl-16 md:pl-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-14 h-14 rounded-full bg-midnight border-2 border-white/20 flex items-center justify-center shadow-lg group-hover:border-warm-gold/50 transition-all duration-300 z-10">
                <div className="w-4 h-4 rounded-full bg-white/30" />
              </div>

              {/* Mobile connecting line */}
              <div className="md:hidden absolute left-7 top-7 w-9 h-px bg-white/10" />

              {/* Content Card */}
              <div className="w-full md:w-[calc(50%-40px)] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300">
                <span className="text-warm-gold/80 text-sm font-medium tracking-wider uppercase block mb-2">{entry.date}</span>
                <h3 className="text-xl font-serif text-parchment mb-3">{entry.title}</h3>
                <p className="text-soft-lavender/80 font-light leading-relaxed">{entry.description}</p>
              </div>

              {/* Spacer for alternating layout on desktop */}
              <div className="hidden md:block w-[calc(50%-40px)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
