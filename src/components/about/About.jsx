import React from "react";
import "./about.css";
import IMG from "../../assets/code.jpg";
import { BsFillAwardFill } from "react-icons/bs";
import { RiCodeBoxFill } from "react-icons/ri";
import { IoLanguageSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about">
      <h5>{t("know")}</h5>
      <h2>{t("about")}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img style={{ height: "100%" }} src={IMG} alt="About Banner" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsFillAwardFill className="about__icon" />
              <h5>{t("experience")}</h5>
              <small>4+ {t("working")}</small>
            </article>
            <article className="about__card">
              <RiCodeBoxFill className="about__icon" />
              <h5>{t("projects")}</h5>
              <small>30+ {t("completed")}</small>
            </article>
            <article className="about__card">
              <IoLanguageSharp className="about__icon" />
              <h5>{t("lang")}</h5>
              <small>{t("b2")}</small>
            </article>
          </div>

          <p>
            {t("about__description")}
          </p>

          <a href="#contact" className="btn btn-primary">
            {t("talk")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
