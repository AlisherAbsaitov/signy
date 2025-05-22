import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import RU from "./RU.json";
import EN from "./EN.json";
import UZ from "./UZ.json";

const resources = {
  en: {
    translation: EN,
  },
  ru: {
    translation: RU,
  },
  uz: {
    translation: UZ,
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "ru", 

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
