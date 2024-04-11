import React from "react";

import styles from "./Projects.module.css";

import { ProjectCard } from "./ProjectCard";

export const Projects = (props) => {
  const { projects } = props;
  const categoryTitle = projects.length > 0 ? projects[0].category : "";

  return (
    <section className={styles.container} id={categoryTitle}>
      <h2 className={styles.title}>{categoryTitle}</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
