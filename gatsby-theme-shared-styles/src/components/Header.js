import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import * as styles from "../styles/header.module.css";

const Header = ({ title, menuLinks }) => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <section className={styles.navWrap}>
          <Link to="/" className={styles.logo}>
            {title}
          </Link>
          <button
            className={styles.hamButton}
            onClick={() => setNav((nav) => !nav)}
          >
            <Hamburger nav={nav.toString()} />
          </button>
          <Navbar nav={nav} setNav={setNav} menuLinks={menuLinks} />
        </section>
      </header>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  menuLinks: PropTypes.array,
};

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
  menuLinks: [],
};

export default Header;
