import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { HiStatusOnline } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { technologyData, getTextColor } from './LabelData';

const ProjectItem = ({ id, image, title, github, demo, label }) => {
  const { t } = useTranslation();
  const labelsArray = label.split(",").map((label) => label.trim());

  return (
    <article key={id} className="project__item">
      <div className="project__item-image">
        <img className="project__image" src={image} alt={title} />
      </div>
      <h3>{t(title)}</h3>
      <div className="project__item-labels">
        {labelsArray.map((label, index) => {
          const technology = technologyData[label] || {};
          const backgroundColor = technology.color || "#000000";
          const textColor = getTextColor(backgroundColor);

          return (
            <a
              key={index}
              className="project__item-label"
              href={technology.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor, color: textColor }}
            >
              {label}
            </a>
          );
        })}
      </div>
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
            data-robots="noindex"
          >
            {id === 1 ? t("here") : t("live")}{" "}
            <HiStatusOnline className="live-icon" />
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectItem;
