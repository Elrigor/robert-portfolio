import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io5";
import { DiJavascript1 } from "react-icons/di";
import { FaBootstrap, FaReact, FaAngular } from "react-icons/fa";
import { SiTailwindcss, SiNuxtdotjs, SiHtmlacademy, SiNextdotjs } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { BsPatchCheckFill } from "react-icons/bs";

const Frontend = () => {
  const { t } = useTranslation();
  return (
    <div className="skill__frontend">
      <h3>{t("frontdev")}</h3>
      <div className="skill__content">
        <article className="skill__details">
          <AiFillHtml5 className="skill__details-icon" />
          <div>
            <h4>HTML</h4>
            <small className="text-light">
              {t("ad")} <BsPatchCheckFill className="skill__check-icon" />
            </small>
          </div>
        </article>
        <article className="skill__details">
          <IoLogoCss3 className="skill__details-icon" />
          <div>
            <h4>CSS</h4>
            <small className="text-light">
              {t("ad")} <BsPatchCheckFill className="skill__check-icon" />
            </small>
          </div>
        </article>
        <article className="skill__details">
          <DiJavascript1 className="skill__details-icon" />
          <div>
            <h4>JavaScript</h4>
            <small className="text-light">
              {t("ad")} <BsPatchCheckFill className="skill__check-icon" />
            </small>
          </div>
        </article>
        <article className="skill__details">
          <FaBootstrap className="skill__details-icon" />
          <div>
            <h4>Bootstrap</h4>
            <small className="text-light">
              {t("ad")} <BsPatchCheckFill className="skill__check-icon" />
            </small>
          </div>
        </article>
        <article className="skill__details">
          <FaReact className="skill__details-icon" />
          <div>
            <h4>React</h4>
            <small className="text-light">
              {t("ad")} <BsPatchCheckFill className="skill__check-icon" />
            </small>
          </div>
        </article>
        <article className="skill__details">
          <SiTailwindcss className="skill__details-icon" />
          <div>
            <h4>Tailwind</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
        <article className="skill__details">
          <SiNuxtdotjs className="skill__details-icon" />
          <div>
            <h4>Nuxt JS</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
        <article className="skill__details">
          <FaAngular className="skill__details-icon" />
          <div>
            <h4>Angular</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
        <article className="skill__details">
          <SiHtmlacademy className="skill__details-icon" />
          <div>
            <h4>XML</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
        <article className="skill__details">
          <SiHtmlacademy className="skill__details-icon" />
          <div>
            <h4>XSD</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
        <article className="skill__details">
          <SiHtmlacademy className="skill__details-icon" />
          <div>
            <h4>DTD</h4>
            <small className="text-light">{t("ba")}</small>
          </div>
        </article>
        <article className="skill__details">
          <SiNextdotjs className="skill__details-icon" />
          <div>
            <h4>NextJS</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Frontend;
