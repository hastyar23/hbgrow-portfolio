import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ku from './locales/ku.json';
import ar from './locales/ar.json';
import en from './locales/en.json';

// Regions in Iraq that are predominantly Kurdish (covering various spellings from GeoIP)
const KURDISH_REGIONS = [
  'erbil', 'arbil', 'hawler', 
  'sulaymaniyah', 'as sulaymaniyah', 'slemani', 'sulaymaniya', 'as sulaymaniyyah',
  'duhok', 'dahuk', 'dihok', 
  'halabja', 'helebce'
];
const ARABIC_COUNTRIES = ['IQ', 'SA', 'AE', 'QA', 'BH', 'KW', 'OM', 'EG', 'JO', 'LB', 'SY', 'YE', 'LY', 'SD', 'MA', 'DZ', 'TN'];

const customGeoDetector = {
  name: 'geoDetector',
  lookup(options) {
    // If user has explicitly chosen a language, don't run geo detector at all
    if (localStorage.getItem('userSetLang')) return localStorage.getItem('i18nextLng');

    fetch('/api/country')
      .then(res => res.json())
      .then(data => {
        if (!data || !data.country) return;
        
        // Don't override if user clicked a language button while we were fetching
        if (localStorage.getItem('userSetLang')) return;

        let detectedLang = 'en'; // Fallback

        if (data.country === 'IQ') {
          const region = (data.region || '').toLowerCase();
          const city = (data.city || '').toLowerCase();
          const rCode = (data.regionCode || '').toUpperCase();
          
          if (
            KURDISH_REGIONS.includes(region) || 
            KURDISH_REGIONS.includes(city) ||
            rCode === 'AR' || rCode === 'SU' || rCode === 'DA' || rCode === 'HA'
          ) {
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
      order: ['localStorage', 'geoDetector'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
