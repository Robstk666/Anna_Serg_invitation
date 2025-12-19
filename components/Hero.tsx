
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Layer: Animated Gradient & Subtle "Texture" Video Simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#Fdfbf7] opacity-20 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-ethereal-white-silk-cloth-flowing-slowly-34372-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#Fdfbf7]/40 via-transparent to-[#Fdfbf7]"></div>
      </div>

      <div className="relative z-20 text-center px-4">
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-xs md:text-sm font-sans-montserrat text-[#d4af37] mb-8 uppercase tracking-[0.4em]"
        >
          Приглашение на свадьбу
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
          className="font-serif-playfair text-5xl md:text-8xl lg:text-9xl text-[#1a1a1a] mb-6 tracking-tight"
        >
          АННА <span className="text-[#d4af37]">&</span> СЕРГЕЙ
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <div className="w-px h-16 bg-[#d4af37]/40 mb-6"></div>
          <span className="font-serif-cormorant text-2xl md:text-4xl text-[#1a1a1a]/80 italic">
            15 июля 2026
          </span>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 left-0 right-0 flex flex-col items-center opacity-30 z-20 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase mb-2">ПРОГРАММА</span>
        <div className="w-[1px] h-10 bg-[#1a1a1a]"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
