/**
 * @description BlogCard component, provides card for each blog
 */

import Image from "next/image";
import Link from "next/link";
import { AiOutlineLike } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { RxExternalLink } from "react-icons/rx";

import styles from "@/styles/components/blogCard.module.scss";
import { BlogServerType } from "@/@types";

function BlogCard({
  _id,
  description,
  image,
  link,
  subtitle,
  tags,
  time_to_read,
  title,
  createdAt,
}: BlogServerType) {
  return (
    <div className={`${styles.container} card_hover_effect`}>
      {/* blog's left content */}
      <div className={styles.blog_left}>
        <Link className={styles.blog_link} href={`/blogs/${_id}`}>
          <div className={styles.blog_left_top}>
            <p className={styles.subtitle}>{subtitle}</p>
            <h1 className={styles.title}>{title}</h1>
            <small className={styles.date}>
              {new Date(createdAt).toLocaleDateString()} . {time_to_read} min to
              read
            </small>

            <p className={styles.description}>{description}</p>
          </div>

          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </Link>

        {link && (
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
        )}
      </div>

      {/* right image */}
      <div className={styles.blog_right}>
        <Link className={styles.img} href={`/blogs/${_id}`}>
          <Image
            className={styles.img}
            src={image}
            width={541}
            height={304}
            alt="blog image"
          />
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
