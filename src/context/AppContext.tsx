import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, Theme } from '../types';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  preselectedLevel: string | null;
  setPreselectedLevel: (level: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const THEME_KEY = 'fedon_portfolio_theme';
const LANG_KEY = 'fedon_portfolio_lang';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language initialization: default to Greek 'el'
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === 'el' || saved === 'en') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'el'; // Greek default as required
  });

  // Theme initialization: default to 'light', but check localStorage or system pref
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      // ignore
    }
    return 'light';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      // ignore
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(THEME_KEY, newTheme);
    } catch {
      // ignore
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const [preselectedLevel, setPreselectedLevel] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme, setTheme, preselectedLevel, setPreselectedLevel }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
