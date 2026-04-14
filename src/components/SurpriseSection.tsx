import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ChevronLeft, Volume2, VolumeX } from 'lucide-react';

export const SurpriseSection = ({ onBack }: { onBack: () => void }) => {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  
  const buildUp = [
    "I didn’t plan this…",
    "But it happened…",
    "And now…",
    "You matter to me ❤️"
  ];

  useEffect(() => {
    if (active && step < buildUp.length) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [active, step]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[100dvh] w-full flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden"
    >
      {!active ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="z-10"
        >
          <h2 className="text-3xl sm:text-4xl font-serif italic mb-10 md:mb-12">Ready for the final surprise?</h2>
          <motion.button
            whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActive(true)}
            className="w-28 h-28 md:w-32 md:h-32 bg-pink-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(236,72,153,0.5)] group"
          >
            <Heart className="w-12 h-12 md:w-14 md:h-14 fill-white group-hover:scale-125 transition-transform" />
          </motion.button>
          <button onClick={onBack} className="mt-10 md:mt-12 text-white/40 hover:text-white transition-colors flex items-center gap-2 mx-auto">
            <ChevronLeft className="w-4 h-4" /> Go back
          </button>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center p-6 overflow-y-auto"
        >
          <div className="absolute top-6 right-6 z-10">
            <button onClick={() => setIsMuted(!isMuted)} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              {isMuted ? <VolumeX className="w-5 h-5 md:w-6 md:h-6" /> : <Volume2 className="w-5 h-5 md:w-6 md:h-6" />}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {step < buildUp.length ? (
              <motion.p
                key={step}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 1 }}
                className="text-3xl sm:text-4xl md:text-6xl font-serif italic text-white/80"
              >
                {buildUp[step]}
              </motion.p>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center max-w-4xl w-full py-10"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-pink-500/10 blur-[120px] rounded-full pointer-events-none"
                />
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12 }}
                  className="mb-8 md:mb-12"
                >
                  <Heart className="w-24 h-24 md:w-32 md:h-32 text-pink-500 fill-pink-500 mx-auto drop-shadow-[0_0_30px_rgba(236,72,153,0.8)]" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold mb-8 md:mb-10 leading-tight"
                >
                  It’s just been 1 month… <br />
                  But you already feel like something special ❤️
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-2xl sm:text-3xl md:text-5xl font-cursive text-pink-400"
                >
                  I think… I’m falling for you 💙
                </motion.p>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4 }}
                  onClick={() => {
                    setActive(false);
                    setStep(0);
                  }}
                  className="mt-12 md:mt-20 px-8 py-3 md:px-10 md:py-4 border border-white/20 rounded-full text-sm md:text-base uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  Restart Our Story
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </motion.section>
  );
};
