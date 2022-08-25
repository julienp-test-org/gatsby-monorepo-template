import * as React from "react";
import * as styles from "../styles/hemBurger.module.css";
const Hamburger = ({ nav }) => {
  return (
    <section className={styles.btn}>
      <div data-nav={nav} className={styles.hemBurger} role={"button"}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Hamburger;
