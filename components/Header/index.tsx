/**
 * @description Header component, provides header of the landing page contains navigation bar, and header content
 */

import {
  ABOUT_ME_TAG,
  ACHIEVEMENTS_TAG,
  BLOGS_TAG,
  CERTIFICATIONS_TAG,
  CODING_PROFILES_TAG,
  CONTACT_ME_TAG,
  EXPERIENCE_TAG,
  PROJECTS_TAG,
  RESUME_LOCAL_URL,
  SKILLS_TAG,
  WHAT_I_DO_TAG,
} from "@/constants";
import React, { useState } from "react";

import Button from "../Button";
import { HiBars2 } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import styles from "@/styles/components/nav.module.scss";

function Header() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className={styles.nav_bar}>
      <h4 className={styles.logo}>© Vidhanshu Borade</h4>

      {/* for desktop */}
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
          <a href={EXPERIENCE_TAG}>Experience /&gt;</a>
        </li>
        <li className={styles.nav_item}>
          <a href={ACHIEVEMENTS_TAG}>Achievements /&gt;</a>
        </li>
        <li className={styles.nav_item}>
          <a href={BLOGS_TAG}>Blogs /&gt;</a>
        </li>
        <li className={styles.nav_item}>
          <a href={CODING_PROFILES_TAG}>Coding profiles /&gt;</a>
        </li>
        <li className={styles.nav_item}>
          <a href={CERTIFICATIONS_TAG}>Certifications /&gt;</a>
        </li>
        <li className={styles.nav_item}>
          <a href={CONTACT_ME_TAG}>Contact /&gt;</a>
        </li>
      </ul>

      {/* for mobile */}
      <div
        className={`${styles.mobile_nav_container} ${
          active ? styles.active_nav : ""
        }`}
      >
        {/* just an overlay on the left */}
        <div
          className={styles.overlay}
          onClick={() => {
            document.body.style.overflowY = "scroll";
            setActive(false);
          }}
        ></div>

        <ul className={`${styles.mobile_menu}`}>
          <li className={styles.close_btn_container}>
            <span
              className={styles.close_btn}
              onClick={() => {
                setActive((i) => {
                  if (i) {
                    document.body.style.overflowY = "scroll";
                    return false;
                  } else {
                    document.body.style.overflowY = "hidden";
                    return true;
                  }
                });
              }}
            >
              {active ? <TfiClose size={30} /> : <HiBars2 size={30} />}
            </span>
          </li>
          <li className={styles.title}>© Vidhanshu Borade</li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <a href={ABOUT_ME_TAG}>About /&gt;</a>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <a href={WHAT_I_DO_TAG}>What i do /&gt;</a>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <a href={SKILLS_TAG}>Skills /&gt;</a>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <a href={PROJECTS_TAG}>Projects /&gt;</a>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <a href={EXPERIENCE_TAG}>Experience /&gt;</a>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <a href={ACHIEVEMENTS_TAG}>Achievements /&gt;</a>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <a href={BLOGS_TAG}>Blogs /&gt;</a>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <a href={CODING_PROFILES_TAG}>Coding profiles /&gt;</a>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <a href={CERTIFICATIONS_TAG}>Certifications /&gt;</a>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <a href={CONTACT_ME_TAG}>Contact /&gt;</a>
          </li>
          <li className={styles.btn}>
            <a href={RESUME_LOCAL_URL}>
              <Button variant="secondary">Download Resume</Button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
