import React from 'react';
import { useApp } from '../context/AppContext';
import { heroData } from '../data/content';
import { ArrowDownRight } from 'lucide-react';
import { motion } from 'motion/react';
import profilePhoto from '../assets/images/5Clipped_image_20231016_134059.png';
import { InteractiveFlask } from './InteractiveFlask';

export const Hero: React.FC = () => {
  const { language } = useApp();
  const data = heroData[language];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden scroll-mt-24"
    >
      {/* Subtle radial glow top-right for light/dark depth */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Container: Reorganized for balanced laptop/desktop full-width flow */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Main Editorial Column (Left on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Name Heading, Subtitle & Inline Profile Picture */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col-reverse sm:flex-row sm:items-center justify-start gap-5 sm:gap-7"
            >
              {/* Name and Title text */}
              <div className="space-y-2">
                <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-stone-900 dark:text-slate-50 leading-[1.08]">
                  {data.greeting}
                </h1>
                <p className="text-base sm:text-lg font-sans font-medium text-teal-700 dark:text-teal-400 tracking-wide">
                  {data.subtitle}
                </p>
              </div>

              {/* Integrated Portrait Box positioned closely alongside the name */}
              <div className="shrink-0 text-left">
                <div className="relative rounded-2xl bg-white/90 dark:bg-[#131f36]/90 border border-stone-200/90 dark:border-slate-800 p-1.5 shadow-md backdrop-blur-xs w-28 h-36 sm:w-32 sm:h-40">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-stone-100 dark:bg-[#0c1524] border border-stone-200/60 dark:border-slate-800/80 shadow-inner">
                    <img
                      src={profilePhoto}
                      alt={language === 'el' ? 'Φαίδων Μεσθανεύς' : 'Fedon Mesthanefs'}
                      className="w-full h-full object-cover object-top rounded-xl transition-transform duration-500 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Philosophy tagline */}
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="border-l-2 border-teal-600/60 dark:border-teal-400/60 pl-4 py-1.5 text-base sm:text-lg text-stone-700 dark:text-slate-300 font-serif italic"
            >
              "{data.tagline}"
            </motion.blockquote>

            {/* Bio paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-stone-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal text-justify"
            >
              {data.description}
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <button
                type="button"
                onClick={() => handleScrollTo('booking')}
                className="px-6 py-3 rounded-full bg-stone-900 dark:bg-teal-500 text-stone-50 dark:text-slate-950 font-medium text-sm hover:bg-teal-700 dark:hover:bg-teal-400 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2 group cursor-pointer font-sans"
                id="hero-book-btn"
              >
                <span>{data.primaryCta}</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('education')}
                className="px-5 py-3 rounded-full border border-stone-300 dark:border-slate-700 text-stone-700 dark:text-slate-300 font-medium text-sm hover:border-stone-900 dark:hover:border-slate-300 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer"
                id="hero-explore-btn"
              >
                {data.secondaryCta}
              </button>
            </motion.div>

          </div>

          {/* Interactive Chemistry Flask (Right on desktop - seamlessly fills space) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 w-full"
          >
            <InteractiveFlask language={language} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
