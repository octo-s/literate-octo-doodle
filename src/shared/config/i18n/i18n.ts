import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {ELanguage} from "shared/definitions";

const resources = {
    [ELanguage.ru]: {
        translation:  require('/src/shared/locales/en/translation').default,
    },
    [ELanguage.en]: {
        translation: require('/src/shared/locales/ru/translation').default,
    },
};

i18n
 .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: IS_DEV,
        resources,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;