/* eslint-disable react/no-children-prop */

import { BlogRawType, BlogType } from "@/@types";
import { atomDark, nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { BLOGS } from "@/constants";
import Button from "../Button";
import HeadTagForSEO from "../HeadTagForSEO";
import Image from "next/image";
import Layout from "../Layout";
import Link from "next/link";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeRaw from "rehype-raw";
import styles from "@/styles/pages/blog.module.scss";
import { useTheme } from "@/context/theme";

type RenderBlogProps = {
  BlogExists: boolean;
  BlogMeta: BlogType;
  BlogRaw: BlogRawType;
};
function RenderBlog({ BlogExists, BlogMeta, BlogRaw }: RenderBlogProps) {
  if (!BlogExists) {
    return (
      <Layout>
        <HeadTagForSEO
          title="404 page not found"
          description="404 page not found"
        />
        <div className={`container ${styles.notFound}`}>
          <Image src={"/assets/404.jpg"} width={500} height={500} alt="" />
          <h1>404 Page not found !</h1>
          <Link href="/">
            <Button variant="primary">Go Back !</Button>
          </Link>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <HeadTagForSEO
          title={BlogMeta.title}
          description={BlogMeta.description}
        />
        <div className={`container ${styles.blog} blog-hai-yeh`}>
          <div className={styles.metaData}>
            <h1>{BlogMeta.title}</h1>
            <hr />
            <p>
              {BlogMeta.date}&nbsp;&nbsp;<b>.</b>&nbsp;&nbsp;
              {BlogMeta.time_to_read}
            </p>
            <div className={styles.tags}>
              {BlogMeta.tags?.map((e, _) => (
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
              {BlogRaw.markdown}
            </ReactMarkdown>
          </div>
        </div>

        <div className="container">
          {/* other blogs */}
          <div className={styles.otherBlogs}>
            <h1>More blogs</h1>
            <div className={styles.otherBlogsContainer}>
              {BLOGS.filter((e) => e.id !== BlogMeta.id).map((e, _) => (
                <Link
                  className={`${styles.otherBlogLink} card_hover_effect`}
                  href={`/blogs/${e.id}`}
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
}

export default RenderBlog;
