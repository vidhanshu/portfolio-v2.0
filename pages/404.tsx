import { Button, Layout, PageWrapperToGetThemes } from "@/components";

import Image from "next/image";
import styles from "@/styles/pages/404.module.scss";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();
  return (
    <PageWrapperToGetThemes>
      <Layout>
        <div className={`container ${styles.notFound}`}>
          <Image src={"/assets/404.jpg"} width={500} height={500} alt="" />
          <h1>404 Page not found</h1>
          <Button
            onClick={() => {
              router.back();
            }}
            variant="tertiary"
          >
            Go Back !
          </Button>
        </div>
      </Layout>
    </PageWrapperToGetThemes>
  );
}

export default NotFound;
