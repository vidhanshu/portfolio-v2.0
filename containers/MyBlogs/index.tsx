import { BLOGS } from "@/constants";
import BlogCard from "@/components/BlogCard";
import React from "react";
import styles from "@/styles/containers/myblogs.module.scss";

function MyBlogs() {
  return (
    <div className={`container`} data-aos="fade-up">
      <div className={`${styles.container}`}>
        {BLOGS.map((data) => (
          <BlogCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}

export default MyBlogs;
