import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ku from './locales/ku.json';
import ar from './locales/ar.json';
import en from './locales/en.json';

// Regions in Iraq that are predominantly Kurdish
const KURDISH_REGIONS = ['Erbil', 'Sulaymaniyah', 'Duhok', 'Halabja'];
const ARABIC_COUNTRIES = ['IQ', 'SA', 'AE', 'QA', 'BH', 'KW', 'OM', 'EG', 'JO', 'LB', 'SY', 'YE', 'LY', 'SD', 'MA', 'DZ', 'TN'];

const customGeoDetector = {
  name: 'geoDetector',
  lookup(options) {
    // Only detect if it's the first visit (no local storage set)
    const storedLang = localStorage.getItem('i18nextLng');
    if (storedLang) return storedLang;

    // We can't do async lookup directly in i18next sync lookup phase easily without suspending,
    // so we return undefined here and trigger an async check to change language if needed.
    
    fetch('/api/country')
      .then(res => res.json())
      .then(data => {
        if (!data || !data.country) return;
        
        // Don't override if user already clicked a language button while we were fetching
        if (localStorage.getItem('i18nextLng')) return;

        let detectedLang = 'en'; // Fallback

        if (data.country === 'IQ') {
          if (KURDISH_REGIONS.includes(data.region) || KURDISH_REGIONS.includes(data.city)) {
            detectedLang = 'ku';
          } else {
            detectedLang = 'ar'; // Baghdad, Basra, etc.
          }
        } else if (ARABIC_COUNTRIES.includes(data.country)) {
          detectedLang = 'ar';
        }

        i18n.changeLanguage(detectedLang);
      })
      .catch(() => {
        // Silently fail on network error or local dev
      });

    return undefined; // Let i18next fall back to navigator
  },
  cacheUserLanguage(lng, options) {
    localStorage.setItem('i18nextLng', lng);
  }
};

const languageDetector = new LanguageDetector();
languageDetector.addDetector(customGeoDetector);

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ku: { translation: ku },
      ar: { translation: ar },
      en: { translation: en },
    },
    fallbackLng: 'ku', // Default fallback
    detection: {
      order: ['localStorage', 'geoDetector', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
