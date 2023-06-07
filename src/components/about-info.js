import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";

const AboutInfo = () => {
  const data = useStaticQuery(graphql`
    query {
      allAboutJson {
        nodes {
          About
          images {
            src
            alt
            text
          }
        }
      }
    }
  `);

  const aboutData = data.allAboutJson.nodes[0];
  console.log(aboutData);

  return (
    <main>
      <h2>About</h2>
      <p>{aboutData.About}</p>

      {aboutData.images.map((image, index) => (
        <section key={index}>
          {/* <GatsbyImage image={image.src} /> */}
          <StaticImage src="../../assets/images/dc.jpg" alt={image.alt} />
          {/* <img image={image.src} alt={image.alt} /> */}
          <p>{image.text}</p>
        </section>
      ))}
    </main>
  );
};

export default AboutInfo;
