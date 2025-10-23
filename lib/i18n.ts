import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import commonEn from "../public/locales/en/common.json";
import servicesEn from "../public/locales/en/services.json";
import packagesEn from "../public/locales/en/packages.json";
import aboutEn from "../public/locales/en/about.json";
import contactEn from "../public/locales/en/contact.json";
import ceramicEn from "../public/locales/en/ceramic.json";
import bookingEn from "../public/locales/en/booking.json";
import homeEn from "../public/locales/en/home.json";

import commonFr from "../public/locales/fr/common.json";
import servicesFr from "../public/locales/fr/services.json";
import packagesFr from "../public/locales/fr/packages.json";
import aboutFr from "../public/locales/fr/about.json";
import contactFr from "../public/locales/fr/contact.json";
import ceramicFr from "../public/locales/fr/ceramic.json";
import bookingFr from "../public/locales/fr/booking.json";
import homeFr from "../public/locales/fr/home.json";

const resources = {
  en: {
    common: commonEn,
    services: servicesEn,
    packages: packagesEn,
    about: aboutEn,
    contact: contactEn,
    ceramic: ceramicEn,
    booking: bookingEn,
    home: homeEn,
  },
  fr: {
    common: commonFr,
    services: servicesFr,
    packages: packagesFr,
    about: aboutFr,
    contact: contactFr,
    ceramic: ceramicFr,
    booking: bookingFr,
    home: homeFr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",

    // Language detection options
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },

    // Namespace options
    defaultNS: "common",
    ns: [
      "common",
      "services",
      "packages",
      "about",
      "contact",
      "ceramic",
      "booking",
      "home",
    ],

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
