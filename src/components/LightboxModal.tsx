import React, { useEffect } from 'react';
import { GalleryItem, Language } from '../types';
import { X, ChevronLeft, ChevronRight, Tag, Atom, FlaskConical, BookOpen, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LightboxModalProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  language: Language;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  isOpen,
  onClose,
  onPrev,
  onNext,
  language,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  const renderPlaceholderArtwork = (type: GalleryItem['placeholderType']) => {
    switch (type) {
      case 'radiochemistry':
        return (
          <div className="flex flex-col items-center justify-center text-teal-400 space-y-4 p-8">
            <div className="w-24 h-24 rounded-full border border-teal-500/40 flex items-center justify-center bg-teal-950/60 shadow-inner">
              <Atom className="w-12 h-12 animate-spin-slow" />
            </div>
            <div className="text-center">
              <p className="font-mono text-sm tracking-widest uppercase font-semibold text-teal-300">
                Radiochemical Synthesis
              </p>
              <p className="text-xs text-stone-400 mt-1">Laboratory of Radiochemistry · NKUA & AUTh</p>
            </div>
          </div>
        );
      case 'spectroscopy':
        return (
          <div className="flex flex-col items-center justify-center text-cyan-400 space-y-4 p-8">
            <div className="w-24 h-24 rounded-full border border-cyan-500/40 flex items-center justify-center bg-cyan-950/60 shadow-inner">
              <FlaskConical className="w-12 h-12" />
            </div>
            <div className="text-center">
              <p className="font-mono text-sm tracking-widest uppercase font-semibold text-cyan-300">
                NMR & Instrumental Analysis
              </p>
              <p className="text-xs text-stone-400 mt-1">1H/13C NMR · FT-IR · HPLC · ISO 17025</p>
            </div>
          </div>
        );
      case 'teaching':
        return (
          <div className="flex flex-col items-center justify-center text-amber-300 space-y-4 p-8">
            <div className="w-24 h-24 rounded-full border border-amber-500/40 flex items-center justify-center bg-amber-950/60 shadow-inner">
              <BookOpen className="w-12 h-12" />
            </div>
            <div className="text-center">
              <p className="font-mono text-sm tracking-widest uppercase font-semibold text-amber-200">
                Didactic Practice & Mentorship
              </p>
              <p className="text-xs text-stone-400 mt-1">Pedagogical Competence (PPDE) · Lyceum & University</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center text-stone-300 space-y-4 p-8">
            <div className="w-24 h-24 rounded-full border border-stone-500/40 flex items-center justify-center bg-stone-900 shadow-inner">
              <User className="w-12 h-12 text-teal-400" />
            </div>
            <div className="text-center">
              <p className="font-mono text-sm tracking-widest uppercase font-semibold text-stone-200">
                Fedon Mesthanefs
              </p>
              <p className="text-xs text-stone-400 mt-1">Chemist & Chemistry Tutor</p>
            </div>
          </div>
        );
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-950/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-stone-950/80 border border-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-stone-950/80 border border-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-[340px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-stone-950/80 border border-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Visual Display Area */}
          <div className="flex-1 bg-stone-950 min-h-[320px] sm:min-h-[420px] flex items-center justify-center relative overflow-hidden">
            {renderPlaceholderArtwork(item.placeholderType)}
          </div>

          {/* Sidebar Info & Caption */}
          <div className="w-full md:w-80 bg-stone-900 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-stone-800 text-stone-100 overflow-y-auto">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-teal-400 uppercase tracking-wider font-semibold">
                  {item.category}
                </span>
                <h3 className="font-serif text-2xl font-medium text-white mt-1">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-stone-300 leading-relaxed font-sans">
                {item.description}
              </p>

              {/* Tags */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider block mb-2">
                  {language === 'el' ? 'Ετικέτες:' : 'Keywords:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-stone-800 text-stone-300 border border-stone-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Micro footer */}
            <div className="pt-6 mt-6 border-t border-stone-800 text-[11px] font-mono text-stone-500 flex items-center justify-between">
              <span>{language === 'el' ? 'Πλοήγηση με βέλη' : 'Keyboard navigable'}</span>
              <span>ESC {language === 'el' ? 'για κλείσιμο' : 'to close'}</span>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
