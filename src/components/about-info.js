import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
        section,
        sectionHead,
        imageWrap,
        imageContainer,
        imageElement,
        imageText
} from "./about.module.css"

const AboutInfo = () => {
//  access data from about.json to render info
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
      <div className={sectionHead}>
      <h2>About</h2>
      
      {/* infor coming from json file */}
      <p dangerouslySetInnerHTML={{__html: aboutData.About }} />
      </div>
      
      {/* map some images and texts */}
      <div className={imageWrap}>
      {aboutData.images.map((image, index) => (
        <div className={imageContainer} key={index}>
          <GatsbyImage image={getImage(image.src)} alt={image.alt} className={imageElement}/>
          <p className={imageText}>{image.text}</p>
        </div>
      ))}
      </div>
    </section>
  );
};

export default AboutInfo;
