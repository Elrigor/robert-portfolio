import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./components/translation/i18n";

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: window.navigator.language || "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });


ReactDOM.render(<App/>, document.querySelector('#root'));