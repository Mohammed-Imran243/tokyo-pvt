/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New scrapbook palette
        'scrapbook-bg': '#1a1210',
        'scrapbook-surface': '#2a1f1a',
        'scrapbook-card': '#352a22',
        'cream': '#fdf5e6',
        'cream-dark': '#e8dcc4',
        'blush': '#e8a0b4',
        'blush-light': '#f0c0d0',
        'dusty-lavender': '#b8a9c9',
        'warm-brown': '#8b6f5e',
        'warm-brown-light': '#a08674',
        'rose-gold': '#c4917a',
        // Keep existing for backward compat
        'midnight': '#0a0a1a',
        'deep-purple': '#1a0b2e',
        'warm-gold': '#d4af37',
        'soft-lavender': '#e6e6fa',
        'parchment': '#fdf5e6',
        'subtle-pink': '#ffd1dc',
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        'display': ['"Playfair Display"', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'script': ['"Dancing Script"', 'cursive'],
        'handwriting': ['Caveat', 'cursive'],
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'polaroid': '2px 4px 12px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)',
        'envelope': '2px 3px 10px rgba(0,0,0,0.3)',
        'glow-blush': '0 0 20px rgba(232,160,180,0.2)',
        'glow-warm': '0 0 30px rgba(212,175,55,0.15)',
      },
    },
  },
  plugins: [],
}
