import React from "react";
import { useTranslation } from "react-i18next";
import "./projects.css";
import projectsData from "./projectsData";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const { t } = useTranslation();

  const translatedData = projectsData.map((project, index) => {
    return {
      ...project,
      id: index + 1,
      title: t(project.title),
    };
  });

  return (
    <section id="projects">
      <h5>{t("personalprj")}</h5>
      <h2>{t("projects")}</h2>

      <div className="container project__container">
        {translatedData.map((project) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            image={project.image}
            title={project.title}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
