import {
  ABOUT_ME_TAG,
  ACHIEVEMENTS_TAG,
  BLOGS_TAG,
  CERTIFICATIONS_TAG,
  CODING_PROFILES_TAG,
  CONTACT_ME_TAG,
  EMAIL_ID_REDIRECT_URL,
  EXPERIENCE_TAG,
  FB_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LEETCODE_URL,
  LINKEDIN_URL,
  MY_EMAIL_ID,
  PROJECTS_TAG,
  SKILLS_TAG,
  WHAT_I_DO_TAG,
} from "@/constants";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

import { AiFillHeart } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import React from "react";
import { SiLeetcode } from "react-icons/si";
import styles from "@/styles/components/footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {/* logo */}
        <h4 className={styles.logo}>© Vidhanshu Borade</h4>
        {/* socials */}
        <div className={styles.socials}>
          <a href={LEETCODE_URL}>
            <SiLeetcode size={25} />
          </a>
          <a href={GITHUB_URL}>
            <FiGithub size={25} />
          </a>
          <a href={EMAIL_ID_REDIRECT_URL}>
            <MdOutlineAlternateEmail size={25} />
          </a>
          <a href={LINKEDIN_URL}>
            <FiLinkedin size={25} />
          </a>
          <a href={INSTAGRAM_URL}>
            <FiInstagram size={25} />
          </a>
          <a href={FB_URL}>
            <FiFacebook size={25} />
          </a>
        </div>
      </div>

      <div className={styles.seperator}></div>

      <div className={styles.middle}>
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

        <h4
          className={styles.btt}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Back to top
        </h4>
      </div>

      <div className={styles.seperator}></div>

      <p className={`${styles.bottom} ${styles.desktop}`}>
        © Vidhanshu Borade | Designed and Developed with{" "}
        <AiFillHeart size={15} /> Vidhanshu Borade
      </p>
      <p className={`${styles.bottom} ${styles.mobile}`}>
        © Vidhanshu Borade | D&D with{" "}
        <AiFillHeart size={15} /> Vidhanshu Borade
      </p>
    </div>
  );
}

export default Footer;
