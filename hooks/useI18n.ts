"use client";

import { useTranslation } from "react-i18next";

export const useI18n = (namespace?: string) => {
  const { t, i18n } = useTranslation(namespace);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const getCurrentLanguage = () => {
    return i18n.language;
  };

  const isEnglish = () => {
    return i18n.language === "en";
  };

  const isFrench = () => {
    return i18n.language === "fr";
  };

  return {
    t,
    changeLanguage,
    getCurrentLanguage,
    isEnglish,
    isFrench,
    language: i18n.language,
  };
};
