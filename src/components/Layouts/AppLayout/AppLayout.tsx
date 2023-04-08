import { ReactNode } from "react";

import { Header } from "@/components/Elements/Header";

import { Container } from "../Container";

import styles from "./AppLayout.module.scss";

type AppLayoutProps = {
  children: ReactNode;
  spacing?: boolean;
};

export const AppLayout = ({ spacing = true, children }: AppLayoutProps) => {
  return (
    <div className={`${styles.app} ${spacing && styles._spacing}`}>
      <Header isActive={spacing ? false : true} />
      <main className={styles.app__main}>
        <Container>{children}</Container>
      </main>
    </div>
  );
};
