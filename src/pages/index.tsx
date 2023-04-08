import { Head } from "@/components/Layout/Head";
import getPath from "@/utils/getPath";

import styles from "./index.module.scss";

function Home() {
  const HeadProps = {
    url: getPath.home,
    title: "cocosyu",
    description: "Personal website of Kokoro Tobita.",
    // TODO:OGP画像の自動生成
    ogImage: "/image/ogp.png",
  };

  return (
    <div className={styles.index}>
      <Head {...HeadProps} />
    </div>
  );
}

export default Home;
