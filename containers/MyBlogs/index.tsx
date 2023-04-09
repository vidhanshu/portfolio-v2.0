import { BLOGS } from "@/constants";
import BlogCard from "@/components/BlogCard";
import React from "react";
import styles from "@/styles/containers/myblogs.module.scss";

function MyBlogs() {
  return (
    <div className={`container ${styles.container}`}>
      {BLOGS.map((data, index) => (
        <BlogCard key={data.id} {...data} />
      ))}
    </div>
  );
}

export default MyBlogs;
