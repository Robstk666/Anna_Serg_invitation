
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GuestPreference {
  name: string;
  food: string;
  alcohol: string;
}

interface RSVPFormProps {
  id?: string;
}

const RSVPForm: React.FC<RSVPFormProps> = ({ id }) => {
  const [guestCount, setGuestCount] = useState<number>(1);
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guestPreferences, setGuestPreferences] = useState<GuestPreference[]>([
    { name: '', food: 'meat', alcohol: 'wine' }
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGuestCountChange = (count: number) => {
    setGuestCount(count);
    if (count === 1) {
      setGuestPreferences([guestPreferences[0]]);
    } else if (count === 2 && guestPreferences.length < 2) {
      setGuestPreferences([...guestPreferences, { name: '', food: 'meat', alcohol: 'wine' }]);
    }
  };

  const updateGuestPreference = (index: number, field: keyof GuestPreference, value: string) => {
    const newPrefs = [...guestPreferences];
    newPrefs[index] = { ...newPrefs[index], [field]: value };
    setGuestPreferences(newPrefs);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <section id={id} className="py-32 px-6 bg-[#Fdfbf7] flex items-center justify-center min-h-[600px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 rounded-full border border-[#d4af37] flex items-center justify-center mx-auto mb-8">
            <span className="text-[#d4af37] text-2xl">✓</span>
          </div>
          <h2 className="font-serif-playfair text-4xl mb-4 text-[#1a1a1a]">СПАСИБО!</h2>
          <p className="font-serif-cormorant text-xl italic text-[#1a1a1a]/60">
            {attending === 'yes' 
              ? 'Ваш ответ принят. С нетерпением ждем встречи!' 
              : 'Нам очень жаль, что вы не сможете быть с нами, но спасибо, что сообщили!'}
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id={id} className="py-32 px-6 md:px-20 lg:px-40 bg-[#Fdfbf7]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif-playfair text-4xl md:text-5xl text-[#1a1a1a] mb-6 tracking-wide">
            ПОДТВЕРДИТЕ ПРИСУТСТВИЕ
          </h2>
          <p className="font-serif-cormorant text-lg md:text-xl text-[#1a1a1a]/60 italic">
            Пожалуйста, заполните форму до 15 июня 2026
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Presence check */}
          <div className="space-y-6 bg-[#1a1a1a]/[0.02] p-8 rounded-lg border border-[#1a1a1a]/5">
            <label className="block text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-4">
              Сможете ли вы прийти?
            </label>
            <div className="flex flex-col md:flex-row gap-6">
              <label className="flex items-center space-x-4 cursor-pointer group">
                <input
                  type="radio"
                  name="attending"
                  checked={attending === 'yes'}
                  onChange={() => setAttending('yes')}
                  className="hidden peer"
                />
                <div className="w-5 h-5 rounded-full border border-[#d4af37] flex items-center justify-center peer-checked:bg-[#d4af37] transition-all">
                  <div className="w-2 h-2 rounded-full bg-[#Fdfbf7] opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                </div>
                <span className="font-serif-cormorant text-xl text-[#1a1a1a]/70 group-hover:text-[#1a1a1a]">Да, с удовольствием</span>
              </label>
              <label className="flex items-center space-x-4 cursor-pointer group">
                <input
                  type="radio"
                  name="attending"
                  checked={attending === 'no'}
                  onChange={() => setAttending('no')}
                  className="hidden peer"
                />
                <div className="w-5 h-5 rounded-full border border-[#d4af37] flex items-center justify-center peer-checked:bg-[#d4af37] transition-all">
                  <div className="w-2 h-2 rounded-full bg-[#Fdfbf7] opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                </div>
                <span className="font-serif-cormorant text-xl text-[#1a1a1a]/70 group-hover:text-[#1a1a1a]">К сожалению, нет</span>
              </label>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {attending === 'yes' ? (
              <motion.div
                key="yes-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                {/* Guest Count Selection */}
                <div className="space-y-4">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/40">
                    Количество гостей
                  </label>
                  <div className="flex gap-4">
                    {[1, 2].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => handleGuestCountChange(num)}
                        className={`px-8 py-3 font-serif-cormorant text-xl transition-all border ${
                          guestCount === num 
                            ? 'bg-[#1a1a1a] text-[#Fdfbf7] border-[#1a1a1a]' 
                            : 'bg-transparent text-[#1a1a1a]/40 border-[#1a1a1a]/10 hover:border-[#d4af37]'
                        }`}
                      >
                        {num === 1 ? 'Я один / одна' : 'Нас двое'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dynamic Preferences for each guest */}
                <div className="space-y-16">
                  {guestPreferences.map((guest, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="space-y-8 p-8 border border-[#d4af37]/10 bg-white/50 relative"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]"></div>
                      <h4 className="font-serif-playfair text-xl text-[#d4af37] italic">
                        {guestCount > 1 ? `Гость #${idx + 1}` : 'Ваши данные'}
                      </h4>

                      <div className="group">
                        <label className="block text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-2 transition-all group-focus-within:text-[#d4af37]">
                          Имя и Фамилия
                        </label>
                        <input
                          required
                          type="text"
                          value={guest.name}
                          onChange={(e) => updateGuestPreference(idx, 'name', e.target.value)}
                          className="w-full bg-transparent border-b border-[#1a1a1a]/10 py-4 font-serif-cormorant text-2xl focus:outline-none focus:border-[#d4af37] transition-all placeholder:text-[#1a1a1a]/20"
                          placeholder="Введите имя..."
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-2">
                            Предпочтения по еде
                          </label>
                          <select 
                            value={guest.food}
                            onChange={(e) => updateGuestPreference(idx, 'food', e.target.value)}
                            className="w-full bg-transparent border-b border-[#1a1a1a]/10 py-2 font-serif-cormorant text-xl focus:outline-none focus:border-[#d4af37] appearance-none cursor-pointer"
                          >
                            <option value="meat">Мясо</option>
                            <option value="fish">Рыба</option>
                            <option value="veggie">Вегетарианское</option>
                            <option value="allergy">У меня аллергия</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-2">
                            Алкоголь
                          </label>
                          <select 
                            value={guest.alcohol}
                            onChange={(e) => updateGuestPreference(idx, 'alcohol', e.target.value)}
                            className="w-full bg-transparent border-b border-[#1a1a1a]/10 py-2 font-serif-cormorant text-xl focus:outline-none focus:border-[#d4af37] appearance-none cursor-pointer"
                          >
                            <option value="wine">Вино</option>
                            <option value="whiskey">Виски</option>
                            <option value="champagne">Шампанское</option>
                            <option value="none">Не пью</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="no-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8 p-8 border border-[#1a1a1a]/5 bg-white/30"
              >
                <div className="group">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-2 transition-all group-focus-within:text-[#d4af37]">
                    Ваше Имя и Фамилия
                  </label>
                  <input
                    required
                    type="text"
                    value={guestPreferences[0].name}
                    onChange={(e) => updateGuestPreference(0, 'name', e.target.value)}
                    className="w-full bg-transparent border-b border-[#1a1a1a]/10 py-4 font-serif-cormorant text-2xl focus:outline-none focus:border-[#d4af37] transition-all placeholder:text-[#1a1a1a]/20"
                    placeholder="Введите ваше имя..."
                  />
                </div>
                <p className="font-serif-cormorant text-lg italic text-[#1a1a1a]/50">
                  Нам очень жаль, что вы не сможете прийти, но мы ценим, что вы нашли время ответить.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-[#1a1a1a] text-[#Fdfbf7] py-6 tracking-[0.4em] text-xs font-bold uppercase hover:bg-[#d4af37] transition-colors duration-500 flex items-center justify-center disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="animate-pulse">ОТПРАВКА...</span>
            ) : (
              attending === 'yes' ? "ОТПРАВИТЬ ОТВЕТ" : "ПОДТВЕРДИТЬ ОТСУТСТВИЕ"
            )}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;
