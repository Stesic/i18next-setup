import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import { setYupLocale } from "./utils/utils";

const defaultLanguage = navigator.language;

const languageDetector = {
  type: "languageDetector", // Exact type is 'backend' | 'logger' | 'languageDetector' | 'postProcessor' | 'i18nFormat' | '3rdParty'
  async: true, // flags below detection to be async
  detect: (callback) => {
    let lang = "";
    switch (defaultLanguage) {
      case "de-DE":
        lang = "de-AT";
        break;
      case "de-CH":
        lang = "de-AT";
        break;
      case "en-US":
        lang = "en-GB";
        break;
      case "sk":
        lang = "sk-SK";
        break;
      case "ro":
        lang = "ro-RO";
        break;
      default:
        lang = defaultLanguage;
    }
    callback(lang);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(Backend)
  .use(languageDetector)
  .init(
    {
      fallbackLng: {
        "de-DE": ["de-AT"],
        "de-CH": ["de-AT"],
        // "en-US": ["en-GB"],
        default: ["en-GB"],
      },
      keySeparator: false,
      interpolation: {
        escapeValue: false,
      },
      backend: {
        // for all available options read the backend's repository readme file
        loadPath: `/locales/{{lng}}.json`,
      },
    },

    setYupLocale
  );

export default i18n;
