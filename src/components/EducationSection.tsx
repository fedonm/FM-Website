import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { educationData, aboutData } from '../data';
import { GraduationCap, ChevronDown, ChevronUp, MapPin, Award, CheckCircle2, Atom, FlaskConical, Dna, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const EducationSection: React.FC = () => {
  const { language } = useApp();
  const data = educationData[language];
  const researchData = aboutData[language];
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0, 1, 2]); // First 3 expanded by default

  const toggleExpand = (idx: number) => {
    if (expandedIndices.includes(idx)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== idx));
    } else {
      setExpandedIndices([...expandedIndices, idx]);
    }
  };

  const getInterestIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Atom className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 1:
        return <FlaskConical className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 2:
        return <Dna className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      default:
        return <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
    }
  };

  return (
    <section id="education" className="py-8 md:py-14 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 md:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-teal-700 dark:text-teal-400 uppercase mb-2 font-medium">
            <span>04</span>
            <span>—</span>
            <span>{language === 'el' ? 'Εκπαίδευση & Έρευνα' : 'Education & Research'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
            {data.heading}
          </h2>
          <p className="mt-4 text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed font-sans font-light">
            {data.subheading}
          </p>
        </div>

        {/* Sophisticated Vertical Timeline */}
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

                {/* Timeline Card */}
                <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all">
                  
                  {/* Top Header: Period, Degree, Institution */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                          {item.period}
                        </span>
                        {item.highlightBadge && (
                          <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-semibold border border-teal-300/60 dark:border-teal-800/60">
                            {item.highlightBadge}
                          </span>
                        )}
                        {item.grade && (
                          <span className="font-mono text-xs text-amber-700 dark:text-amber-400 font-medium">
                            {language === 'el' ? `Βαθμός: ${item.grade}` : `Grade: ${item.grade}`}
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 dark:text-stone-100 mt-2.5">
                        {item.degree}
                      </h3>
                      
                      <p className="text-sm font-sans font-medium text-teal-700 dark:text-teal-400 mt-0.5">
                        {item.field}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-stone-500 dark:text-stone-400 mt-2 font-mono flex-wrap">
                        <span className="font-medium text-stone-700 dark:text-stone-300">{item.institution}</span>
                        {item.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-stone-400" />
                            <span>{item.location}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Expand/Collapse details toggle button */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(idx)}
                      className="self-start text-xs font-mono text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 p-1.5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors flex items-center gap-1 cursor-pointer shrink-0"
                      aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                    >
                      <span>{isExpanded ? (language === 'el' ? 'Σύμπτυξη' : 'Less') : (language === 'el' ? 'Λεπτομέρειες' : 'Details')}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Expandable Details Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-5 pt-4 border-t border-stone-100 dark:border-stone-800 space-y-2 overflow-hidden"
                      >
                        {item.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Integrated Scientific & Research Focus Areas (from Sector 04) */}
        <div className="mt-12 pt-4">
          <div className="max-w-2xl mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 dark:text-stone-100">
              {researchData.scientificInterestsTitle}
            </h3>
            <p className="mt-2 text-stone-500 dark:text-slate-400 text-sm font-sans">
              {language === 'el'
                ? 'Ερευνητικές κατευθύνσεις και επιστημονική εξειδίκευση που τροφοδοτούν τη διδακτική μεθοδολογία.'
                : 'Research specializations and chemical disciplines powering didactic rigor.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {researchData.scientificInterests.map((interest, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 hover:border-teal-500/40 transition-colors shadow-xs"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 shrink-0">
                    {getInterestIcon(idx)}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-base sm:text-lg font-medium text-stone-900 dark:text-stone-100">
                      {interest.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-sans">
                      {interest.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
