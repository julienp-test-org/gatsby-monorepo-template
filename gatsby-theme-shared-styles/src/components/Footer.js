import * as React from "react";
import { Link } from "gatsby";

import Navlist from "./Navlist";
import * as styles from "../styles/footer.module.css";

const Footer = ({ title, menuLinks, socialLinks }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerWrap}>
          <section>
            <Link to="/" className={styles.logo}>
              {title}
            </Link>
          </section>
          <section className={styles.footerItems}>
            <Navlist title={menuLinks[1].name} items={menuLinks[1].subLinks} />
            <Navlist title={menuLinks[2].name} items={menuLinks[2].subLinks} />
          </section>
        </div>
        <div className={styles.copyrightWrap}>
          <section className={styles.copyright}>
            <ul>
              <li>
                <Link to="/disclaimer">Disclaimer</Link>
              </li>

              <li>
                <Link to="/terms-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
            <p>
              &copy; {new Date().getFullYear()}, {title}. All rights reserved.
            </p>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
