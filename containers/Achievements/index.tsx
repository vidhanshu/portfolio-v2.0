import { ACHIEVEMENTS } from "@/constants";
import AchievementCard from "@/components/AchievementCard";
import React from "react";
import styles from "@/styles/containers/achievements.module.scss";

function Achievements() {
  return (
    <div className={`container`}>
      <div className={`${styles.container}`}>
        {ACHIEVEMENTS.map((data) => (
          <AchievementCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}

export default Achievements;
