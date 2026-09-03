import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { navigationData } from '../data/content';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const GreekFlag: React.FC<{ className?: string }> = ({ className = "w-5 h-3.5" }) => (
  <svg viewBox="0 0 27 18" className={`${className} rounded-[2px] shadow-xs overflow-hidden shrink-0`} aria-hidden="true">
    <rect width="27" height="18" fill="#005bae" />
    <rect y="2" width="27" height="2" fill="#ffffff" />
    <rect y="6" width="27" height="2" fill="#ffffff" />
    <rect y="10" width="27" height="2" fill="#ffffff" />
    <rect y="14" width="27" height="2" fill="#ffffff" />
    <rect width="10" height="10" fill="#005bae" />
    <rect x="4" width="2" height="10" fill="#ffffff" />
    <rect y="4" width="10" height="2" fill="#ffffff" />
  </svg>
);

const UkFlag: React.FC<{ className?: string }> = ({ className = "w-5 h-3.5" }) => (
  <svg viewBox="0 0 60 30" className={`${className} rounded-[2px] shadow-xs overflow-hidden shrink-0`} aria-hidden="true">
    <rect width="60" height="30" fill="#012169" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6" />
    <path d="M0,0 L30,15 M60,30 L30,15 M60,0 L30,15 M0,30 L30,15" stroke="#C8102E" strokeWidth="2" />
    <path d="M30,0 v30 M0,15 h60" stroke="#ffffff" strokeWidth="10" />
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
  </svg>
);

export const Navbar: React.FC = () => {
  const { language, setLanguage, theme, toggleTheme } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = navigationData[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map((item) => item.id);
      const currentPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= currentPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (targetId: string) => {
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    const navOffset = 76;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = targetEl.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = Math.max(0, elementPosition - navOffset);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      // Allow mobile drawer transition to start without interrupting smooth scrolling
      setTimeout(() => {
        scrollToSection(targetId);
      }, 80);
    } else {
      scrollToSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fcfbf9]/90 dark:bg-[#0c1524]/90 backdrop-blur-md border-b border-stone-200/80 dark:border-slate-800/80 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-1.5 text-stone-900 dark:text-slate-100 transition-colors"
            id="nav-logo"
          >
            <span className="text-[22px] leading-none group-hover:scale-115 transition-transform duration-300 select-none">🧪</span>
            <span className="font-serif text-[26px] font-bold tracking-tight">
              {language === 'el' ? 'ΦΜ' : 'FM'}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.slice(1).map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-teal-800 dark:text-teal-300 font-semibold'
                      : 'text-stone-600 dark:text-slate-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-teal-600 dark:bg-teal-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: [ 🇬🇷 🇬🇧 ] [ ☀ / ☾ ] + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Selector: Greek & UK Flag Buttons strictly to the LEFT of theme toggle */}
            <div
              className="flex items-center bg-stone-100 dark:bg-[#131f36] rounded-full p-0.5 border border-stone-200/80 dark:border-slate-700/80 shadow-xs"
              role="group"
              aria-label="Language Selector"
              id="language-selector"
            >
              <button
                type="button"
                onClick={() => setLanguage('el')}
                className={`flex items-center justify-center w-8 h-7 rounded-full transition-all ${
                  language === 'el'
                    ? 'bg-white dark:bg-[#0c1524] shadow-xs scale-105 opacity-100'
                    : 'opacity-55 hover:opacity-90 hover:scale-105'
                }`}
                title="Ελληνικά"
                aria-label="Ελληνικά"
                aria-pressed={language === 'el'}
                id="lang-btn-el"
              >
                <GreekFlag />
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`flex items-center justify-center w-8 h-7 rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-white dark:bg-[#0c1524] shadow-xs scale-105 opacity-100'
                    : 'opacity-55 hover:opacity-90 hover:scale-105'
                }`}
                title="English"
                aria-label="English"
                aria-pressed={language === 'en'}
                id="lang-btn-en"
              >
                <UkFlag />
              </button>
            </div>

            {/* Light / Dark Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-100 dark:bg-[#131f36] border border-stone-200/80 dark:border-slate-700/80 text-stone-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 hover:bg-stone-200/60 dark:hover:bg-slate-700/80 transition-all shadow-xs"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle visual theme"
              id="theme-toggle-btn"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 transition-transform duration-300 hover:rotate-12" />
              ) : (
                <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45 text-amber-400" />
              )}
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-stone-100 dark:bg-[#131f36] border border-stone-200/80 dark:border-slate-700/80 text-stone-700 dark:text-slate-200 hover:text-stone-900 dark:hover:text-white transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Open Navigation Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-b border-stone-200 dark:border-slate-800 bg-[#fcfbf9]/98 dark:bg-[#0c1524]/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-lg overflow-hidden"
            id="mobile-drawer"
          >
            <div className="flex flex-col space-y-1 max-w-md mx-auto">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2.5 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 font-semibold'
                        : 'text-stone-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400" />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
