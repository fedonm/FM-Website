import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { experienceData } from '../data';
import { Briefcase, ChevronDown, ChevronUp, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ExperienceSection: React.FC = () => {
  const { language } = useApp();
  const data = experienceData[language];
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0, 1, 2]);

  const toggleExpand = (idx: number) => {
    if (expandedIndices.includes(idx)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== idx));
    } else {
      setExpandedIndices([...expandedIndices, idx]);
    }
  };

  return (
    <section id="experience" className="py-8 md:py-14 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 md:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-teal-700 dark:text-teal-400 uppercase mb-2 font-medium">
            <span>05</span>
            <span>—</span>
            <span>{language === 'el' ? 'Επαγγελματική Διαδρομή' : 'Professional Record'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
            {data.heading}
          </h2>
          <p className="mt-4 text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed font-sans font-light">
            {data.subheading}
          </p>
        </div>

        {/* Vertical Experience Timeline */}
        <div className="relative pl-6 md:pl-10 border-l border-stone-300 dark:border-stone-800 space-y-10">
          {data.items.map((item, idx) => {
            const isExpanded = expandedIndices.includes(idx);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node marker */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-stone-950 border-2 border-teal-600 dark:border-teal-400 group-hover:scale-125 transition-transform duration-300 ring-4 ring-[#fcfbf9] dark:ring-[#0e1013]" />

                {/* Card container */}
                <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                          {item.period}
                        </span>
                        {item.standards && (
                          <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-semibold border border-teal-300/60 dark:border-teal-800/60 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" />
                            <span>{item.standards}</span>
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 dark:text-stone-100 mt-2.5">
                        {item.role}
                      </h3>
                      
                      <p className="text-sm font-sans font-medium text-teal-700 dark:text-teal-400 mt-0.5">
                        {item.organization}
                      </p>
                    </div>

                    {/* Expand/Collapse details toggle button */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(idx)}
                      className="self-start text-xs font-mono text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 p-1.5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors flex items-center gap-1 cursor-pointer shrink-0"
                      aria-label={isExpanded ? 'Collapse experience' : 'Expand experience'}
                    >
                      <span>{isExpanded ? (language === 'el' ? 'Σύμπτυξη' : 'Less') : (language === 'el' ? 'Λεπτομέρειες' : 'Details')}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Expandable Responsibilities Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-5 pt-4 border-t border-stone-100 dark:border-stone-800 space-y-3 overflow-hidden"
                      >
                        <div className="space-y-2">
                          {item.responsibilities.map((resp, rIdx) => (
                            <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </div>
                          ))}
                        </div>

                        {/* Applied skills tags */}
                        <div className="pt-3 flex flex-wrap gap-1.5">
                          {item.skillsApplied.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200/60 dark:border-stone-700/60"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
