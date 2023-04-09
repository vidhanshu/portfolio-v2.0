import Bullet from "@/public/assets/Bullet";
import { Button } from "@/components";
import { EXPERIENCE } from "@/constants";
import Image from "next/image";
import React from "react";
import { RxExternalLink } from "react-icons/rx";
import { stringShortner } from "@/utils";
import styles from "@/styles/containers/experience.module.scss";

function Experience() {
  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.timeline}>
        {EXPERIENCE.map(
          (
            {
              company,
              description,
              from,
              id,
              link,
              logo,
              title,
              to,
              certificate,
            },
            index
          ) => {
            return (
              <div
                key={id}
                className={`${styles.container} ${
                  index & 1 ? styles.left_container : styles.right_container
                }`}
              >
                <Bullet />
                <div className={`${styles.text_box}`}>
                  <span
                    className={
                      index & 1 ? styles.left_arrow : styles.right_arrow
                    }
                  ></span>
                  <div className={styles.text_box_top}>
                    <h1 className={styles.title}>
                      {title} @ {company}
                    </h1>
                    <Image
                      src={`/assets/${"po.png"}`}
                      width={40}
                      height={40}
                      alt="company logo"
                    />
                  </div>
                  <small className={styles.duration}>
                    {from} - {to}
                  </small>
                  <p className={styles.description}>
                    {stringShortner(description, 240)}
                  </p>
                  <div className={styles.btn_grp}>
                    <Button variant="secondary" size="small">
                      Certificate
                    </Button>
                    <a href={link} target="_blank" title="visit the website">
                      <RxExternalLink
                        className={styles.redirect_icon}
                        size={30}
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Experience;
