import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';

export const FloatingBackToTop: React.FC = () => {
  const { language } = useApp();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 250px
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40"
        >
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-stone-900/90 dark:bg-stone-800/90 hover:bg-teal-700 dark:hover:bg-teal-600 text-stone-50 dark:text-stone-100 backdrop-blur-md border border-stone-700/50 dark:border-stone-600/50 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
            aria-label={language === 'el' ? 'Επιστροφή στην κορυφή' : 'Back to top'}
            title={language === 'el' ? 'Επιστροφή στην κορυφή' : 'Back to top'}
            id="floating-back-to-top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span className="text-xs font-mono font-medium hidden sm:inline-block">
              {language === 'el' ? 'Κορυφή' : 'Top'}
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
