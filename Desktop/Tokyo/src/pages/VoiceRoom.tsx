import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, Play, Pause, Disc } from 'lucide-react';
import { voiceNotesData, type VoiceNote } from '../data/voiceNotes';
import { AnimeSticker } from '../components/AnimeSticker';

interface CassetteCardProps {
  note: VoiceNote;
  index: number;
  currentlyPlayingId: string | null;
  setCurrentlyPlayingId: (id: string | null) => void;
}

function CassetteCard({ note, index, currentlyPlayingId, setCurrentlyPlayingId }: CassetteCardProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [hasError, setHasError] = useState(false);

  // Sync state if another tape starts playing
  useEffect(() => {
    if (currentlyPlayingId !== note.id && isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    }
  }, [currentlyPlayingId, note.id, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current || hasError) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentlyPlayingId(null);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setCurrentlyPlayingId(note.id);
      }).catch((err) => {
        console.warn('Audio playback error:', err);
        setHasError(true);
        setIsPlaying(false);
      });
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration || hasError) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs <= 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="cassette p-5 rounded-2xl shadow-xl hover:border-blush/40 transition-all duration-300 group relative"
    >
      <audio
        ref={audioRef}
        src={note.audioUrl}
        preload="metadata"
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
          setCurrentlyPlayingId(null);
        }}
        onError={() => {
          setHasError(true);
          setIsPlaying(false);
        }}
      />

      {/* Anime Stickers peeking from behind cassette tape */}
      {index === 0 && (
        <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-4 z-20 pointer-events-none">
          <AnimeSticker sectionKey="voice-cassette-0" size={54} animation="peek" />
        </div>
      )}
      {index === 2 && (
        <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-4 z-20 pointer-events-none">
          <AnimeSticker sectionKey="voice-cassette-2" size={48} animation="idle" />
        </div>
      )}

      {/* Top Sticker Label */}
      <div className="bg-[#e8dcc4] text-gray-900 rounded-md p-3 mb-4 border border-black/20 shadow-inner flex items-center justify-between">
        <div>
          <h3 className="font-handwriting text-2xl text-gray-900 leading-none">
            {note.title}
          </h3>
          <span className="text-[10px] font-sans text-gray-600 block mt-1">
            Format: {note.format || 'AUDIO'}
          </span>
        </div>
        <span className="font-mono text-xs font-bold text-rose-800 bg-rose-100 px-2 py-0.5 rounded border border-rose-200">
          {isPlaying ? `${formatTime(currentTime)} / ${formatTime(duration)}` : (duration > 0 ? formatTime(duration) : 'Ready')}
        </span>
      </div>

      {/* Cassette Tape Window & Spools */}
      <div className="cassette-window p-4 mb-4 flex items-center justify-around relative">
        {/* Left Reel */}
        <div className={`cassette-reel ${isPlaying ? 'animate-spin' : ''}`}>
          <Disc size={14} className="text-warm-brown" />
        </div>

        {/* Tape Window Interactive Seek Bridge */}
        <div
          onClick={handleSeek}
          className="h-6 flex-1 mx-4 bg-[#120c09] border border-warm-brown/30 rounded flex items-center justify-center cursor-pointer relative overflow-hidden group/seek"
          title="Click to seek"
        >
          <div className="w-full h-1.5 bg-amber-900/60 rounded-full overflow-hidden relative mx-2">
            <div
              className="h-full bg-blush/80 transition-all duration-100"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Right Reel */}
        <div className={`cassette-reel ${isPlaying ? 'animate-spin' : ''}`}>
          <Disc size={14} className="text-warm-brown" />
        </div>
      </div>

      {/* Cassette Controls & Status */}
      <div className="flex items-center justify-between pt-2">
        <div className="text-xs font-sans text-cream/40 flex items-center gap-1.5">
          {hasError ? (
            <span className="text-amber-400/80">● File unavailable</span>
          ) : isPlaying ? (
            <span className="text-green-400 font-medium animate-pulse flex items-center gap-1">
              ● Playing audio...
            </span>
          ) : (
            <span className="text-cream/40">Tape #{index + 1} • High Bias</span>
          )}
        </div>

        <button
          onClick={togglePlay}
          disabled={hasError}
          className={`px-4 py-2 rounded-xl border text-xs sm:text-sm font-sans font-medium flex items-center gap-2 transition-all ${
            isPlaying
              ? 'bg-blush text-scrapbook-bg border-blush font-bold shadow-md'
              : 'bg-blush/15 hover:bg-blush/30 border-blush/30 text-cream group-hover:border-blush'
          }`}
        >
          {isPlaying ? (
            <>
              <Pause size={14} className="fill-scrapbook-bg text-scrapbook-bg" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play size={14} className="text-blush fill-blush" />
              <span>Play Tape</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export function VoiceRoom() {
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(null);

  return (
    <div className="py-8 md:py-12 max-w-4xl mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 md:mb-12 relative"
      >
        <span className="text-xs font-sans tracking-widest uppercase text-blush block mb-2 font-medium">
          Whispers & Words
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream mb-3">
          Voice Room <Mic size={32} className="inline text-blush" />
        </h1>

        <p className="font-handwriting text-xl sm:text-2xl text-cream/60 max-w-md mx-auto">
          "Cassettes recorded just for Kullachi."
        </p>
      </motion.div>

      {/* Cassette Tapes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {voiceNotesData.map((note, index) => (
          <CassetteCard
            key={note.id}
            note={note}
            index={index}
            currentlyPlayingId={currentlyPlayingId}
            setCurrentlyPlayingId={setCurrentlyPlayingId}
          />
        ))}
      </div>

      {/* Note */}
      <div className="text-center mt-12 pt-6 border-t border-warm-brown/15 relative">
        <div className="absolute -top-4 right-4 sm:right-12 pointer-events-none opacity-80">
          <AnimeSticker sectionKey="voice-note-bottom" size={44} animation="bounce" />
        </div>
        <p className="font-handwriting text-xl text-cream/40">
          Vintage cassette recordings kept for memory ♡
        </p>
      </div>
    </div>
  );
}

