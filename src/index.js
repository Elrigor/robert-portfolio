import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./components/translation/i18n";
import Cookies from "js-cookie";

i18n.use(initReactI18next).init({
  resources,
  lng: Cookies.get("language") || window.navigator.language || "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
