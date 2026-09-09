import { motion } from 'framer-motion';

export function FinalLetter() {
  return (
    <section id="final-letter" className="min-h-screen py-12 px-4 md:py-24 flex items-center justify-center relative overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-warm-gold rounded-full animate-twinkle opacity-70" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[60%] right-[15%] w-1.5 h-1.5 bg-white rounded-full animate-twinkle opacity-50" style={{ animationDuration: '3s', animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[30%] w-2.5 h-2.5 bg-subtle-pink rounded-full animate-twinkle opacity-60" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full max-w-2xl z-10"
      >
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-serif text-parchment tracking-widest opacity-80">Final Letter</h1>
        </div>

        <div className="parchment-texture rounded-sm shadow-2xl overflow-hidden border border-[#e8dcc4] relative">

          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />

          <div className="p-8 md:p-16">
            <div className="font-handwriting text-2xl md:text-[28px] text-gray-800 leading-[1.8] md:leading-[2] whitespace-pre-wrap">
              {`Dear Tokyo,

You were the first person who taught me that friendship could feel like home.

Thank you for every conversation, every laugh, every late-night game, every argument and every memory.

I don't know what tomorrow will bring.

I don't expect forever.

I only hope that whenever you remember our story, it brings a smile instead of sadness.

Happy Birthday.

Be happy.
Be healthy.
And keep being the person who unknowingly changed someone's life.

— Harry 💜`}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
