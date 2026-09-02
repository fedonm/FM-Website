import React from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OfferingsSection } from './components/OfferingsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { HighlightsSection } from './components/HighlightsSection';
import { GallerySection } from './components/GallerySection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { FloatingBackToTop } from './components/FloatingBackToTop';

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf9] text-[#1a1917] dark:bg-[#0c1524] dark:text-[#f1f5f9] transition-colors duration-300 selection:bg-teal-600/20 selection:text-teal-900 dark:selection:bg-teal-400/25 dark:selection:text-teal-200 relative">
      {/* Tessellated Honeycomb Hexagon Grid */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.04] dark:opacity-[0.065] z-0"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="site-hex-grid"
            width="56"
            height="96.995"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 28 0 L 56 16.166 V 48.497 L 28 64.664 L 0 48.497 V 16.166 Z M 0 48.497 V 80.83 L 28 96.995 L 56 80.83 V 48.497 M 28 64.664 V 96.995"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#site-hex-grid)"
          className="text-stone-900 dark:text-teal-400"
        />
      </svg>

      <Navbar />
      <main className="flex-1 relative z-10">
        <Hero />
        <OfferingsSection />
        <PhilosophySection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <HighlightsSection />
        <GallerySection />
        <BookingSection />
      </main>
      <Footer />
      <FloatingBackToTop />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

