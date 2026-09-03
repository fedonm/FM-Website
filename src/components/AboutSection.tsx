import React from 'react';
import { useApp } from '../context/AppContext';
import { aboutData } from '../data/content';
import { FlaskConical, Atom, Dna, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  const { language } = useApp();
  const data = aboutData[language];

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
    <section id="about" className="py-8 md:py-14 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 md:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-teal-700 dark:text-teal-400 uppercase mb-2 font-medium">
            <span>04</span>
            <span>—</span>
            <span>{language === 'el' ? 'Προσωπική Ταυτότητα' : 'Identity & Background'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-slate-100 tracking-tight leading-tight">
            {data.heading}
          </h2>
          <p className="mt-4 text-stone-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-sans font-light">
            {data.subheading}
          </p>
        </div>

        {/* 2-Column Editorial Grid: Left Narrative, Right Scientific Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Bio Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="prose dark:prose-invert max-w-none space-y-5 text-stone-700 dark:text-slate-300 text-base leading-relaxed font-sans">
              {data.paragraphs.map((p, idx) => (
                <p key={idx} className="font-normal">
                  {p}
                </p>
              ))}
            </div>

            {/* Credibility Callout */}
            <div className="p-5 rounded-xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/60 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-teal-900 dark:text-teal-300">
                  {language === 'el' ? 'Ακαδημαϊκή & Παιδαγωγική Εγκυρότητα' : 'Academic & Pedagogical Rigor'}
                </h4>
                <p className="text-xs text-stone-600 dark:text-slate-300 leading-relaxed font-sans">
                  {language === 'el'
                    ? 'Όλες οι διδακτικές προσεγγίσεις ευθυγραμμίζονται με τη σύγχρονη πανεπιστημιακή βιβλιογραφία και τις απαιτήσεις του επίσημου αναλυτικού προγράμματος.'
                    : 'Instructional methodologies are directly aligned with premier scientific curricula and rigorous didactic frameworks.'}
                </p>
              </div>
            </div>
          </div>

          {/* Scientific Interests & Research Areas */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-xl font-medium text-stone-900 dark:text-slate-100">
              {data.scientificInterestsTitle}
            </h3>

            <div className="space-y-3">
              {data.scientificInterests.map((interest, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#131f36] border border-stone-200/80 dark:border-slate-800 hover:border-teal-500/50 transition-colors shadow-xs"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-stone-100 dark:bg-[#0c1524] shrink-0">
                      {getInterestIcon(idx)}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-base sm:text-lg font-medium text-stone-900 dark:text-slate-100">
                        {interest.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-500 dark:text-slate-400 leading-relaxed font-sans">
                        {interest.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
