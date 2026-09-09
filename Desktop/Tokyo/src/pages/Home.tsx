import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Mail, Image as ImageIcon, Mic } from 'lucide-react';
import { NamesGame } from '../components/NamesGame';
import { AnimeSticker } from '../components/AnimeSticker';

export function Home() {
  return (
    <div className="py-8 md:py-12 max-w-5xl mx-auto px-4">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 md:mb-14 relative"
      >
        <span className="text-xs sm:text-sm font-sans tracking-widest uppercase text-blush block mb-2 font-medium">
          A personal world made for you
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-cream tracking-wide mb-3 font-semibold">
          For Kullachi <span className="text-blush inline-block animate-pulse">♡</span>
        </h1>

        <p className="font-handwriting text-xl sm:text-2xl md:text-3xl text-blush-light/80 italic mb-4">
          "my safe place, always."
        </p>

        <p className="text-cream/60 text-sm sm:text-base font-sans max-w-lg mx-auto leading-relaxed">
          A private place for our memories, our bond, and everything we don't always know how to say.
        </p>
      </motion.div>

      {/* Central Polaroid & Memory Scrapbook Composition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative mb-16 md:mb-24 max-w-2xl mx-auto"
      >
        {/* Decorative background tape / stickers */}
        <div className="absolute -top-4 left-10 z-20 hidden sm:block">
          <div className="w-24 h-6 bg-cream/20 border border-cream/10 -rotate-6 backdrop-blur-xs" />
        </div>
        <div className="absolute -bottom-4 right-10 z-20 hidden sm:block">
          <div className="w-24 h-6 bg-blush/20 border border-blush/10 rotate-3 backdrop-blur-xs" />
        </div>

        {/* Main Centerpiece Polaroid */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="polaroid rounded-sm transform -rotate-1 hover:rotate-0 transition-transform duration-500 max-w-sm sm:max-w-md w-full relative">
            {/* Sticker peeking from behind top-right edge of centerpiece Polaroid */}
            <div className="absolute -top-6 -right-5 sm:-top-8 sm:-right-7 z-20 pointer-events-none">
              <AnimeSticker sectionKey="home-polaroid-top-right" size={58} animation="peek" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden bg-scrapbook-bg rounded-xs">
              <img
                src="/memories/star/Fav pic of us.jpg"
                alt="Kullachi memory"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: 'center 25%' }}
              />
              <div className="absolute top-2 right-2 bg-scrapbook-bg/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-sans text-cream/90 flex items-center gap-1 border border-cream/10">
                <Heart size={12} className="text-blush fill-blush" /> Memory #1
              </div>
            </div>
            <p className="polaroid-caption text-xl sm:text-2xl mt-3">
              You make ordinary days feel special. ♡
            </p>
          </div>
        </div>

        {/* Accent Polaroid (offset on desktop) */}
        <div className="hidden md:block absolute -top-6 -right-12 z-0">
          <div className="polaroid w-48 rounded-sm transform rotate-12 opacity-85 hover:opacity-100 hover:rotate-6 transition-all duration-300 relative">
            {/* Sticker peeking behind top corner of right accent polaroid */}
            <div className="absolute -top-5 -right-4 z-20 pointer-events-none">
              <AnimeSticker sectionKey="home-polaroid-accent-right" size={48} animation="bounce" />
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-scrapbook-bg rounded-xs">
              <img
                src="/memories/star/First meet.jpg"
                alt="Special moment"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="polaroid-caption text-sm mt-1">Always with you ✨</p>
          </div>
        </div>

        {/* Left Accent Polaroid */}
        <div className="hidden md:block absolute -bottom-8 -left-12 z-0">
          <div className="polaroid w-48 rounded-sm transform -rotate-12 opacity-85 hover:opacity-100 hover:-rotate-6 transition-all duration-300 relative">
            {/* Sticker peeking behind bottom-left corner of left accent polaroid */}
            <div className="absolute -bottom-5 -left-5 z-20 pointer-events-none">
              <AnimeSticker sectionKey="home-polaroid-accent-left" size={52} animation="idle" />
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-scrapbook-bg rounded-xs">
              <img
                src="/memories/star/2nd meet.jpg"
                alt="Favorite place"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="polaroid-caption text-sm mt-1">Our little world 🌙</p>
          </div>
        </div>
      </motion.div>

      {/* Quick Navigation Cards */}
      <div className="mb-16 md:mb-20">
        <div className="text-center mb-6">
          <span className="text-xs font-sans tracking-widest uppercase text-cream/40">Quick Access</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-cream">Explore Our Scrapbook</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <Link
            to="/letters"
            className="paper-texture p-4 rounded-xl border border-warm-brown/20 hover:border-blush/40 flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-3 rounded-full bg-blush/10 text-blush mb-2 group-hover:scale-110 transition-transform">
              <Mail size={20} />
            </div>
            <span className="font-serif text-base text-cream group-hover:text-blush">Letters</span>
            <span className="text-[11px] font-sans text-cream/40 mt-0.5">Physical Envelopes</span>
          </Link>

          <Link
            to="/memories"
            className="paper-texture p-4 rounded-xl border border-warm-brown/20 hover:border-blush/40 flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-3 rounded-full bg-warm-gold/10 text-warm-gold mb-2 group-hover:scale-110 transition-transform">
              <ImageIcon size={20} />
            </div>
            <span className="font-serif text-base text-cream group-hover:text-warm-gold">Memories</span>
            <span className="text-[11px] font-sans text-cream/40 mt-0.5">25 Photos & Videos</span>
          </Link>

          <Link
            to="/voice"
            className="paper-texture p-4 rounded-xl border border-warm-brown/20 hover:border-blush/40 flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-3 rounded-full bg-dusty-lavender/10 text-dusty-lavender mb-2 group-hover:scale-110 transition-transform">
              <Mic size={20} />
            </div>
            <span className="font-serif text-base text-cream group-hover:text-dusty-lavender">Voice</span>
            <span className="text-[11px] font-sans text-cream/40 mt-0.5">Cassette Tapes</span>
          </Link>

          <Link
            to="/night-sky"
            className="paper-texture p-4 rounded-xl border border-warm-brown/20 hover:border-blush/40 flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-3 rounded-full bg-cream/10 text-cream mb-2 group-hover:scale-110 transition-transform">
              <Sparkles size={20} />
            </div>
            <span className="font-serif text-base text-cream group-hover:text-blush">Night Sky</span>
            <span className="text-[11px] font-sans text-cream/40 mt-0.5">25 Special Stars</span>
          </Link>
        </div>
      </div>

      {/* Interactive Names Game Section (Replaces Old Milestones Section) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 border-t border-warm-brown/20 pt-12"
      >
        <NamesGame />
      </motion.div>
    </div>
  );
}

