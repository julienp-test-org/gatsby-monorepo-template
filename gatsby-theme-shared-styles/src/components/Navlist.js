import * as React from "react";
import { Link } from "gatsby";

import * as styles from "../styles/navlist.module.css";

const Navlist = ({ title, items }) => {
  return (
    <section className={styles.footerItem}>
      <h3>{title}</h3>
      <nav>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.name}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Navlist;
