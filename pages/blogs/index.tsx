import {
  HeadTagForSEO,
  Layout,
  NoSSR,
  PageWrapperToGetThemes,
} from "@/components";

import Blog from "@/models/blog";
import { BlogServerType } from "@/@types";
import { MyBlogs } from "@/containers";
import connectDB from "@/configs/db";

export async function getStaticProps() {
  await connectDB();
  const blogs = await Blog.find(
    {},
    {
      title: 1,
      description: 1,
      image: 1,
      subtitle: 1,
      time_to_read: 1,
      tags: 1,
      createdAt: 1,
    }
  )
    .sort({ createdAt: -1 })
    .limit(10);
  return {
    props: {
      blogs: JSON.parse(JSON.stringify(blogs)),
      revalidate: 86400000,
    },
  };
}

function Blogs({ blogs }: { blogs: BlogServerType[] }) {
  return (
    <PageWrapperToGetThemes>
      <Layout>
        <HeadTagForSEO
          title="Blogs"
          description="Blogs written by vidhanshu borade"
        />
        <NoSSR>
          <MyBlogs blogs={blogs} />
        </NoSSR>
      </Layout>
    </PageWrapperToGetThemes>
  );
}

export default Blogs;
