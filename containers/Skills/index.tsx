import {
  DevelopmentSkillsTree,
  LanguageSkillsTree,
  ToolSkillsTree,
} from "@/components";

import React from "react";
import styles from "@/styles/containers/skills.module.scss";

export default function SkillsSection() {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsWrapper}>

        <div className={styles.skillsContent} data-aos="fade-up">
          {/* this tree is for the develpment/techstack related skills */}
          <ul className={styles.skillsTree} data-aos="fade-up">
            <li data-aos="fade-up">
              <span className={styles.skillsTreeRoot} data-aos="fade-up">
                Development
              </span>

              <DevelopmentSkillsTree />
            </li>
          </ul>

          {/* tree will display what languages I know */}
          <ul className={styles.skillsTree} data-aos="fade-up">
            <li data-aos="fade-up">
              <span className={styles.skillsTreeRoot} data-aos="fade-up">
                Languages
              </span>

              <LanguageSkillsTree />
            </li>
          </ul>

          {/* this tree will show what tools I use */}
          <ul className={styles.skillsTree} data-aos="fade-up">
            <li data-aos="fade-up">
              <span className={styles.skillsTreeRoot} data-aos="fade-up">
                Tools
              </span>

              <ToolSkillsTree />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
