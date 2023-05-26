/* eslint-disable react/no-children-prop */

import { FullBlogType, OtherBlogType } from "@/@types";
import { HeadTagForSEO, PageWrapperToGetThemes } from "@/components";

import Blog from "@/models/Blog";
import RenderBlog from "@/components/RenderBlog";
import connectDB from "@/configs/db";

export async function getServerSideProps(context: any) {
  await connectDB();
  const blog = await Blog.findById(context.params.id);
  const otherBlogs = await Blog.find(
    {},
    {
      title: 1,
    }
  ).limit(10);

  return {
    props: {
      blog: JSON.parse(JSON.stringify(blog)),
      otherBlogs: JSON.parse(JSON.stringify(otherBlogs)),
      revalidate: 86400000,
    },
  };
}

type BlogByIdProps = {
  blog: FullBlogType;
  otherBlogs: OtherBlogType[];
};

function BlogById({ blog, otherBlogs }: BlogByIdProps) {
  return (
    <PageWrapperToGetThemes>
      <HeadTagForSEO title={blog.title} description={blog.description} />
      <RenderBlog otherBlogs={otherBlogs} blog={blog} />
    </PageWrapperToGetThemes>
  );
}

export default BlogById;
