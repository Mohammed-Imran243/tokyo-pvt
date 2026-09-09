/**
 * AnimeSticker — Tiny transparent scrapbook sticker easter eggs using exact artwork assets.
 *
 * NO circles, NO buttons, NO UI chrome. Just small physical stickers someone casually
 * stuck on a scrapbook page. Transparent background, natural slight tilt, soft shadow.
 */

import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

export type StickerCharacter =
  | 'mikasa'
  | 'levi'
  | 'hinata'
  | 'neji'
  | 'anya'
  | 'hange'
  | 'chainsaw'
  | 'pochita'
  | 'jiraiya';

const STICKER_IMAGES: Record<string, string> = {
  mikasa: '/stickers/mikasa.png',
  levi: '/stickers/levi.png',
  hinata: '/stickers/hinata.png',
  neji: '/stickers/neji.png',
  anya: '/stickers/anya.png',
  hange: '/stickers/hange.png',
  chainsaw: '/stickers/pochita.png',
  pochita: '/stickers/pochita.png',
  jiraiya: '/stickers/jiraiya.png',
};

const allCharacters: StickerCharacter[] = [
  'mikasa',
  'levi',
  'hinata',
  'neji',
  'anya',
  'hange',
  'pochita',
  'jiraiya',
];

/** Anti-repeat tracker — prevents same char showing back-to-back across sections */
let recentlyShown: StickerCharacter[] = [];

function pickRandom(exclude: StickerCharacter[] = []): StickerCharacter {
  const pool = allCharacters.filter((c) => !exclude.includes(c));
  const chosen = (pool.length > 0 ? pool : allCharacters)[
    Math.floor(Math.random() * (pool.length > 0 ? pool.length : allCharacters.length))
  ];
  recentlyShown = [chosen, ...recentlyShown.slice(0, 4)];
  return chosen;
}

// ─── Animation configs ────────────────────────────────────────────────────────

const entranceVariants: Record<string, Variants> = {
  peek: {
    hidden: { opacity: 0, y: 12, scale: 0.75, rotate: -3 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring' as const, stiffness: 260, damping: 20, delay: 0.15 },
    },
  },
  bounce: {
    hidden: { opacity: 0, scale: 0.6, y: 8 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 300, damping: 16, delay: 0.1 },
    },
  },
  slide: {
    hidden: { opacity: 0, x: -10, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: 'spring' as const, stiffness: 220, damping: 18, delay: 0.2 },
    },
  },
  idle: {
    hidden: { opacity: 0, y: 6, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' as const, delay: 0.1 },
    },
  },
};

const idleFloat = {
  y: [0, -3, 0],
  transition: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' as const },
};

const bouncyFloat = {
  y: [0, -4, 0],
  rotate: [0, 1.5, 0, -1.5, 0],
  transition: { repeat: Infinity, duration: 2.8, ease: 'easeInOut' as const },
};

const peekPop = {
  y: [4, 0, 4],
  transition: { repeat: Infinity, duration: 3.8, ease: 'easeInOut' as const },
};

// ─── Main component ───────────────────────────────────────────────────────────

export interface AnimeStickerProps {
  /** Unique key per location — changing this re-randomizes the character */
  sectionKey: string;
  /** Pixel size of the sticker on desktop (default auto ~48–78px) */
  size?: number;
  /** Rotation angle of the sticker (default: subtle random tilt -8deg to +8deg) */
  rotation?: number;
  /** Animation style */
  animation?: 'idle' | 'bounce' | 'peek' | 'slide' | 'none';
  /** Override with a specific character instead of random */
  character?: StickerCharacter;
  /** Backwards compatibility prop */
  reaction?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimeSticker({
  sectionKey,
  size,
  rotation,
  animation = 'idle',
  character,
  reaction,
  className = '',
  style = {},
}: AnimeStickerProps) {
  const [char, setChar] = useState<StickerCharacter>('anya');
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive window resize listener
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Hash helper for deterministic properties based on sectionKey
  const hash = (() => {
    let h = 0;
    for (let i = 0; i < sectionKey.length; i++) h = (h * 31 + sectionKey.charCodeAt(i)) >>> 0;
    return h;
  })();

  // Character selection: picked ONCE on mount or when sectionKey changes
  useEffect(() => {
    if (character) {
      setChar(character);
      return;
    }
    const picked = pickRandom(recentlyShown.slice(0, 3));
    setChar(picked);
  }, [sectionKey, character]);

  // Rotation angle: -8deg to +8deg range
  const defaultRotation = (() => {
    if (rotation !== undefined) return Math.min(8, Math.max(-8, rotation));
    const tilts = [-7, -5, -3, -1, 2, 4, 6, 8, -6, 5, -2, 7];
    return tilts[hash % tilts.length];
  })();

  // Desktop size: 45–85px (defaults to hash-varied ~52-72px if not specified)
  const baseDesktopSize = size !== undefined
    ? Math.min(85, Math.max(45, size))
    : 52 + (hash % 21); // 52 to 72px

  // Mobile size: 32–60px
  const baseMobileSize = Math.min(60, Math.max(32, Math.round(baseDesktopSize * 0.7)));

  const currentSize = isMobile ? baseMobileSize : baseDesktopSize;

  const effectiveAnim = reaction === 'peek' ? 'peek' : (animation || 'idle');
  const entrance = entranceVariants[effectiveAnim] || entranceVariants.idle;

  const floatAnim = effectiveAnim === 'bounce' ? bouncyFloat
    : effectiveAnim === 'peek' ? peekPop
    : effectiveAnim === 'none' ? {}
    : idleFloat;

  const imgSrc = STICKER_IMAGES[char] || STICKER_IMAGES.anya;

  return (
    <motion.div
      className={`pointer-events-none select-none inline-block ${className}`}
      style={{ ...style }}
      variants={entrance}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        animate={floatAnim}
        style={{
          display: 'inline-block',
          transform: `rotate(${defaultRotation}deg)`,
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.4)) drop-shadow(0 1px 2px rgba(0,0,0,0.25))',
        }}
      >
        <img
          src={imgSrc}
          alt={`${char} sticker`}
          onLoad={() => setLoaded(true)}
          style={{
            width: `${currentSize}px`,
            height: 'auto',
            maxHeight: `${Math.round(currentSize * 1.3)}px`,
            objectFit: 'contain',
            display: 'block',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.25s ease-in-out',
          }}
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}

// ─── StickerLayer ─────────────────────────────────────────────────────────────
// Scrapbook Easter egg layer helper for multi-sticker placement

export interface StickerLayerProps {
  /** Unique ID for this section */
  id: string;
  /** How many stickers to show (1–3) */
  count?: 1 | 2 | 3;
}

type PlacementConfig = {
  top?: string; right?: string; bottom?: string; left?: string;
  animation: 'idle' | 'bounce' | 'peek';
  size: number;
};

const PLACEMENT_SLOTS: PlacementConfig[][] = [
  [{ top: '-14px', right: '10px', animation: 'peek', size: 52 }],
  [{ bottom: '-12px', left: '12px', animation: 'idle', size: 54 }],
  [{ top: '-16px', left: '8px', animation: 'bounce', size: 48 }],
  [{ bottom: '-14px', right: '14px', animation: 'idle', size: 56 }],

  [
    { top: '-16px', right: '10px', animation: 'peek', size: 50 },
    { bottom: '-12px', left: '10px', animation: 'idle', size: 54 },
  ],
  [
    { top: '-14px', left: '12px', animation: 'bounce', size: 48 },
    { bottom: '-16px', right: '8px', animation: 'idle', size: 56 },
  ],

  [
    { top: '-16px', right: '8px', animation: 'peek', size: 48 },
    { bottom: '-14px', left: '10px', animation: 'idle', size: 52 },
    { bottom: '-10px', right: '20px', animation: 'bounce', size: 45 },
  ],
];

export function StickerLayer({ id, count = 1 }: StickerLayerProps) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) >>> 0;

  const countLayouts = PLACEMENT_SLOTS.filter((g) => g.length === count);
  const layout = countLayouts.length > 0
    ? countLayouts[hash % countLayouts.length]
    : PLACEMENT_SLOTS[hash % PLACEMENT_SLOTS.length];

  return (
    <>
      {layout.map((placement, i) => (
        <AnimeSticker
          key={`${id}-${i}`}
          sectionKey={`${id}-slot-${i}`}
          size={placement.size}
          animation={placement.animation}
          className="absolute z-30 pointer-events-none"
          style={{
            top: placement.top,
            right: placement.right,
            bottom: placement.bottom,
            left: placement.left,
          }}
        />
      ))}
    </>
  );
}

