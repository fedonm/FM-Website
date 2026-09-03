import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { philosophyData } from '../data/content';
import { Compass, Zap, Award, Atom, CheckCircle2, FlaskConical, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const PhilosophySection: React.FC = () => {
  const { language } = useApp();
  const data = philosophyData[language];
  const [activePillar, setActivePillar] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      case 'Award':
        return <Award className="w-6 h-6" />;
      default:
        return <Atom className="w-6 h-6" />;
    }
  };

  return (
    <section id="philosophy" className="py-8 md:py-14 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 md:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-teal-700 dark:text-teal-400 uppercase mb-2 font-medium">
            <span>03</span>
            <span>—</span>
            <span>{language === 'el' ? 'Παιδαγωγική Προσέγγιση' : 'Pedagogical Framework'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
            {data.heading}
          </h2>
          <p className="mt-4 text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed font-sans font-light">
            {data.intro}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {data.pillars.map((pillar, idx) => {
            const isActive = activePillar === idx;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onClick={() => setActivePillar(idx)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-stone-900 border-teal-600 dark:border-teal-400 shadow-lg ring-1 ring-teal-500/20'
                    : 'bg-stone-50/70 dark:bg-stone-900/40 border-stone-200/80 dark:border-stone-800/80 hover:bg-white dark:hover:bg-stone-900 hover:border-stone-300 dark:hover:border-stone-700'
                }`}
              >
                <div>
                  {/* Top Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold text-stone-400 dark:text-stone-500">
                      Pillar {pillar.number}
                    </span>
                    <div className={`p-2.5 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-teal-700 dark:bg-teal-500 text-white dark:text-stone-950'
                        : 'bg-stone-200/70 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                    }`}>
                      {getIcon(pillar.iconName)}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1 mb-5">
                    <h3 className="font-serif text-2xl font-normal text-stone-900 dark:text-stone-100">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-teal-700 dark:text-teal-400 font-medium">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                {/* Practical Application Box */}
                <div className="pt-4 border-t border-stone-200/70 dark:border-stone-800/80 mt-auto">
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                {/* Active Indicator dot */}
                {isActive && (
                  <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-teal-600 dark:bg-teal-400 ring-4 ring-white dark:ring-stone-900" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Supporting Quote Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-stone-900 dark:bg-stone-900/90 text-stone-100 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-normal text-white">
              {language === 'el'
                ? '«Ο καλός καθηγητής δεν λύνει απλώς την άσκηση· διδάσκει στον μαθητή πώς να σκέφτεται.»'
                : '"A great tutor doesn\'t merely solve problems; they teach students how to think independently."'}
            </h4>
          </div>

          <a
            href="#booking"
            className="shrink-0 px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-500 text-white font-medium text-xs sm:text-sm transition-colors flex items-center gap-2"
          >
            <span>{language === 'el' ? 'Προγραμματισμός Μαθήματος' : 'Schedule a Session'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
