
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const timelineEvents = [
  { time: '15:00', title: 'Сбор гостей', desc: 'Приветственный коктейль и легкие закуски в саду' },
  { time: '16:00', title: 'Церемония', desc: 'Торжественный момент обмена клятвами' },
  { time: '18:00', title: 'Праздничный ужин', desc: 'Гастрономическое путешествие и теплые поздравления' },
  { time: '22:00', title: 'Вечеринка и торт', desc: 'Танцы под звездами и праздничный десерт' },
];

const Program: React.FC = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 px-6 bg-[#1a1a1a] text-[#Fdfbf7] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif-playfair text-4xl md:text-6xl mb-4 tracking-widest uppercase"
          >
            ПРОГРАММА
          </motion.h2>
          <div className="w-20 h-[1px] bg-[#d4af37] mx-auto opacity-60"></div>
        </div>

        <div className="relative">
          {/* Static background line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-[#Fdfbf7]/10 hidden md:block"></div>
          
          {/* Animated active line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-[#d4af37] z-10 hidden md:block"
          ></motion.div>

          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="font-serif-playfair text-3xl md:text-5xl text-[#d4af37] block mb-2">{event.time}</span>
                  <h3 className="text-xl md:text-2xl font-sans-montserrat tracking-widest uppercase mb-4">{event.title}</h3>
                  <p className="text-[#Fdfbf7]/50 font-serif-cormorant italic text-lg leading-relaxed">{event.desc}</p>
                </div>

                {/* Dot in the middle */}
                <div className="w-4 h-4 rounded-full bg-[#d4af37] z-20 shadow-[0_0_15px_rgba(212,175,55,0.6)] hidden md:block"></div>

                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
