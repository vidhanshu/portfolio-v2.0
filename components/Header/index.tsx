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
  HEADER_HEIGHT,
  PROJECTS_TAG,
  SKILLS_TAG,
  WHAT_I_DO_TAG,
} from "@/constants";
import { useCallback, useEffect, useState } from "react";

import { HiBars2 } from "react-icons/hi2";
import Link from "next/link";
import { TfiClose } from "react-icons/tfi";
import styles from "@/styles/components/nav.module.scss";
import { useMediaQuery } from "react-responsive";

function Header() {
  const [active, setActive] = useState<boolean>(false);

  const [scrolled, setScrolled] = useState<boolean>(false);

  const toggleNav = () => {
    setActive((i) => {
      if (i) {
        return false;
      } else {
        return true;
      }
    });
  };

  const handleScroll = useCallback(() => {
    if (window.scrollY > HEADER_HEIGHT) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const isDeskopNavHidden = useMediaQuery({ query: "(max-width: 1399px)" });

  return (
    <div className={styles.nav_bar}>
      <Link href="/">
        <h4 className={styles.logo}>© Vidhanshu Borade</h4>
      </Link>

      {/* for desktop */}
      <ul className={styles.nav_items}>
        <li className={styles.nav_item}>
          <Link href={ABOUT_ME_TAG}>About /&gt;</Link>
        </li>
        <li className={styles.nav_item}>
          <Link href={WHAT_I_DO_TAG}>What i do /&gt;</Link>
        </li>
        <li className={styles.nav_item}>
          <Link href={SKILLS_TAG}>Skills /&gt;</Link>
        </li>
        <li className={styles.nav_item}>
          <Link href={PROJECTS_TAG}>Projects /&gt;</Link>
        </li>
        <li className={styles.nav_item}>
          <Link href={EXPERIENCE_TAG}>Experience /&gt;</Link>
        </li>
        <li className={styles.nav_item}>
          <Link href={ACHIEVEMENTS_TAG}>Achievements /&gt;</Link>
        </li>
        <li className={styles.nav_item}>
          <Link href={BLOGS_TAG}>Blogs /&gt;</Link>
        </li>
        <li className={styles.nav_item}>
          <Link href={CODING_PROFILES_TAG}>Coding profiles /&gt;</Link>
        </li>
        <li className={styles.nav_item}>
          <Link href={CERTIFICATIONS_TAG}>Certifications /&gt;</Link>
        </li>
        <li className={styles.nav_item}>
          <Link href={CONTACT_ME_TAG}>Contact /&gt;</Link>
        </li>
      </ul>

      {/* for mobile */}
      <div
        className={`${styles.mobile_nav_container} ${
          active ? styles.active_nav : ""
        }`}
      >
        {/* just an overlay on the left */}
        <div className={styles.overlay} onClick={toggleNav}></div>

        <ul className={`${styles.mobile_menu}`}>
          <li className={styles.close_btn_container}>
            <span
              className={`${styles.close_btn} card_hover_effect`}
              onClick={toggleNav}
              style={{
                transform:
                  scrolled || isDeskopNavHidden || active
                    ? "scale(1)"
                    : "scale(0)",
              }}
            >
              {active ? <TfiClose size={30} /> : <HiBars2 size={30} />}
            </span>
          </li>
          <li className={styles.title}>
            <Link href="/" onClick={toggleNav}>
              © Vidhanshu Borade
            </Link>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <Link href={ABOUT_ME_TAG} onClick={toggleNav}>
              About /&gt;
            </Link>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <Link href={WHAT_I_DO_TAG} onClick={toggleNav}>
              What i do /&gt;
            </Link>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <Link href={SKILLS_TAG} onClick={toggleNav}>
              Skills /&gt;
            </Link>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <Link href={PROJECTS_TAG} onClick={toggleNav}>
              Projects /&gt;
            </Link>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <Link href={EXPERIENCE_TAG} onClick={toggleNav}>
              Experience /&gt;
            </Link>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <Link href={ACHIEVEMENTS_TAG} onClick={toggleNav}>
              Achievements /&gt;
            </Link>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <Link href={BLOGS_TAG} onClick={toggleNav}>
              Blogs /&gt;
            </Link>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <Link href={CODING_PROFILES_TAG} onClick={toggleNav}>
              Coding profiles /&gt;
            </Link>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <Link href={CERTIFICATIONS_TAG} onClick={toggleNav}>
              Certifications /&gt;
            </Link>
          </li>
          <div className={styles.seperator}></div>
          <li className={styles.nav_item}>
            <Link href={CONTACT_ME_TAG} onClick={toggleNav}>
              Contact /&gt;
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
