import { AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiDebian } from "react-icons/di";
import { BiGitBranch } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { BsPatchCheckFill } from "react-icons/bs";
import {FaDocker, FaUbuntu} from 'react-icons/fa'
import {SiArchlinux} from 'react-icons/si'

const System = () => {
  const { t } = useTranslation();
  return (
    <div className="skill__systems">
      <h3>{t("system")}</h3>
      <div className="skill__content">
        <article className="skill__details">
          <FaUbuntu className="skill__details-icon" />
          <div>
            <h4>Ubuntu</h4>
            <small className="text-light">
              {t("ad")} <BsPatchCheckFill className="skill__check-icon" />
            </small>
          </div>
        </article>
        <article className="skill__details">
          <DiDebian className="skill__details-icon" />
          <div>
            <h4>Debian</h4>
            <small className="text-light">
              {t("ad")} <BsPatchCheckFill className="skill__check-icon" />
            </small>
          </div>
        </article>
        <article className="skill__details">
          <BiGitBranch className="skill__details-icon" />
          <div>
            <h4>Git</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillGithub className="skill__details-icon" />
          <div>
            <h4>Github</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillGitlab className="skill__details-icon" />
          <div>
            <h4>Gitlab</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
        <article className="skill__details">
          <FaDocker className="skill__details-icon" />
          <div>
            <h4>Docker</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
        <article className="skill__details">
          <SiArchlinux className="skill__details-icon" />
          <div>
            <h4>Arch</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
      </div>
    </div>
  );
};

export default System;