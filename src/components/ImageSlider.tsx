import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { PageProps } from '../types';
import { Navigation } from './Navigation';
import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img9.jpeg"
import img3 from "../assets/img11.jpeg"
import img4 from "../assets/img13.jpeg"


export const ImageSlider = ({ onNext, onBack }: PageProps) => {
  const [index, setIndex] = useState(0);
  const slides = [
    { 
      url: img1, 
      text: "You Are",
      sub: "“You were my ‘yes’ from the very beginning.”"
    },
    { 
      url: img2, 
      text: "Harshil",
      sub: "It’s only been one month, but it already feels like you’ve become such an important part of my life."
    },
    { 
      url: img3, 
      text: "Your way of talking…",
      sub: "The way you spoke to me — with so much respect and calmness,that was the first thing that touched my heart.."
    },
    { 
      url: img4, 
      text: "Everything feels different with you 💙",
      sub: "A world I never knew existed."
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[100dvh] w-full relative overflow-hidden flex flex-col items-center justify-center py-20 px-6"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src={slides[index].url} 
            alt="Romantic" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative flex flex-col items-center justify-center text-center z-10 w-full max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-4 md:mb-6 drop-shadow-2xl leading-tight">
              {slides[index].text}
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-cursive drop-shadow-lg">
              {slides[index].sub}
            </p>
          </motion.div>
        </AnimatePresence>
        
        <div className="flex gap-4 mt-8 md:mt-12">
          
          <button onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)} className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button onClick={() => setIndex((i) => (i + 1) % slides.length)} className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
       <h1> First Use this buttons than pink color button</h1>

        <div className="mt-12 md:mt-16">
          <Navigation onNext={onNext} onBack={onBack} />
        </div>
      </div>
    </motion.section>
  );
};
