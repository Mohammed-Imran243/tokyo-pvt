import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Mic, Clock } from 'lucide-react';
import { voiceNotesData } from '../data/voiceNotes';

export function VoiceRoom() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <section id="voice-room" className="min-h-screen py-12 px-6 md:py-24 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <div className="w-16 h-16 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
          <Mic size={28} className="text-warm-gold" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-parchment mb-4">Voice Room 🎙️</h1>
        <p className="text-soft-lavender/70 text-lg max-w-xl mx-auto">
          "Some memories sound better than they look."
        </p>
      </motion.div>

      <div className="flex flex-col gap-4">
        {voiceNotesData.map((note, index) => {
          const isPlaying = playingId === note.id;
          
          return (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-4 md:p-6 transition-all duration-300 flex items-center gap-4 md:gap-6 ${
                isPlaying ? 'border-warm-gold/50 shadow-[0_0_20px_rgba(212,175,55,0.1)] bg-white/10' : 'border-white/10 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              {/* Play Button */}
              <button
                onClick={() => togglePlay(note.id)}
                className={`w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isPlaying 
                    ? 'bg-warm-gold text-midnight shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
              </button>

              {/* Info & Waveform */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="font-serif text-lg md:text-xl text-parchment truncate pr-4">{note.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-soft-lavender/50 shrink-0">
                    <Clock size={12} />
                    <span>{note.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-soft-lavender/50">{note.date}</span>
                  
                  {/* Fake Waveform */}
                  <div className="flex items-end gap-[3px] h-6 opacity-70">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div 
                        key={i}
                        className={`w-1 md:w-1.5 rounded-t-full transition-all duration-100 ${isPlaying ? 'bg-warm-gold' : 'bg-white/20'}`}
                        style={{
                          height: isPlaying ? `${Math.max(20, Math.random() * 100)}%` : `${10 + (Math.sin(i * 0.5) * 5 + 5)}%`,
                          transitionDelay: isPlaying ? `${i * 50}ms` : '0ms'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
