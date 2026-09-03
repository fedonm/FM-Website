import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { galleryData } from '../data/content';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';
import { Atom, FlaskConical, BookOpen, User, Maximize2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const GallerySection: React.FC = () => {
  const { language } = useApp();
  const data = galleryData[language];
  
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = data.items.findIndex((i) => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + data.items.length) % data.items.length;
    setSelectedItem(data.items[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = data.items.findIndex((i) => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % data.items.length;
    setSelectedItem(data.items[nextIndex]);
  };

  const renderIcon = (type: GalleryItem['placeholderType']) => {
    switch (type) {
      case 'radiochemistry':
        return <Atom className="w-8 h-8 text-teal-500 group-hover:rotate-45 transition-transform duration-500" />;
      case 'spectroscopy':
        return <FlaskConical className="w-8 h-8 text-cyan-500 group-hover:-rotate-12 transition-transform duration-500" />;
      case 'teaching':
        return <BookOpen className="w-8 h-8 text-amber-500 group-hover:scale-110 transition-transform duration-500" />;
      default:
        return <User className="w-8 h-8 text-teal-500 group-hover:scale-110 transition-transform duration-500" />;
    }
  };

  return (
    <section id="gallery" className="py-8 md:py-14 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 md:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-teal-700 dark:text-teal-400 uppercase mb-2 font-medium">
            <span>08</span>
            <span>—</span>
            <span>{language === 'el' ? 'Οπτικό Αρχείο' : 'Visual Record'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
            {data.heading}
          </h2>
          <p className="mt-4 text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed font-sans font-light">
            {data.subheading}
          </p>
        </div>

        {/* Editorial Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => openLightbox(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 hover:border-teal-500/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image / Artwork Area */}
              <div className="relative aspect-4/3 bg-stone-100 dark:bg-stone-950 flex flex-col items-center justify-center p-6 overflow-hidden">
                <div className="p-4 rounded-full bg-white dark:bg-stone-900 shadow-sm border border-stone-200/60 dark:border-stone-800">
                  {renderIcon(item.placeholderType)}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <span className="px-3 py-1.5 rounded-full bg-white/90 dark:bg-stone-900/90 text-stone-900 dark:text-stone-100 text-xs font-mono font-medium flex items-center gap-1.5 shadow-sm">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{language === 'el' ? 'Προβολή' : 'View'}</span>
                  </span>
                </div>
              </div>

              {/* Caption Area */}
              <div className="p-5 space-y-1.5">
                <span className="text-[10px] uppercase font-mono tracking-wider text-teal-700 dark:text-teal-400 font-semibold block">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100 group-hover:text-teal-800 dark:group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
        language={language}
      />
    </section>
  );
};
