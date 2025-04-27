import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import { Translation } from "react-i18next";

i18n

  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["de", "en", "fr"],
    // fallbackLng: "de",
    debug: false,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
