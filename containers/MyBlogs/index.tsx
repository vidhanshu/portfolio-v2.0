import BlogCard from "@/components/BlogCard";
import { BlogServerType } from "@/@types";
import styles from "@/styles/containers/myblogs.module.scss";

function MyBlogs({ blogs }: { blogs: BlogServerType[] }) {
  return (
    <div className={`container`}>
      <div className={`${styles.container}`}>
        {blogs.map((data) => (
          <BlogCard key={data._id} {...data} />
        ))}
      </div>
    </div>
  );
}

export default MyBlogs;
