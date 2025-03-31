import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files directly (alternative to using backend)
import englishTranslations from './locales/en/translation.json';
import kannadaTranslations from './locales/kn/translation.json';
import teluguTranslations from './locales/te/translation.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en:{
        translation: englishTranslations
      },
      kn: {
        translation: kannadaTranslations
      },
      te: {
        translation: teluguTranslations
      }
    },
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;