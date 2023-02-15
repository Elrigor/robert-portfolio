import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocials";
import { useTranslation } from "react-i18next";
import HeaderSwitches from "./HeaderSwitches";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header id="top">
      <div className="container header__container">
        <h5>{t("greeting")}</h5>
        <h1>Robert Mihai Maracine</h1>
        <h5 className="text-light">{t("developer")}</h5>
        <CTA />
        <HeaderSocial />
        <HeaderSwitches />
      </div>
    </header>
  );
};

export default Header;
