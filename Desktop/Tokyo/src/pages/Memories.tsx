import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData, memoryStats } from '../data/memories';
import { X, Play } from 'lucide-react';

export function Memories() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const tabs = ['All', 'Photos', 'Videos'];

  const filteredGallery = useMemo(() => {
    if (activeTab === 'All') return galleryData;
    return galleryData.filter(item => item.type.toLowerCase() === activeTab.toLowerCase() || (activeTab === 'Photos' && item.type === 'photo'));
  }, [activeTab]);

  return (
    <section id="memories" className="min-h-screen py-12 px-6 md:py-24 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-parchment mb-4">Our Memories ♡</h1>
        <p className="text-soft-lavender/70 text-lg max-w-2xl mx-auto mb-8">
          A collection of moments we've shared.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base mb-12">
          <div className="text-center"><div className="font-serif text-xl md:text-2xl text-warm-gold">{memoryStats.photos}</div><div className="text-soft-lavender/60">Photos</div></div>
          <div className="text-center"><div className="font-serif text-xl md:text-2xl text-warm-gold">{memoryStats.videos}</div><div className="text-soft-lavender/60">Videos</div></div>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex overflow-x-auto custom-scrollbar pb-4 mb-8 justify-start md:justify-center gap-2"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 ${
              activeTab === tab 
                ? 'bg-white/10 text-warm-gold border border-warm-gold/30' 
                : 'bg-transparent text-soft-lavender/60 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredGallery.map((item, index) => (
          <motion.div
            layout
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 12) * 0.05 }}
            onClick={() => setSelectedItem(item)}
            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-white/5"
          >
            {item.type === 'video' ? (
              <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-950 via-midnight to-black">
                <video src={item.url} preload="none" muted playsInline className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80" />
                <div className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm text-warm-gold border border-warm-gold/40">
                  <Play size={16} fill="currentColor" className="ml-0.5" />
                </div>
              </div>
            ) : (
              <img src={item.url} alt={item.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-white font-medium truncate">{item.caption}</span>
              <span className="text-white/60 text-xs">{item.date}</span>
            </div>
            {item.type === 'video' && (
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white">
                <Play size={14} fill="currentColor" />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Fullscreen Viewer */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[70] text-white/50 hover:text-white p-2"
            >
              <X size={32} />
            </button>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-5xl max-h-[85vh] flex flex-col items-center"
            >
              <div className="relative w-full flex-1 min-h-0 flex items-center justify-center mb-6">
                {selectedItem.type === 'video' ? (
                  <video src={selectedItem.url} controls autoPlay playsInline className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
                ) : (
                  <img 
                    src={selectedItem.url} 
                    alt={selectedItem.caption} 
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" 
                  />
                )}
              </div>
              <div className="text-center w-full max-w-2xl bg-midnight/50 p-6 rounded-2xl border border-white/5">
                <h3 className="text-2xl font-serif text-parchment mb-2">{selectedItem.caption}</h3>
                <p className="text-warm-gold/80 text-sm mb-4">{selectedItem.date}</p>
                {selectedItem.description && (
                  <p className="text-soft-lavender/80">{selectedItem.description}</p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
