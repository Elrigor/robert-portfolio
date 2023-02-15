import React from "react";
import "./projects.css";
import IMG1 from "../../assets/hutao.png";
import IMG2 from "../../assets/wizardeo.png";
import IMG3 from "../../assets/task.png";
import IMG4 from "../../assets/portfolio.png";
import IMG5 from "../../assets/hutaobot.png";
import IMG6 from "../../assets/tools.png";
import { AiFillGithub } from "react-icons/ai";
import { HiStatusOnline } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "hutaoweb",
    github: "https://github.com/Elrigor/hutaoWeb",
    demo: "",
  },
  {
    id: 2,
    image: IMG2,
    title: "wizardeoweb",
    github: "",
    demo: "https://wizardeo.es",
  },
  {
    id: 3,
    image: IMG3,
    title: "taskbot",
    github: "https://github.com/Elrigor/React-Tasks-Application",
    demo: "https://elrigor.github.io/React-Tasks-Application/",
  },
  {
    id: 4,
    image: IMG4,
    title: "portfolio",
    github: "https://github.com/Elrigor/robert-portfolio",
    demo: "https://robert.soy",
  },
  {
    id: 5,
    image: IMG5,
    title: "hutaobot",
    github: "",
    demo: "",
  },
  {
    id: 6,
    image: IMG6,
    title: "tools",
    github: "",
    demo: "https://tools.wizardeo.es",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  const translatedData = data.map((item) => {
    return {
      ...item,
      title: t(item.title),
    };
  });

  return (
    <section id="projects">
      <h5>{t("personalprj")}</h5>
      <h2>{t("projects")}</h2>

      <div className="container project__container">
        {translatedData.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project__item">
              <div className="project__item-image">
                <img className="project__image" src={image} alt={title} />
              </div>
              <h3>{title}</h3>
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
                    {t("live")} <HiStatusOnline />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
