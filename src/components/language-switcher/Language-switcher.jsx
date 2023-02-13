import { useTranslation } from "react-i18next";

function ChangeLanguage() {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button><br></br>
      <button onClick={() => changeLanguage("es")}>Español</button>
    </div>
  );
}

export default ChangeLanguage;