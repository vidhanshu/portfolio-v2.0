/**
 * @description Header component, provides header of the landing page contains navigation bar, and header content
 */

import {
  ABOUT_ME_TAG,
  ACHIEVEMENTS_TAG,
  BLOGS_TAG,
  CONTACT_ME_TAG,
  EXPERIENCE_TAG,
  PROJECTS_TAG,
  SKILLS_TAG,
  WHAT_I_DO_TAG,
} from "@/constants";

import React from "react";
import styles from "@/styles/components/nav.module.scss";

function Header() {
  return (
    <div className={styles.nav_bar}>
      <h4 className={styles.logo}>© Vidhanshu Borade</h4>

      <ul className={styles.nav_items}>
        <li className={styles.nav_item}>
          <a href={ABOUT_ME_TAG}>About /&gt;</a>
        </li>
        <li className={styles.nav_item}>
          <a href={WHAT_I_DO_TAG}>What i do /&gt;</a>
        </li>
        <li className={styles.nav_item}>
          <a href={SKILLS_TAG}>Skills /&gt;</a>
        </li>
        <li className={styles.nav_item}>
          <a href={PROJECTS_TAG}>Projects /&gt;</a>
        </li>
        <li className={styles.nav_item}>
          <a href={BLOGS_TAG}>Blogs /&gt;</a>
        </li>
        <li className={styles.nav_item}>
          <a href={ACHIEVEMENTS_TAG}>Achievements /&gt;</a>
        </li>
        <li className={styles.nav_item}>
          <a href={EXPERIENCE_TAG}>Experience /&gt;</a>
        </li>
        <li className={styles.nav_item}>
          <a href={CONTACT_ME_TAG}>Contact /&gt;</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
