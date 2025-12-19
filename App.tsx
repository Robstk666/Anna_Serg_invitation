
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import History from './components/History';
import Program from './components/Program';
import Location from './components/Location';
import RSVPForm from './components/RSVPForm';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Artificial delay to simulate loading high-end assets
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [isLoaded]);

  return (
    <div className="relative min-h-screen font-sans-montserrat selection:bg-[#d4af37]/30">
      <CustomCursor />
      
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#Fdfbf7]"
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="font-serif-playfair text-3xl tracking-[0.2em] text-[#d4af37] mb-2 uppercase">
                A & S
              </h1>
              <div className="w-12 h-[1px] bg-[#d4af37] mx-auto opacity-50" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {isLoaded && (
        <main className="bg-[#Fdfbf7]">
          <Hero id="hero" />
          <History id="history" />
          <Program id="program" />
          <Location id="location" />
          <RSVPForm id="rsvp" />
          
          <footer className="py-20 text-center bg-[#Fdfbf7] border-t border-[#1a1a1a]/5">
            <p className="font-serif-cormorant italic text-xl text-[#1a1a1a]/60">
              До встречи 15 июля
            </p>
            <div className="mt-8 text-[10px] tracking-[0.3em] uppercase text-[#1a1a1a]/30">
              © 2026 Anna & Sergey Wedding
            </div>
          </footer>
        </main>
      )}
    </div>
  );
};

export default App;
