import { useState } from 'react';
import { motion } from 'motion/react';
import { PageProps } from '../types';
import { Navigation } from './Navigation';

export const RevealMessages = ({ onNext, onBack }: PageProps) => {
  const [revealed, setRevealed] = useState<number[]>([]);

  const messages = [
    { btn: "Tap this 💙", text: "I like talking to you" },
    { btn: "One more thing…", text: "You make my day better" },
    { btn: "Last one…", text: "I think I’m falling for you ❤️" }
  ];

  const toggle = (i: number) => {
    if (!revealed.includes(i)) {
      setRevealed([...revealed, i]);
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="min-h-[100dvh] w-full flex flex-col items-center justify-center px-6 py-20 text-center overflow-y-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-serif italic mb-10 md:mb-12">Some hidden thoughts...</h2>
      <div className="flex flex-col gap-4 md:gap-6 items-center w-full max-w-md">
        {messages.map((m, i) => (
          <div key={i} className="w-full">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236, 72, 153, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggle(i)}
              className={`w-full py-4 md:py-5 rounded-2xl border-2 border-pink-500/30 font-bold text-base md:text-lg transition-all ${revealed.includes(i) ? 'bg-pink-500 border-pink-500' : 'bg-transparent'}`}
            >
              {revealed.includes(i) ? m.text : m.btn}
            </motion.button>
          </div>
        ))}
      </div>
      <Navigation onNext={onNext} onBack={onBack} />
    </motion.section>
  );
};
