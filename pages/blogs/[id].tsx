import Blog from "@/models/blog";
import RenderBlog from "@/components/RenderBlog";
import connectDB from "@/configs/db";
import { FullBlogType, OtherBlogType } from "@/@types";
import HeadTagForSEO from "@/components/HeadTagForSEO";
import PageWrapperToGetThemes from "@/components/PageWrapperToGetThemes";
import { poppins } from "@/utils/fonts";

/* eslint-disable react/no-children-prop */
export const getStaticPaths = async () => {
  await connectDB();
  try {
    const blogs = await Blog.find({}, { _id: 1 });
    const paths = blogs?.map((blog) => ({
      params: { id: blog._id.toString() },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async (context: any) => {
  await connectDB();
  try {
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
        blog: JSON.parse(JSON.stringify(blog || {})),
        otherBlogs: JSON.parse(JSON.stringify(otherBlogs || {})),
        revalidate: 86400000,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

type BlogByIdProps = {
  blog: FullBlogType;
  otherBlogs: OtherBlogType[];
};

function BlogById({ blog, otherBlogs }: BlogByIdProps) {
  return (
    <div className={poppins.className}>
      <PageWrapperToGetThemes>
        <HeadTagForSEO title={blog?.title} description={blog?.description} />
        <RenderBlog otherBlogs={otherBlogs} blog={blog} />
      </PageWrapperToGetThemes>
    </div>
  );
}

export default BlogById;
