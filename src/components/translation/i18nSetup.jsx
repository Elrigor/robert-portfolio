import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./i18n";
import Cookies from "js-cookie";

const initializei18n = () => {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: Cookies.get("language") || window.navigator.language || "en",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    });
};

export default initializei18n;
