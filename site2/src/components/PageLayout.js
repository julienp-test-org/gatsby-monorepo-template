import * as React from "react";

import * as styles from "../styles/pageLayout.module.css";

const PageLayout = ({ children }) => {
  return <article className={styles.content}>{children}</article>;
};

export default PageLayout;
