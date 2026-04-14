import { motion } from 'motion/react';
import { Sparkles, Zap, Settings as Motor } from 'lucide-react';
import { PageProps } from '../types';
import { Navigation } from './Navigation';

export const AboutHim = ({ onNext, onBack }: PageProps) => {
  const cards = [
    { 
      text: "Thank you for being so kind, so patient, and so “you”", 
      icon: <Zap className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />,
      desc: "Happy 1 month to us… and to many more moments together. 💕"
    },
    { 
      text: "You make things work like a perfect motor 💫", 
      icon: <Motor className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />,
      desc: "Effortless, reliable, and always moving us forward."
    },
    { 
      text: "You bring energy into my life", 
      icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-pink-400" />,
      desc: "Every moment with you is filled with light and joy."
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="min-h-[100dvh] w-full flex flex-col items-center justify-center px-6 py-20 max-w-6xl mx-auto overflow-y-auto"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center mb-12 md:mb-16">
        About You <span className="text-blue-400">💙</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="glass-card p-8 md:p-10 rounded-3xl group hover:border-pink-500/50 transition-colors"
          >
            <motion.div 
              animate={{ rotate: i === 1 ? [0, 360] : 0, scale: i === 0 ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="mb-6 md:mb-8 inline-block"
            >
              {card.icon}
            </motion.div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-pink-500 transition-colors">{card.text}</h3>
            <p className="text-white/60 font-light text-base md:text-lg leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
      <Navigation onNext={onNext} onBack={onBack} />
    </motion.section>
  );
};
