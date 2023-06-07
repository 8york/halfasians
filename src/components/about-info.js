import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
        section,
        sectionHead,
        imageWrap,
        imageContainer,
        imageElement,
} from "./about.module.css"

const AboutInfo = () => {
  const data = useStaticQuery(graphql`
    query{
        allAboutJson {
              nodes {
                images {
                  alt
                  text
                  src {
                    childImageSharp {
                      gatsbyImageData(
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                        width: 300
                        aspectRatio: 1
                        transformOptions: {fit: COVER}
                      )
                    }
                  }
                }
                About
              }
            }
          }
    `);

  const aboutData = data.allAboutJson.nodes[0];
  console.log(aboutData);
  return (
    <section className={section}>
      <div className={sectionHead}>
      <h2>About</h2>
      <p>{aboutData.About}</p>
      </div>
      <div className={imageWrap}>
      {aboutData.images.map((image, index) => (
        <div className={imageContainer} key={index}>
          <GatsbyImage image={getImage(image.src)} alt={image.alt} className={imageElement}/>
          <p>{image.text}</p>
        </div>
      ))}
      </div>
    </section>
  );
};

export default AboutInfo;
