import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageProps } from '../types';
import { Navigation } from './Navigation';
import img0 from "../assets/img0.jpeg"
import img1 from "../assets/img7.jpeg"
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"
import img4 from "../assets/img4.jpeg"
import img5 from "../assets/img5.jpeg"


export const Gallery = ({ onNext, onBack }: PageProps) => {
  const [index, setIndex] = useState(0);
  const images = [
    { url: img0, caption: "Walking beside you, holding your arm, feels like holding my whole world." },
    { url: img1, caption: "That sunset walk we'll never forget " },
    { url: img2, caption: "Late night talks that felt like minutes " },
    { url: img3, caption: "Just us, being perfectly ourselves " },
    { url: img4, caption: "The little things that mean the most " },
    { url: img5, caption: "Forever starts with this one month ❤️" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[100dvh] w-full flex flex-col items-center justify-center px-6 py-20 max-w-4xl mx-auto overflow-y-auto"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center mb-10 md:mb-12">Wait and watch all images</h2>
      
      <div className="relative w-full aspect-[4/5] md:aspect-video rounded-3xl overflow-hidden glass-card shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img 
              src={images[index].url} 
              alt={images[index].caption} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Aesthetic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* 1-line Message */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-8 left-0 right-0 px-8 text-center"
            >
              <p className="text-lg md:text-2xl font-cursive text-white drop-shadow-lg italic">
                {images[index].caption}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Dots */}
        <div className="absolute top-6 right-6 flex gap-2 z-10">
          
          {images.map((_, i) => (
            <div 
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-6 bg-pink-500' : 'w-1.5 bg-white/30'}`}
            />
          ))}
        </div>
      </div>

      <Navigation onNext={onNext} onBack={onBack} />
    </motion.section>
  );
};
