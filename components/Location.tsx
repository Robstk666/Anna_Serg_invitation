
import React from 'react';
import { motion } from 'framer-motion';

interface LocationProps {
  id?: string;
}

const Location: React.FC<LocationProps> = ({ id }) => {
  return (
    <section id={id} className="py-32 px-6 bg-[#Fdfbf7] border-t border-[#1a1a1a]/5 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif-playfair text-4xl md:text-6xl text-[#1a1a1a] mb-6 tracking-wide">
            МЕСТО ВСТРЕЧИ
          </h2>
          <div className="w-20 h-[1px] bg-[#d4af37] mx-auto opacity-60 mb-8"></div>
          <p className="font-serif-cormorant text-2xl md:text-3xl text-[#1a1a1a]/80 italic">
            Вилла "Отражение", Лазурный берег
          </p>
          <p className="mt-4 font-sans-montserrat text-xs tracking-[0.3em] uppercase text-[#1a1a1a]/40">
            ул. Парковая, д. 15, Санкт-Петербург
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full h-[400px] md:h-[600px] relative rounded-lg overflow-hidden shadow-2xl border border-[#d4af37]/20"
        >
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
            alt="Вилла Отражение"
            className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute bottom-8 right-8">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#Fdfbf7] text-[#1a1a1a] px-8 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-[#d4af37] hover:text-white transition-all duration-500 block shadow-xl"
            >
              Открыть карту
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
