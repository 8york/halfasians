import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  section,
  sectionHead,
  imageWrap,
  imageContainer,
  imageElement,
  imageText,
  textAndImages,
  spaceBetween,
  block,
  eightyork,
  middleBlock,
  haha,
  blockTwo,
  dcJumps,
} from "./about.module.css";

const AboutInfo = () => {
  //getting data about, images captions and alt, with settings for images
  const data = useStaticQuery(graphql`
    query {
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
                  transformOptions: { fit: COVER }
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
          {/* adding link to words in a string from json file */}
          <p dangerouslySetInnerHTML={{ __html: aboutData.About }}></p>
        </div>
        <div className={imageWrap}>
          {/* rendering images from json file using gatsby plugin image */}
          {aboutData.images.map((image, index) => (
            <div className={imageContainer} key={index}>
              <GatsbyImage
                image={getImage(image.src)}
                alt={image.alt}
                className={imageElement}
              />
              <p className={imageText}>{image.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={spaceBetween}>
        <div className={block}>
          <StaticImage
            alt="DC dancing all over the screen"
            src="../../assets/images/1HalfAsian.png"
            className={eightyork}
          />
        </div>
        <div className={middleBlock}>
          <div className={haha}>HaHa!</div>
        </div>
        <div className={blockTwo}>
          <StaticImage
            alt="DC dancing all over the screen"
            src="../../assets/images/5HalfAsian.png"
            className={dcJumps}/>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
