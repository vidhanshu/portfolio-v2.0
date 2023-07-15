/**
 * @description ProjectCard component, provides card for each project
 */

import { CiGlobe, CiLock, CiMobile1 } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { BsTerminal } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";

import { ProjectCardProps } from "@/@types/props";
import styles from "@/styles/components/projectCard.module.scss";
import { arrayShortner, stringShortner } from "@/utils";

function ProjectCard({
  description,
  project_github_url,
  project_live_url,
  project_type,
  tags,
  title,
  is_private,
}: ProjectCardProps) {
  //to map project type to icon
  const IconByProjectType = {
    web: <CiGlobe size={35} color="var(--secondary-text)" />,
    android: <CiMobile1 size={35} color="var(--secondary-text)" />,
    "UI/UX": <FaFigma size={35} color="var(--secondary-text)" />,
    CLI: <BsTerminal size={35} color="var(--secondary-text)" />,
  };

  return (
    <div className={`${styles.project_card} card_hover_effect`}>
      <div className={styles.project_card_header}>
        <h4 className={styles.project_title}>{title}</h4>
        {IconByProjectType[project_type]}
      </div>
      <p
        className={styles.project_description}
        dangerouslySetInnerHTML={{
          __html: stringShortner(description, 350),
        }}
      ></p>
      <div className={styles.project_tags}>
        {arrayShortner(tags, 6).map((tag, index) => (
          <small className={styles.tag} key={index}>
            {tag}
          </small>
        ))}
      </div>
      <div className={styles.project_links}>
        {project_github_url && (
          <a
            href={project_github_url}
            target="_blank"
            title="github repository"
          >
            <AiFillGithub size={30} />
          </a>
        )}
        {project_live_url && (
          <a href={project_live_url} target="_blank" title="visit the project">
            <RxExternalLink size={30} />
          </a>
        )}
        {is_private && <CiLock size={30} title="This is private repository" />}
      </div>
    </div>
  );
}

export default ProjectCard;
