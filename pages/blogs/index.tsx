import Blog from "@/models/blog";
import { BlogServerType } from "@/@types";
import MyBlogs from "@/containers/MyBlogs";
import connectDB from "@/configs/db";
import HeadTagForSEO from "@/components/HeadTagForSEO";
import Layout from "@/components/Layout";
import NoSSR from "@/components/NoSSR";
import PageWrapperToGetThemes from "@/components/PageWrapperToGetThemes";
import { poppins } from "@/utils/fonts";

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
    <div className={poppins.className}>
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
    </div>
  );
}

export default Blogs;
