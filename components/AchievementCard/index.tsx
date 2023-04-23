/**
 * @description AchievementCard component, provides card for each achievement
 */

import { AchievementType } from "@/@types";
import Button from "../Button";
import Image from "next/image";
import { IoNewspaperOutline } from "react-icons/io5";
import styles from "@/styles/components/achievementCard.module.scss";

function AchievementCard({
  date,
  description,
  image,
  rank,
  skills,
  title,
  certificate,
  news,
}: AchievementType) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} card_hover_effect`}>
        <Image
          width={483.51}
          height={322}
          src={`/assets/${image}`}
          alt="sih image"
          className={styles.image}
        />
        <div className={`${styles.right_content}`}>
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
              <a href={certificate} title="see the certificate" target="_blank">
                <Button variant="secondary">Certificate</Button>
              </a>
            )}
            {news && (
              <a href={news} title="see the news article" target="_blank">
                <IoNewspaperOutline size={25} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AchievementCard;
