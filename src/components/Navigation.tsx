import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface NavigationProps {
  onNext: () => void;
  onBack?: () => void;
  nextLabel?: string;
  showBack?: boolean;
}

export const Navigation = ({ onNext, onBack, nextLabel = "Next", showBack = true }: NavigationProps) => (
  <div className="flex gap-4 mt-12 justify-center">
    {showBack && onBack && (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onBack}
        className="px-6 py-3 border border-white/20 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </motion.button>
    )}
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onNext}
      className="px-8 py-3 bg-pink-500 text-white rounded-full font-medium flex items-center gap-2 hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/20"
    >
      {nextLabel}
      <ChevronRight className="w-4 h-4" />
    </motion.button>
  </div>
);
