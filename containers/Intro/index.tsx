import { BsMouse } from "react-icons/bs";
import { Button } from "@/components";
import Image from "next/image";
import React from "react";
import { StatsCardProps } from "@/@types";
import styles from "@/styles/containers/intro.module.scss";

function Intro() {
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.content}>
            <p className={styles.greeting}>Hi There, I am -&gt;</p>
            <h1 className={styles.name}>Vidhanshu Borade.</h1>
            <h3 className={styles.subtitle}>
              I build stuffs for web & android.
            </h3>
            <p className={styles.description}>
              I&apos;m a MERN-stack developer. I build both for android devices
              & for web. Currently, I&apos;m more concentrating on client &
              personal projects. I love to guide and support others.
            </p>
          </div>
          <div className={styles.stats}>
            <BsMouse color="var(--tertiary-text)" size={40} />
            <StatsCard count="2" description="Happy Clients" />
            <StatsCard count="10" description="Projects Completed" />
            <StatsCard count="3" description="Years of Experience" />
          </div>
          <Button size="large">Download Resume</Button>
        </div>
        <div>
          <Image
            alt="header image"
            src={"/assets/header.png"}
            width={418}
            height={305}
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;

function StatsCard({ count, description }: StatsCardProps) {
  return (
    <div className={styles.statsCard}>
      <h1>{count}+</h1>
      <p>{description}</p>
    </div>
  );
}