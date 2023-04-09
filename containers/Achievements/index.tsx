import { ACHIEVEMENTS } from "@/constants";
import AchievementCard from "@/components/AchievementCard";
import React from "react";
import styles from "@/styles/containers/achievements.module.scss"

function Achievements() {
  return (
    <div className={`container ${styles.container}`}>
      {ACHIEVEMENTS.map((data, index) => (
        <AchievementCard key={data.id} {...data} />
      ))}
    </div>
  );
}

export default Achievements;
