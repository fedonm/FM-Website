import React from 'react';
import { useApp } from '../context/AppContext';
import { footerData, navigationData } from '../data';
import { Atom, Mail, Linkedin, MapPin, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setLanguage, theme, toggleTheme } = useApp();
  const data = footerData[language];
  const navItems = navigationData[language];

  return (
    <footer className="border-t border-stone-200/90 dark:border-slate-800/80 bg-[#f7f6f2] dark:bg-[#080e1b] pt-16 pb-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-200/80 dark:border-slate-800/80">
          
          {/* Brand & Identity Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-stone-900 dark:text-slate-100">
              <span className="text-xl leading-none select-none">🧪</span>
              <span className="font-serif text-2xl font-semibold tracking-tight">
                {language === 'el' ? 'Φαίδων Μεσθανεύς' : 'Fedon Mesthanefs'}
              </span>
            </div>
            
            <p className="text-xs font-mono text-teal-700 dark:text-teal-400 uppercase tracking-wider font-semibold">
              {language === 'el' ? 'Χημικός & Καθηγητής Χημείας' : 'Chemist & Chemistry Tutor'}
            </p>

            <p className="font-serif italic text-base sm:text-lg text-stone-600 dark:text-slate-400 max-w-md">
              "{data.tagline}"
            </p>

            <div className="pt-2 flex flex-col space-y-1.5 text-xs font-mono text-stone-500 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                {language === 'el' ? 'Κέντρο, Θεσσαλονίκη' : 'City Center, Thessaloniki, Greece'}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-400" />
                mesthanefs@gmail.com
              </span>
            </div>
          </div>

          {/* Quick Navigation Links Column - All Sectors */}
          <div className="md:col-span-6 space-y-4">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-stone-800 dark:text-slate-200 mb-3">
                {data.quickNavTitle}
              </h4>

              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-xs font-sans">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="text-stone-600 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors inline-flex items-center gap-1.5 py-0.5"
                    >
                      <span className="text-stone-300 dark:text-slate-700">/</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500 dark:text-slate-400">
          <p>{data.copyright}</p>
        </div>

      </div>
    </footer>
  );
};
