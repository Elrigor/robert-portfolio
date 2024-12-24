import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#top">{t("home")}</a>
        </li>
        <li>
          <a href="#about">{t("about")}</a>
        </li>
        <li>
          <a href="#skill">{t("skills")}</a>
        </li>
        <li>
          <a href="#projects">{t("projects")}</a>
        </li>
        <li>
          <a href="#contact">{t("contact")}</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="www.linkedin.com/in/robertmima">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Elrigor">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Robert Mihai Maracine. {t("right")}.</small>
      </div>
    </footer>
  );
};

export default Footer;
