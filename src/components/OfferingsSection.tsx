import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { branchingCategoriesData, bookingData } from '../data';
import { BranchingCategory, SubCategory } from '../types';
import { ChevronRight, ArrowRight, CheckCircle2, BookOpen, Layers, Target, Compass, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const OfferingsSection: React.FC = () => {
  const { language, setPreselectedLevel } = useApp();
  const categories: BranchingCategory[] = branchingCategoriesData[language];
  const bookingDataLevelOptions = bookingData[language].levelOptions;

  // Active category index (defaults to 0)
  const [selectedCatId, setSelectedCatId] = useState<string>(categories[0].id);

  // Active subcategory ID within the selected category
  const [selectedSubId, setSelectedSubId] = useState<string>(
    categories[0].subcategories[0]?.id || ''
  );

  const currentCategory = categories.find((c) => c.id === selectedCatId) || categories[0];
  const currentSubcategory: SubCategory =
    currentCategory.subcategories.find((s) => s.id === selectedSubId) ||
    currentCategory.subcategories[0];

  const handleCategorySelect = (catId: string) => {
    setSelectedCatId(catId);
    const cat = categories.find((c) => c.id === catId);
    if (cat && cat.subcategories.length > 0) {
      setSelectedSubId(cat.subcategories[0].id);
    }
  };

  const handleBookCategory = (subjectTitle: string) => {
    let levelIndex = 5; // default to 'Άλλο'
    
    if (currentSubcategory.id === 'sec-education') levelIndex = 1;
    else if (currentSubcategory.id === 'panhellenic') levelIndex = 2;
    else if (currentSubcategory.id === 'intl-curricula') levelIndex = 4;
    else if (currentCategory.id === 'university-chemistry') levelIndex = 3;
    
    const targetLevel = bookingDataLevelOptions[levelIndex]?.value;
    if (targetLevel) {
      setPreselectedLevel(targetLevel);
    }

    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offerings" className="py-8 md:py-14 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 md:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-teal-700 dark:text-teal-400 uppercase mb-2 font-medium">
            <span>02</span>
            <span>—</span>
            <span>{language === 'el' ? 'Υπηρεσίες & Διδασκαλία' : 'Curriculum & Tutoring'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
            {language === 'el' ? 'Τι μπορώ να σου προσφέρω' : 'What I Can Offer You'}
          </h2>
          <p className="mt-4 text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed font-sans font-light">
            {language === 'el'
              ? 'Δομημένη, επιστημονικά ακριβής και εξατομικευμένη διδασκαλία Χημείας. Επέλεξε μια θεματική ενότητα για να ανακαλύψεις τα αναλυτικά προγράμματα και τη μεθοδολογία.'
              : 'Structured, scientifically grounded, and tailored chemistry instruction. Select a category below to explore specific syllabi, levels, and pedagogical methodology.'}
          </p>
        </div>

        {/* David Imel inspired Branching Architecture: Category List -> Subcategory Explorer -> Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Broad Categories Selector (01 - 04) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] uppercase tracking-wider font-mono text-stone-400 dark:text-stone-500 font-semibold px-2">
              {language === 'el' ? 'Κεντρικές Κατηγορίες' : 'Primary Categories'}
            </span>

            <div className="space-y-2">
              {categories.map((category) => {
                const isSelected = category.id === currentCategory.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleCategorySelect(category.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 relative group cursor-pointer ${
                      isSelected
                        ? 'bg-white dark:bg-stone-900 border-teal-600/80 dark:border-teal-400/80 shadow-sm ring-1 ring-teal-500/20'
                        : 'bg-stone-100/50 dark:bg-stone-900/30 border-stone-200/70 dark:border-stone-800/70 hover:bg-white dark:hover:bg-stone-900 hover:border-stone-300 dark:hover:border-stone-700'
                    }`}
                    id={`cat-btn-${category.id}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-xs font-semibold ${isSelected ? 'text-teal-700 dark:text-teal-400' : 'text-stone-400 dark:text-stone-500'}`}>
                          {category.number}
                        </span>
                        <h3 className={`font-serif text-base sm:text-lg font-medium transition-colors ${
                          isSelected ? 'text-stone-900 dark:text-stone-100 font-semibold' : 'text-stone-700 dark:text-stone-300'
                        }`}>
                          {category.title}
                        </h3>
                      </div>
                      
                      {category.badge && (
                        <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-md font-medium shrink-0 ${
                          isSelected
                            ? 'bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-300/60 dark:border-teal-800/60'
                            : 'bg-stone-200/60 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                        }`}>
                          {category.badge}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Subcategory Tabs & Deep Detailed Information Panel */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/90 dark:border-stone-800 p-6 sm:p-8 shadow-md">
              
              {/* Category Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 border-b border-stone-100 dark:border-stone-800 pb-4 mb-6">
                <span>{currentCategory.number}</span>
                <span>/</span>
                <span className="font-semibold text-stone-800 dark:text-stone-200">{currentCategory.title}</span>
                <span>/</span>
                <span className="text-teal-700 dark:text-teal-400 font-medium">{currentSubcategory?.title}</span>
              </div>

              {/* Subcategories Horizontal Pills Selector */}
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-wider font-mono text-stone-400 dark:text-stone-500 font-semibold block mb-2.5">
                  {language === 'el' ? 'Επιλογή Ενότητας:' : 'Select Subcategory:'}
                </span>

                <div className="flex flex-wrap gap-2">
                  {currentCategory.subcategories.map((sub) => {
                    const isSubSelected = sub.id === currentSubcategory.id;
                    return (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => setSelectedSubId(sub.id)}
                        className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                          isSubSelected
                            ? 'bg-teal-700 dark:bg-teal-600 text-white shadow-xs font-semibold'
                            : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                        }`}
                        id={`sub-btn-${sub.id}`}
                      >
                        {sub.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Subcategory Detailed View */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSubcategory.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 pt-2"
                >
                  {/* Header */}
                  <div>
                    <span className="text-xs font-mono text-teal-700 dark:text-teal-400 font-medium block">
                      {currentSubcategory.subtitle}
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 dark:text-stone-100 mt-1">
                      {currentSubcategory.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
                    {currentSubcategory.description}
                  </p>

                  {/* Topics Covered */}
                  <div className="bg-stone-50 dark:bg-stone-950/60 rounded-xl p-4 sm:p-5 border border-stone-200/70 dark:border-stone-800/80">
                    <span className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold flex items-center gap-1.5 mb-3">
                      <BookOpen className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      <span>{language === 'el' ? 'Βασικοί Άξονες & Θεματικές' : 'Core Topics Covered'}</span>
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentSubcategory.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Audience & Methodology 2-Column Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200/80 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/50">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold flex items-center gap-1.5 mb-1.5">
                        <Target className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                        <span>{language === 'el' ? 'Σε ποιους απευθύνεται' : 'Target Audience'}</span>
                      </span>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                        {currentSubcategory.audience}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200/80 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/50">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold flex items-center gap-1.5 mb-1.5">
                        <Compass className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                        <span>{language === 'el' ? 'Διδακτική Μεθοδολογία' : 'Pedagogical Method'}</span>
                      </span>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                        {currentSubcategory.methodology}
                      </p>
                    </div>
                  </div>

                  {/* CTA Footer inside panel */}
                  <div className="pt-4 border-t border-stone-200/80 dark:border-stone-800 flex items-center justify-between flex-wrap gap-3">
                    <span className="text-xs text-stone-500 dark:text-stone-400 font-sans">
                      {language === 'el' ? 'Δια ζώσης στη Θεσσαλονίκη & Online παντού' : 'In-person in Thessaloniki & Online worldwide'}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleBookCategory(currentSubcategory.title)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-800 dark:bg-teal-500 text-white dark:text-stone-950 text-xs font-semibold hover:bg-teal-900 dark:hover:bg-teal-400 transition-colors shadow-xs cursor-pointer"
                    >
                      <span>{language === 'el' ? 'Κράτηση για αυτή την ενότητα' : 'Book for this module'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
