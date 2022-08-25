import * as React from "react";

import MenuItems from "./MenuItems";
import * as styles from "../styles/navbar.module.css";

const Navbar = ({ nav, setNav, menuLinks }) => {
  return (
    <nav
      id="site-navigation"
      className={`${styles.navItems} ${nav ? styles.show : styles.hide}`}
      role="navigation"
      onClick={() => setNav((nav) => !nav)}
    >
      <ul className={nav ? styles.show : styles.hide}>
        {menuLinks.map((menuLink) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menuLink}
              key={menuLink.name}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
