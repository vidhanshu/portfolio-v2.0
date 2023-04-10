/**
 * @description: Tabs component, provides tabs for projects and blogs like sections
 */

import React, { useState } from "react";

import ProjectCard from "../ProjectCard";
import { TabsProps } from "@/@types";
import styles from "@/styles/components/tabs.module.scss";

function Tabs({ data, tabs }: TabsProps) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {/* other tabs */}
        {tabs.map((tab, index) => (
          <div
            data-aos="fade-right"
            data-aos-delay={index * 100}
            key={index}
            className={`${styles.tab} ${
              active === index ? styles.active : null
            }`}
          >
            <button
              onClick={() => {
                setActive(index);
              }}
              className={styles.title}
            >
              {tab}
            </button>
          </div>
        ))}
      </div>

      {/* content based on active tab */}
      <div className={`${styles.content} grid_container_for_cards`}>
        {data.map((item, index) => {
          if (tabs[active] === "All") {
            return (
              <div key={index} className={styles.card}>
                <ProjectCard {...item} />
              </div>
            );
          } else if (
            tabs[active].toLowerCase() === item.project_type.toLowerCase()
          ) {
            return (
              <div key={index} className={styles.card}>
                <ProjectCard {...item} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Tabs;
