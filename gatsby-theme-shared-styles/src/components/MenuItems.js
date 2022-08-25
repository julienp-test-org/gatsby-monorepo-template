import * as React from "react";
import { Link } from "gatsby";
import { useState, useRef, useEffect } from "react";

import Dropdown from "./Dropdown";
import * as styles from "../styles/menuItems.module.css";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  // const toggle = () => setDropdown((dropdown) => !dropdown);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    // window.innerWidth > 768 && setDropdown(true);
    window.innerWidth > 200 && setDropdown(true);
  };
  const onMouseLeave = () => {
    // window.innerWidth > 768 && setDropdown(false);
    window.innerWidth > 200 && setDropdown(false);
  };

  return (
    <li
      className={styles.menuItems}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.subLinks ? (
        <>
          <Link
            to={items.link}
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            // onClick={toggle}
          >
            {items.name}
            {depthLevel > 0 ? (
              <span className={styles.rightArrow} />
            ) : (
              <span className={styles.downArrow} />
            )}
          </Link>
          <Dropdown
            subLinks={items.subLinks}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <Link to={items.link}>{items.name}</Link>
      )}
    </li>
  );
};

export default MenuItems;
