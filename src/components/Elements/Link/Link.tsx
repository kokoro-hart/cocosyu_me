import { default as NextLink, LinkProps as NextLinkProps } from "next/link";
import { FC, ReactNode } from "react";

import styles from "./Link.module.scss";

type LinkProps = NextLinkProps & {
  children?: ReactNode;
};

export const Link: FC<LinkProps> = (props) => {
  return <NextLink className={styles.link} {...props} />;
};
