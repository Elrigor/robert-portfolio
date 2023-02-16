import React from "react";
import "./skills.css";
import { useTranslation } from "react-i18next";
import Frontend from "./frontendData";
import Backend from "./backendData";
import Web from "./webData";
import System from "./systemsData";

const Skill = () => {
  const { t } = useTranslation();
  return (
    <section id="skill">
      <h5>{t("knowledge")}</h5>
      <h2>{t("skills")}</h2>

      <div className="container skill__container">
        <Frontend />
        <Backend />
        <Web />
        <System />
      </div>
    </section>
  );
};

export default Skill;
