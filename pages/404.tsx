import { Button, Layout } from "@/components";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/pages/404.module.scss";

function NotFound() {
  return (
    <Layout>
      <div className={`container ${styles.notFound}`}>
        <Image src={"/assets/404.jpg"} width={500} height={500} alt="" />
        <h1>404 Blog doesn&apos;t exists</h1>
        <Link href="/">
          <Button>Go Back !</Button>
        </Link>
      </div>
    </Layout>
  );
}

export default NotFound;
