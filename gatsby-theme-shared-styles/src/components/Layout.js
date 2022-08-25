import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

import Footer from "./Footer";
import Header from "./Header";

import "../styles/variables.css";
import "../styles/global.css";
import { body, main } from "../styles/layout.module.css";

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          menuLinks {
            name
            link
            subLinks {
              name
              link
              subLinks {
                name
                link
              }
            }
          }
          socialLinks {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <>
      <div className={body}>
        <Header
          title={site.siteMetadata.title}
          menuLinks={site.siteMetadata.menuLinks}
        />
        <main className={main}>{children}</main>
        <Footer
          title={site.siteMetadata.title}
          menuLinks={site.siteMetadata.menuLinks}
          socialLinks={site.siteMetadata.socialLinks}
        />
      </div>
    </>
  );
};

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
