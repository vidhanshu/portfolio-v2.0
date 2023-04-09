/**
 * @description AchievementCard component, provides card for each achievement
 */

import { AchievementType } from "@/@types";
import Button from "../Button";
import Image from "next/image";
import { IoNewspaperOutline } from "react-icons/io5";
import React from "react";
import styles from "@/styles/components/achievementCard.module.scss";

function AchievementCard({
  date,
  description,
  id,
  image,
  rank,
  skills,
  title,
  certificate,
  news,
}: AchievementType) {
  return (
    <div className={styles.container} data-aos="fade-up">
      <Image
        width={483.51}
        height={322}
        src={`/assets/${image}`}
        alt="sih image"
      />
      <div className={styles.right_content}>
        <div className={styles.right_content_top}>
          <div>
            <p className={styles.rank}>{rank}</p>
            <h1 className={styles.title}>{title}</h1>
            <small className={styles.date}>{date}</small>
          </div>
          <Image
            src="/assets/first_rank.png"
            width={100}
            height={70}
            alt="medal"
          />
        </div>
        <p className={styles.description}>{description}</p>

        <p className={styles.skill_title}>Skills used: </p>

        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <p className={styles.skill} key={index}>
              {skill}
            </p>
          ))}
        </div>

        <div className={styles.right_content_bottom}>
          {certificate && (
            <a href={certificate} title="see the certificate">
              <Button variant="secondary">Certificate</Button>
            </a>
          )}
          {news && (
            <a href={news} title="see the news article">
              <IoNewspaperOutline size={30} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default AchievementCard;
