/* eslint-disable react/no-children-prop */

import { BLOGS, BLOGS_DETAILED } from "@/constants";
import { BlogRawType, BlogType } from "@/@types";
import { Button, HeadTagForSEO, Layout } from "@/components";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import { stringShortner } from "@/utils";
import styles from "@/styles/pages/blog.module.scss";
import { useRouter } from "next/router";

function Blog() {
  const { asPath } = useRouter();

  const [BlogMeta, setBlogMeta] = useState<BlogType>({} as BlogType);
  const [BlogRaw, setBlogRaw] = useState<BlogRawType>({} as BlogRawType);
  const [BlogExists, setBlogExists] = useState<boolean>(true);

  useEffect(() => {
    const id = asPath.split("/")[2];
    if (!id.includes("[")) {
      const blogMeta = BLOGS.filter((e) => e.id === id);
      const blogRaw = BLOGS_DETAILED.filter((e) => e.id === id);

      if (blogMeta.length > 0 && blogRaw.length > 0) {
        setBlogMeta(blogMeta[0]);
        setBlogRaw(blogRaw[0]);
        setBlogExists(true);
      } else {
        setBlogExists(false);
      }
    }
  }, [asPath]);

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
            <Button>Go Back !</Button>
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
                      style={atomDark}
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
      </Layout>
    );
  }
}

export default Blog;
