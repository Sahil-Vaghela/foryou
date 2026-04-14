import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { PageProps } from '../types';

export const Hero = ({ onNext }: PageProps) => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-[100dvh] w-full flex flex-col items-center justify-center text-center px-6 py-20 overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-6"
        >
          <Heart className="w-16 h-16 md:w-20 md:h-20 text-pink-500 fill-pink-500" />
        </motion.div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold mb-6 tracking-tight leading-tight">
          A Month of <span className="text-pink-500 italic">Us</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed mb-12">
          Every second with you feels like a beautiful dream I never want to wake up from.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="px-10 py-4 md:px-12 md:py-4 bg-white text-black rounded-full font-bold text-base md:text-lg hover:bg-pink-500 hover:text-white transition-all shadow-xl"
        >
          Begin Our Journey
        </motion.button>
      </motion.div>
    </motion.section>
  );
};
