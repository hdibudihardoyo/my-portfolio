import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import en from "../i18n/locales/en.json"
import id from "../i18n/locales/id.json"

export const LANGS = ["id", "en"] as const
export type Lang = (typeof LANGS)[number]

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      id: { translation: id },
      en: { translation: en },
    },
    supportedLngs: [...LANGS],
    fallbackLng: "id",
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "lang",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n