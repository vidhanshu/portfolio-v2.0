import { PROJECTS } from "@/constants";
import ProjectCard from "@/components/ProjectCard";
import React from "react";
import styles from "../../styles/containers/projects.module.scss";

function Projects() {
  return (
    <div className={`container grid_container_for_cards ${styles.wrapper}`}>
      <div className={`${styles.container} grid_container_for_cards`}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
