import { Layout, NoSSR } from "@/components";

import { MyBlogs } from "@/containers";

function Blogs() {
  return (
    <Layout>
      <NoSSR>
        <MyBlogs />
      </NoSSR>
    </Layout>
  );
}

export default Blogs;
