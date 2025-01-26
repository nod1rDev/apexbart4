import {
  createContext,
  useState,
} from 'react';

import { supportedLanguages } from '../utils';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const changeLanguage = (langCode) => {
    if (supportedLanguages[langCode]) {
      setCurrentLanguage(langCode);
      document.documentElement.lang = langCode;
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
