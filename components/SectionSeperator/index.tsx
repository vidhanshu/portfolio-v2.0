/**
 * @description SectionSeperator component, provides seperator for all the sections in the landing page
 */

import "aos/dist/aos.css"

import { sectionSeperatorProps } from "@/@types/props";
import styles from "@/styles/components/sectionSeperator.module.scss";

function SectionSeperator({ title, id }: sectionSeperatorProps) {
  return (
    <div className={styles.section_seperator}   id={id}>
      <div className={styles.line} />
      <p className={styles.section_title}>{title}</p>
      <div className={styles.line} />
    </div>
  );
}

export default SectionSeperator;
