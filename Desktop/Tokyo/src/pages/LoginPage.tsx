import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Heart, Moon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { AnimeSticker } from '../components/AnimeSticker';

export function LoginPage() {
  const { login } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shaking, setShaking] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim() || loading) return;

    setLoading(true);
    setError(false);

    const success = await login(password);

    if (!success) {
      setError(true);
      setShaking(true);
      setPassword('');
      setTimeout(() => setShaking(false), 600);
      setTimeout(() => setError(false), 3000);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center relative overflow-hidden bg-[#0e0a14] select-none">
      {/* 1. ANIME MAGICAL BEDROOM/STUDY BACKGROUND ARTWORK */}
      <div className="absolute inset-0 z-0">
        <img
          src="/login-anime-bg.png"
          alt="Magical Anime Room"
          className="w-full h-full object-cover object-center opacity-90 transition-opacity duration-1000"
        />
        {/* Soft Vignette Overlay to ensure text & card contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0710]/60 via-transparent to-[#0a0710]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,10,20,0.3)_0%,rgba(10,7,16,0.85)_100%)] pointer-events-none" />
      </div>

      {/* 2. CINEMATIC LIGHTING OVERLAYS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Moonlight from top-right window */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_80%_20%,rgba(168,178,255,0.15)_0%,transparent_60%)] blur-2xl" />
        {/* Warm candlelight glow from desk */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_20%_80%,rgba(251,191,36,0.12)_0%,transparent_60%)] blur-2xl" />
        {/* Soft romantic pink ambient bloom in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(232,160,180,0.08)_0%,transparent_70%)] blur-3xl" />
      </div>

      {/* 3. SUBTLE FLOATING MAGICAL DUST & PARTICLES */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? '4px' : '2px',
              height: i % 3 === 0 ? '4px' : '2px',
              backgroundColor: i % 2 === 0 ? '#fde68a' : '#f472b6',
              boxShadow: i % 2 === 0 ? '0 0 6px #fde68a' : '0 0 6px #f472b6',
              left: `${8 + (i * 7) % 84}%`,
              top: `${12 + (i * 11) % 76}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, i % 2 === 0 ? 8 : -8, 0],
              opacity: [0.15, 0.7, 0.15],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* 4. HANDWRITTEN SCRAPBOOK NOTES & DOODLES IN ROOM SCENE */}
      {/* Top Left Note */}
      <motion.div
        initial={{ opacity: 0, rotate: -4 }}
        animate={{ opacity: 0.85, rotate: -4 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="hidden md:block absolute top-8 left-8 z-10 pointer-events-none max-w-[170px] bg-amber-50/10 backdrop-blur-xs p-3 rounded-lg border border-amber-200/20 text-cream/80 font-handwriting text-sm shadow-lg transform -rotate-3"
      >
        <span className="block text-xs text-amber-200/90 font-sans tracking-widest uppercase mb-1">Polaroid</span>
        <p className="leading-snug">"Same Stories Stay Forever ♡"</p>
      </motion.div>

      {/* Top Right Window Moon Tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="hidden lg:flex absolute top-10 right-12 z-10 pointer-events-none items-center gap-2 text-cream/70 font-handwriting text-sm bg-black/30 backdrop-blur-xs px-3 py-1.5 rounded-full border border-cream/15"
      >
        <Moon size={14} className="text-amber-200" />
        <span>"Just a girl with a million dreams ♡"</span>
      </motion.div>

      {/* Bottom Right Handwritten Note */}
      <motion.div
        initial={{ opacity: 0, rotate: 3 }}
        animate={{ opacity: 0.8, rotate: 3 }}
        transition={{ delay: 1, duration: 1 }}
        className="hidden sm:block absolute bottom-8 right-8 z-10 pointer-events-none text-right font-handwriting text-base text-cream/60 drop-shadow-md"
      >
        <p>"You Are Special ♡"</p>
        <div className="flex justify-end gap-1 text-xs font-sans text-amber-300/70 mt-0.5">
          <span>Better Together</span> • <span>Our Story</span>
        </div>
      </motion.div>

      {/* 5. ANIME CHARACTER EASTER EGGS (ORGANICALLY PLACED AROUND ROOM) */}
      {/* Jiraiya peeking near top-left shelf/note */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-12 z-10 pointer-events-none">
        <AnimeSticker sectionKey="room-jiraiya" character="jiraiya" size={54} animation="peek" />
      </div>

      {/* Pochita near bottom right desk/books */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-16 z-10 pointer-events-none">
        <AnimeSticker sectionKey="room-pochita" character="pochita" size={50} animation="bounce" />
      </div>

      {/* Levi/Anya peeking near bottom left desk/cushion */}
      <div className="absolute bottom-5 left-5 sm:bottom-12 sm:left-14 z-10 pointer-events-none">
        <AnimeSticker sectionKey="room-bottom-left" size={48} animation="idle" />
      </div>

      {/* Hinata/Neji/Mikasa peeking from top right window/shelf edge */}
      <div className="hidden sm:block absolute top-6 right-6 sm:top-10 sm:right-10 z-10 pointer-events-none">
        <AnimeSticker sectionKey="room-top-right" size={46} animation="peek" />
      </div>

      {/* 6. EXACT UNCHANGED LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-20 w-full max-w-sm mx-4"
      >
        <div className="paper-texture rounded-2xl p-8 sm:p-10 text-center border border-warm-brown/20 shadow-2xl relative">
          {/* Physical Anime Stickers Peeking From Behind Card Edges */}
          <div className="absolute -top-6 -left-4 sm:-top-7 sm:-left-6 pointer-events-none z-0">
            <AnimeSticker sectionKey="login-card-tl" size={56} animation="peek" />
          </div>
          <div className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-5 pointer-events-none z-0">
            <AnimeSticker sectionKey="login-card-br" size={52} animation="idle" />
          </div>

          {/* Lock icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-16 h-16 mx-auto mb-6 rounded-full bg-scrapbook-bg/60 border border-warm-brown/30 flex items-center justify-center"
          >
            <Lock size={24} className="text-blush" />
          </motion.div>

          {/* Welcome text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-cream/50 text-sm tracking-widest uppercase mb-2 font-sans">Welcome back</p>
            <h1 className="font-serif text-3xl sm:text-4xl text-cream mb-2 tracking-wide">
              Kullachi <span className="text-blush">♡</span>
            </h1>
            <p className="font-handwriting text-lg text-cream/40 mb-8 italic">
              Some places are only for you.
            </p>
          </motion.div>

          {/* Login Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <motion.div
              animate={shaking ? { x: [-8, 8, -6, 6, -4, 4, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Magic word..."
                autoComplete="off"
                className={`w-full bg-scrapbook-bg/50 border ${
                  error
                    ? 'border-red-400/60 text-red-300'
                    : 'border-warm-brown/30 text-cream focus:border-blush/50'
                } rounded-xl py-4 px-5 text-center text-base font-handwriting tracking-wider placeholder:text-cream/25 focus:outline-none transition-colors`}
              />
            </motion.div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-400/80 text-xs font-sans"
                >
                  That's not the magic word...
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-blush/15 hover:bg-blush/25 text-cream font-serif text-lg rounded-xl flex items-center justify-center gap-2 transition-all duration-300 border border-blush/20 hover:border-blush/40 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Heart size={16} className="text-blush" />
              Unlock
            </motion.button>
          </motion.form>

          {/* Bottom decorative text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-6 text-xs text-cream/20 font-handwriting"
          >
            made with love ♡
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}


