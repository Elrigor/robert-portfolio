import ReactDOM from "react-dom/client";
import App from "./App";
import initializei18n from "./components/translation/i18nSetup";
import "./index.css";

initializei18n();

// Redirect to LinkedIn
if (window.location.pathname === "/in") {
    window.location.replace("https://www.linkedin.com/in/robertmima");
  }

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
