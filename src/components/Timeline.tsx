import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { PageProps } from '../types';
import { Navigation } from './Navigation';

export const Timeline = ({ onNext, onBack }: PageProps) => {
  const events = [
    { day: "Day 1", text: "We just started talking…", desc: "A simple hello that changed everything." },
    { day: "Day 5", text: "I started smiling more…", desc: "Your messages became the highlight of my day." },
    { day: "Day 10", text: "You became important…", desc: "I realized I didn't want to go a day without you." },
    { day: "Day 25", text: "You became important…", desc: "The day we met… and everything quietly started changing" },
    { day: "Day 30", text: "I don’t know what the future holds,", desc: "but I know I want you in every part of it." }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-[100dvh] w-full flex flex-col items-center justify-center px-6 py-20 max-w-4xl mx-auto overflow-y-auto"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center mb-12 md:mb-16">Our Journey</h2>
      <div className="relative border-l-2 border-white/10 w-full max-w-lg mx-auto">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative mb-8 ml-8"
          >
            <div className="absolute top-0 w-6 h-6 bg-pink-500 rounded-full -left-[41px] flex items-center justify-center z-10">
              <Calendar className="w-3 h-3 text-white" />
            </div>
            <div className="glass-card p-5 md:p-6 rounded-2xl">
              <span className="text-pink-500 font-bold text-xs uppercase tracking-widest">{event.day}</span>
              <h3 className="text-lg md:text-xl font-bold mt-1 mb-1">{event.text}</h3>
              <p className="text-white/60 text-xs md:text-sm">{event.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <Navigation onNext={onNext} onBack={onBack} />
    </motion.section>
  );
};
