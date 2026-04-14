/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---
import { FloatingHearts } from './components/FloatingHearts';
import { Hero } from './components/Hero';
import { LoveFlow } from './components/LoveFlow';
import { AboutHim } from './components/AboutHim';
import { ImageSlider } from './components/ImageSlider';
import { Timeline } from './components/Timeline';
import { RevealMessages } from './components/RevealMessages';
import { Gallery } from './components/Gallery';
import { SurpriseSection } from './components/SurpriseSection';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const next = () => setCurrentPage((p) => p + 1);
  const back = () => setCurrentPage((p) => Math.max(0, p - 1));

  const pages = [
    <Hero onNext={next} />,
    <LoveFlow onNext={next} onBack={back} />,
    <AboutHim onNext={next} onBack={back} />,
    <ImageSlider onNext={next} onBack={back} />,
    <Timeline onNext={next} onBack={back} />,
    <RevealMessages onNext={next} onBack={back} />,
    <Gallery onNext={next} onBack={back} />,
    <SurpriseSection onBack={back} />
  ];

  return (
    <div className="romantic-gradient min-h-[100dvh] selection:bg-pink-500/30 overflow-x-hidden">
      <FloatingHearts />
      
      <main className="relative z-10 min-h-[100dvh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="min-h-[100dvh]"
          >
            {pages[currentPage]}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Page Indicator */}
      <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {pages.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 transition-all duration-500 rounded-full ${i === currentPage ? 'w-6 md:w-8 bg-pink-500' : 'w-1.5 md:w-2 bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
}
