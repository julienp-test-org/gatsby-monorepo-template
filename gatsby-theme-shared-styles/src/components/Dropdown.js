import * as React from "react";

import * as styles from "../styles/dropdown.module.css";
import MenuItems from "./MenuItems";

const Dropdown = ({ subLinks, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? styles.dropdownSubmenu : "";

  return (
    <ul
      className={`${styles.dropdown} ${dropdownClass} ${
        dropdown ? styles.show : styles.hide
      }`}
    >
      {subLinks.map((subLink) => (
        <MenuItems items={subLink} key={subLink.name} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
