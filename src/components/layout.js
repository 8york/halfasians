import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkText,
  siteTitle,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  // data about the site
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={container}>
      {/* header to be rendered from the metadata */}
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <div>
        <h1 className={heading}>{pageTitle}</h1>
      </div>
      {/* links to different pages */}
      <nav>
        <ul className={navLinks}>
          <li>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={navLinkText}>
              About Halfasian
            </Link>
          </li>
          <li>
            <Link to="/gallery" className={navLinkText}>
              All to see
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
