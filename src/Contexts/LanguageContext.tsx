import React, { createContext, useContext, useEffect, useState } from 'react';
import translations from '../data/translations';

export type Language = 'vi' | 'en' | 'jp';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  useEffect(() => {
    // Check localStorage on component mount
    const savedLanguage = localStorage.getItem('banhcuon-language') as Language | null;
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'vi' || browserLang === 'en' || browserLang === 'ja') {
        setLanguage(browserLang === 'ja' ? 'jp' : browserLang as Language);
      }
    }
  }, []);

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('banhcuon-language', language);
    // Update document lang attribute
    document.documentElement.lang = language === 'jp' ? 'ja' : language;
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language] || translations['vi']; // Fallback to Vietnamese if not found
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key} for language: ${language}`);
        return typeof value === 'string' ? value : key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};