import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
        section,
        sectionHead,
        imageWrap,
        imageContainer,
        imageElement,
        imageText,
        textAndImages
} from "./about.module.css"

const AboutInfo = () => {
  //getting data about, images captions and alt, with settings for images
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
                        width: 250
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
  return (
    <section className={section}>
      <div className={textAndImages}>
      <div className={sectionHead}>
      <h2>About</h2>
      <p dangerouslySetInnerHTML={{__html: aboutData.About}} ></p>
      </div>
      <div className={imageWrap}>
      {aboutData.images.map((image, index) => (
        <div className={imageContainer} key={index}>
          <GatsbyImage image={getImage(image.src)} alt={image.alt} className={imageElement}/>
          <p className={imageText}>{image.text}</p>
          
        </div>
      ))}
      </div>
      </div>
    </section>
  );
};

export default AboutInfo;
