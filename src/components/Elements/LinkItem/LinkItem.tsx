import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import styles from "./LinkItem.module.scss";

type LinkItemProps = ComponentPropsWithoutRef<"a"> & {
  children?: ReactNode;
  text?: string;
};

export const LinkItem = ({ children, text, href = "/", ...props }: LinkItemProps) => {
  return (
    <Link href={href} {...props} className={styles.linkItem}>
      {children && <div className={styles.linkItem__icon}>{children}</div>}
      {text && <div className={styles.linkItem__text}>{text}</div>}
    </Link>
  );
};
