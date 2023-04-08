import Link from "next/link";

import { Image } from "@/components/Elements/Image";

import styles from "./Header.module.scss";

export type HeadProps = {
  isActive?: boolean;
};

export const Header = ({ isActive = false }) => {
  return (
    <header className={`${styles.header} ${isActive ? styles._active : ""}`}>
      <div className={styles.header__inner}>
        <Link href="/" className={styles.header__link}>
          <h1 className={styles.header__logo}>
            <Image src="/image/icon.png" alt="" width={110} height={110} />
          </h1>
          <h1 className={styles.header__title}>cocosyu</h1>
        </Link>
      </div>
    </header>
  );
};
