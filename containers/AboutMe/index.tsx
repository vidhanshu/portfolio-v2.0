import "aos/dist/aos.css"

import { Button } from "@/components";
import Image from "next/image";
import React from "react";
import styles from "../../styles/containers/aboutme.module.scss";

function AboutMe() {
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title} data-aos="fade-up">
            I can give the Best that you always wanted.
          </h1>
          <p className={styles.description} data-aos="fade-up">
            Hello Geeks, I&apos;m Vidhanshu Borade! I hold a deep interest &
            knowledge in Programming, especially in designing software. I am
            currently a professional full-stack web developer and full-stack
            android developer. At the time, I work for different clients to
            create and enhance their products.
          </p>
          <div className={styles.qualities}>
            <ul>
              <li data-aos="fade-up">Problem Solving</li>
              <li data-aos="fade-up">Highly Motivated</li>
            </ul>
            <ul>
              <li data-aos="fade-up">Creative Ideas</li>
              <li data-aos="fade-up">High Quality</li>
            </ul>
          </div>
          <div className={styles.btn_grp} data-aos="fade-up">
            <Button variant="secondary" size="large">
              Hire me
            </Button>
            <Button size="large">Download Resume</Button>
          </div>
        </div>
        <div className={styles.right} data-aos="fade-up">
          <Image
            className={styles.img}
            alt="my profile image"
            width={350}
            height={352}
            src="/assets/vidhanshu.png"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
