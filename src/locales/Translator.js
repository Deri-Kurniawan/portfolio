import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { supportedLanguages } from "./languages.js";

const Translator = {
  init: () => {
    i18n
      .use(initReactI18next)
      .use(LanguageDetector)
      .use(HttpApi)
      .init({
        supportedLngs: supportedLanguages,
        fallbackLng: "en",
        detection: {
          order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
          caches: ["cookie"],
        },
        backend: {
          loadPath: "/assets/locales/{{lng}}/translation.json",
        },
        react: { useSuspense: false },
      });
  },
};

export default Translator;
