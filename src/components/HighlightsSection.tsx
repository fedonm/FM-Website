import React from 'react';
import { useApp } from '../context/AppContext';
import { highlightsData } from '../data';
import { motion } from 'motion/react';

export const HighlightsSection: React.FC = () => {
  const { language } = useApp();
  const data = highlightsData[language];

  return (
    <section id="highlights" className="py-8 md:py-14 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 md:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-teal-700 dark:text-teal-400 uppercase mb-2 font-medium">
            <span>07</span>
            <span>—</span>
            <span>{language === 'el' ? 'Ορόσημα' : 'Milestones'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
            {data.heading}
          </h2>
          <p className="mt-4 text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed font-sans font-light">
            {data.subheading}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 flex flex-col justify-between hover:border-teal-500/50 hover:shadow-md transition-all group"
            >
              <div>
                {/* Year & Category */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-semibold text-teal-700 dark:text-teal-400">
                    {item.year}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200/60 dark:border-stone-700/60">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100 group-hover:text-teal-800 dark:group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-2 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
