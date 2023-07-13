import {
  DevelopmentSkillsTree,
  LanguageSkillsTree,
  ToolSkillsTree,
} from "@/components";

import styles from "@/styles/containers/skills.module.scss";

export default function SkillsSection() {
  return (
    <div className={`${styles.skillsContainer} container`}>
      <div className={styles.skillsWrapper}>

        <div className={styles.skillsContent}>
          {/* this tree is for the develpment/techstack related skills */}
          <ul className={styles.skillsTree}>
            <li>
              <span className={styles.skillsTreeRoot}>
                Development
              </span>

              <DevelopmentSkillsTree />
            </li>
          </ul>

          {/* tree will display what languages I know */}
          <ul className={styles.skillsTree}>
            <li>
              <span className={styles.skillsTreeRoot}>
                Languages
              </span>

              <LanguageSkillsTree />
            </li>
          </ul>

          {/* this tree will show what tools I use */}
          <ul className={styles.skillsTree}>
            <li>
              <span className={styles.skillsTreeRoot}>
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
