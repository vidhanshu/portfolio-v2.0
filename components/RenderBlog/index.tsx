import HeadTagForSEO from "../HeadTagForSEO";
import Layout from "../Layout";
import Link from "next/link";
import React from "react";
import rehypeRaw from "rehype-raw";
import styles from "@/styles/pages/blog.module.scss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FullBlogType, OtherBlogType } from "@/@types";
import { FormattedDate } from "@/utils";

/* eslint-disable react/no-children-prop */

type RenderBlogProps = {
  blog: FullBlogType;
  otherBlogs: OtherBlogType[];
};
function RenderBlog({ blog, otherBlogs }: RenderBlogProps) {
  return (
    <Layout>
      <HeadTagForSEO title={blog?.title} description={blog?.description} />
      <div className={`container ${styles.blog} blog-hai-yeh`}>
        <div className={styles.metaData}>
          <h1>{blog?.title}</h1>
          <hr />
          <p>
            {FormattedDate(blog?.createdAt)}&nbsp;&nbsp;<b>.</b>&nbsp;&nbsp;
            {blog?.time_to_read} min to read
          </p>
          <div className={styles.tags}>
            {blog?.tags?.map((e, _) => (
              <div className={styles.tag} key={_}>
                {e}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.blogRaw}>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    PreTag="pre"
                    style={nord}
                  />
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {blog?.markdown}
          </ReactMarkdown>
        </div>
      </div>

      <div className="container">
        {/* other blogs */}
        <div className={styles.otherBlogs}>
          <h1>More blogs</h1>
          <div className={styles.otherBlogsContainer}>
            {otherBlogs
              ?.filter((e) => e._id !== blog?._id)
              ?.map((e, _) => (
                <Link
                  className={`${styles.otherBlogLink} card_hover_effect`}
                  href={`/blogs/${e._id}`}
                  key={_}
                >
                  <div className={styles.otherBlog}>
                    <h3>{e.title}</h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RenderBlog;
