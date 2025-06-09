/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    localePath: "./public/locales",
    reloadOnPrerender: true,
  },
  react: {
    useSuspense: false,
  },
  fallbackLng: {
    "fr-CA": ["fr", "en"],
    "fr-FR": ["fr", "en"],
    default: ["en"],
  },
  ns: ["common", "services", "packages", "about", "contact"],
  defaultNS: "common",
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false,
  },
};
