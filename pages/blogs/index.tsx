import { HeadTagForSEO, Layout, NoSSR } from "@/components";

import { MyBlogs } from "@/containers";

function Blogs() {
  return (
    <Layout>
      <HeadTagForSEO
        title="Blogs"
        description="Blogs written by vidhanshu borade"
      />
      <NoSSR>
        <MyBlogs />
      </NoSSR>
    </Layout>
  );
}

export default Blogs;
