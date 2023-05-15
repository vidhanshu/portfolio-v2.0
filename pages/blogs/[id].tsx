/* eslint-disable react/no-children-prop */

import { BLOGS, BLOGS_DETAILED } from "@/constants";
import { BlogRawType, BlogType } from "@/@types";
import { useEffect, useState } from "react";

import { PageWrapperToGetThemes } from "@/components";
import RenderBlog from "@/components/RenderBlog";
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
  return (
    <PageWrapperToGetThemes>
      <RenderBlog
        BlogExists={BlogExists}
        BlogMeta={BlogMeta}
        BlogRaw={BlogRaw}
      />
    </PageWrapperToGetThemes>
  );
}

export default Blog;
