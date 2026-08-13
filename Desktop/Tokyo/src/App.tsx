import React, { useState, useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Journey } from './pages/Journey';
import { Letters } from './pages/Letters';
import { Memories } from './pages/Memories';
import { VoiceRoom } from './pages/VoiceRoom';
import { NightSky } from './pages/NightSky';
import { FutureVault } from './pages/FutureVault';
import { About } from './pages/About';
import { FinalLetter } from './pages/FinalLetter';

const sectionIds = ['home', 'journey', 'letters', 'memories', 'voice-room', 'night-sky', 'future-vault', 'about', 'final-letter'];

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout activeSection={activeSection}>
      <Home />
      <Journey />
      <Letters />
      <Memories />
      <VoiceRoom />
      <NightSky />
      <FutureVault />
      <About />
      <FinalLetter />
    </Layout>
  );
}

export default App;
