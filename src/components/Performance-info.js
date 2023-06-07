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
const Performance = () => {
    const data = useStaticQuery(graphql`
    query{
      allPerformanceJson {
        nodes {
          images {
            alt
            text
            src {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  width: 400
                  aspectRatio: 1
                  transformOptions: {fit: COVER}
                )
              }
            }
          }
          Performance
        }
      }
    }
    `);

    const performanceData = data.allPerformanceJson.nodes[0];
    console.log(performanceData);
    return(
    <section className={section}>
      <div className={sectionHead}>
      <h2>Performance</h2>
      <p>{performanceData.Performance}</p>
      </div>
      <div className={imageWrap}>
      {performanceData.images.map((image, index) => (
        <div className={imageContainer} key={index}>
          <GatsbyImage 
            image={getImage(image.src)} 
            alt={image.alt} className={imageElement}/>
          <p>{image.text}</p>
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/JYjgl1qkOq8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
      ))}
      </div>
    </section>
    )
}

export default Performance