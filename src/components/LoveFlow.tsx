import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { PageProps } from '../types';

export const LoveFlow = ({ onNext, onBack }: PageProps) => {
  const [step, setStep] = useState(0);
  const steps = [
    { text: "Hey… I want to tell you something 💙", button: "Next" },
    { text: "This 1 month with you…", button: "Next" },
    { text: "It didn’t feel normal… it felt special ✨", button: "Continue" },
    { text: "I've been thinking about how much you mean to me.", button: "See more" }
  ];

  const handleStepNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onNext();
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-[100dvh] w-full flex flex-col items-center justify-center px-6 py-20 overflow-y-auto"
    >
      <div className="max-w-2xl w-full glass-card p-8 md:p-12 rounded-3xl text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
          <motion.div 
            className="h-full bg-pink-500"
            initial={{ width: "0%" }}
            animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-[120px] md:min-h-[150px] flex flex-col items-center justify-center"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic mb-8 md:mb-10 leading-snug">
              {steps[step].text}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStepNext}
              className="px-8 py-3 md:px-10 md:py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-pink-500 hover:text-white transition-colors"
            >
              {steps[step].button}
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
      <button onClick={onBack} className="mt-8 text-white/40 hover:text-white transition-colors flex items-center gap-2">
        <ChevronLeft className="w-4 h-4" /> Go back
      </button>
    </motion.section>
  );
};
