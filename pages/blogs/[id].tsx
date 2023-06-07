import Blog from "@/models/blog";
import RenderBlog from "@/components/RenderBlog";
import connectDB from "@/configs/db";
import { FullBlogType, OtherBlogType } from "@/@types";
import { HeadTagForSEO, PageWrapperToGetThemes } from "@/components";

/* eslint-disable react/no-children-prop */

export async function getServerSideProps(context: any) {
  await connectDB();
  if (!context.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return {
      notFound: true,
    };
  }
  const blog = await Blog.findById(context.params.id);
  const otherBlogs = await Blog.find(
    {},
    {
      title: 1,
    }
  ).limit(10);

  if (!blog) {
    return {
      notFound: true,
    };
  }

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
