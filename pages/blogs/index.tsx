import {
  HeadTagForSEO,
  Layout,
  NoSSR,
  PageWrapperToGetThemes,
} from "@/components";

import { MyBlogs } from "@/containers";

function Blogs() {
  return (
    <PageWrapperToGetThemes>
      <Layout>
        <HeadTagForSEO
          title="Blogs"
          description="Blogs written by vidhanshu borade"
        />
        <NoSSR>
          <MyBlogs />
        </NoSSR>
      </Layout>
    </PageWrapperToGetThemes>
  );
}

export default Blogs;
