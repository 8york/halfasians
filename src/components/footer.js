import * as React from "react";
import { FaEnvelope, FaInstagram, FaYoutube } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import {
  footer,
  credits,
  creditList,
  creditLink,
  contact,
  social,
  ptag,
} from "./footer.module.css";

const acknowledgement =
  "Halfasian would like to acknowledgethe Traditional Owners and Custodians of the land on which we live, the Peoples of the Kulin Nation. We pay the respects to their Elders pst and present.";

const Footer = () => {
  // accessing the credit data for rendering
  const data = useStaticQuery(graphql`
    {
      allCreditsJson {
        nodes {
          name
          link
        }
      }
    }
  `);

  return (
    <footer className={footer}>
      <div className={credits}>
        <p className={ptag}>All the images are courtesy of</p>
        {/* rendering the links for image credits */}
        {data.allCreditsJson.nodes.map((item) => (
          <div className={creditList} key={item.name}>
            <a
              className={creditLink}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >{` ${item.name} `}</a>
          </div>
        ))}
      </div>
      <div className={contact}>
        <p className={ptag}>
          If you would like to know our next appearance, contact us
        </p>
        <a
          href="https://www.instagram.com/halfasian.da/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* rendering social icons using react icon plugin */}
          <FaInstagram size={30} className={social} />
        </a>
        <a
          href="https://www.youtube.com/@halfasian6395"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={30} className={social} />
        </a>
        <a
          href="mailto:halfasian.da@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={30} className={social} />
        </a>
      </div>
      <p className={ptag}>{acknowledgement}</p>
    </footer>
  );
};

export default Footer;
