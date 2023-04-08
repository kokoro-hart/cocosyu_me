import Link from "next/link";

import { LinkList } from "@/components/Elements/LinkList";
import { Head } from "@/components/Layout/Head";
import { AppLayout } from "@/components/Layouts/AppLayout";
import getPath from "@/utils/getPath";

import styles from "./index.module.scss";

function Home() {
  const HeadProps = {
    url: getPath.home,
    title: "cocosyu",
    description: "Personal website of Kokoro Tobita.",
    ogImage: "/image/ogp.png",
  };

  return (
    <div className={styles.index}>
      <Head {...HeadProps} />
      <AppLayout>
        <div className={styles.index__desc}>
          Kokoro Tobita is a Frontend Developer and designer.
        </div>
        <Link href="/about/" className={styles.index__link}>
          Read more
        </Link>
        <div className={styles.index__listWrap}>
          <LinkList />
        </div>
      </AppLayout>
    </div>
  );
}

export default Home;
