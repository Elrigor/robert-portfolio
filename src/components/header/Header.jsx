import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocials";
import { useTranslation } from "react-i18next";
import HeaderSwitches from "./HeaderSwitches";
import TypingEffect from "./TypingEffect";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header id="top">
      <div className="container header__container">
        <h1>{t("greeting")}</h1>
        <TypingEffect />
        <CTA />
        <HeaderSocial />
        <HeaderSwitches />
      </div>
    </header>
  );
};

export default Header;
