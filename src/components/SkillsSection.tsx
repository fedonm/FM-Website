import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { skillsData } from '../data';
import { FlaskConical, Binary, Languages, LayoutGrid, Info, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const SkillsSection: React.FC = () => {
  const { language } = useApp();
  const data = skillsData[language];
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <FlaskConical className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 1:
        return <Binary className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 2:
        return <Languages className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      default:
        return <LayoutGrid className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="py-8 md:py-14 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 md:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-teal-700 dark:text-teal-400 uppercase mb-2 font-medium">
            <span>04</span>
            <span>—</span>
            <span>{language === 'el' ? 'Εξειδίκευση & Εργαλεία' : 'Competencies & Tools'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
            {data.heading}
          </h2>
          <p className="mt-4 text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed font-sans font-light">
            {data.subheading}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.categories.map((category, cIdx) => (
            <div
              key={cIdx}
              className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 p-6 sm:p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 shrink-0">
                    {getCategoryIcon(cIdx)}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100">
                      {category.title}
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-sans mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills clean minimal list items */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-stone-50/70 dark:bg-stone-950/40 border border-stone-200/60 dark:border-stone-800/60 flex items-center justify-between gap-3 hover:border-teal-500/40 transition-colors"
                    >
                      <span className="font-mono text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-300/60 dark:border-teal-800/60 shrink-0">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
