import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { HiStatusOnline } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const ProjectItem = ({ id, image, title, github, demo }) => {
  const { t } = useTranslation();

  return (
    <article key={id} className="project__item">
      <div className="project__item-image">
        <img className="project__image" src={image} alt={title} />
      </div>
      <h3>{t(title)}</h3>
      <div className="project__item-cta">
        {github && (
          <a
            href={github}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <AiFillGithub />
          </a>
        )}
        {demo && (
          <a
            href={demo}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("live")} <HiStatusOnline className="live-icon" />
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectItem;
