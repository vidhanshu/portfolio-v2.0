/**
 * @description BlogCard component, provides card for each blog
 */

import { AiOutlineLike } from "react-icons/ai";
import { BlogType } from "@/@types";
import { BsMedium } from "react-icons/bs";
import Image from "next/image";
import React from "react";
import { RxExternalLink } from "react-icons/rx";
import styles from "@/styles/components/blogCard.module.scss";

function BlogCard({
  date,
  description,
  image,
  link,
  subtitle,
  tags,
  time_to_read,
  title,
}: BlogType) {
  return (
    <div
      className={`${styles.container} card_hover_effect`}
      data-aos="fade-up"
      onClick={() => {
        window.open(link, "_blank");
      }}
    >
      {/* blog's left content */}
      <div className={styles.blog_left}>
        <div className={styles.blog_left_top}>
          <p className={styles.subtitle}>{subtitle}</p>
          <h1 className={styles.title}>{title}</h1>
          <small className={styles.date}>{date}</small>
        </div>

        <p className={styles.description}>{description}</p>

        <small className={styles.time_to_read}>{time_to_read}</small>

        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.btn_grp}>
          <a href={link} target="_blank" title="visit the website">
            <RxExternalLink size={25} />
          </a>
          <a href={link} target="_blank" title="visit the website">
            <BsMedium size={25} />
          </a>
          <a href={link} target="_blank" title="visit the website">
            <AiOutlineLike size={25} />
          </a>
        </div>
      </div>

      {/* right image */}
      <div className={styles.blog_right}>
        <Image
          src={`/assets/${image}`}
          width={541}
          height={304}
          alt="blog image"
        />
      </div>
    </div>
  );
}

export default BlogCard;
