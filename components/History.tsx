
import React from 'react';
import { motion } from 'framer-motion';

interface HistoryProps {
  id?: string;
}

const History: React.FC<HistoryProps> = ({ id }) => {
  return (
    <section id={id} className="py-32 px-6 md:px-20 lg:px-40 bg-[#Fdfbf7] flex flex-col md:flex-row items-center gap-16 md:gap-24 overflow-hidden">
      <div className="w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1974&auto=format&fit=crop" 
            alt="Счастливая пара"
            className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out shadow-2xl"
          />
          <div className="absolute -bottom-8 -right-8 w-64 h-80 border-[1px] border-[#d4af37] z-[-1] hidden md:block"></div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif-playfair text-4xl md:text-5xl text-[#1a1a1a] mb-8 tracking-wide">
            НАША ИСТОРИЯ
          </h2>
          <div className="space-y-6 text-[#1a1a1a]/70 font-serif-cormorant text-xl md:text-2xl leading-relaxed italic">
            <p>
              Всё началось в одном из тех солнечных парков, где время, кажется, замирает. Анна читала книгу на скамейке под раскидистой липой, а Сергей просто проходил мимо, завороженный её спокойствием.
            </p>
            <p>
              Случайный вопрос о названии книги превратился в часовую беседу, которая не закончилась и по сей день. Тени деревьев становились длиннее, а мы понимали, что нашли нечто редкое и драгоценное.
            </p>
            <p>
              С того дня в парке наши пути сплелись в одну дорогу. Мы прошли через множество сезонов, но то первое ощущение свежести и тепла первой встречи всегда остается с нами.
            </p>
          </div>
          <div className="mt-12">
            <span className="font-serif-playfair text-2xl text-[#d4af37] italic">— Анна и Сергей</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default History;
