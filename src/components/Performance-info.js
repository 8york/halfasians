import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

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
                    aspectRatio: 2
                    transformOptions: {cropFocus: ATTENTION}
                  )
                }
              }
            }
          }
        }
      }
    `);

    const performanceData = data.allPerformanceJson.nodes[0];
    console.log(performanceData);
    return(
        <main>
      <h2>Performance</h2>
      <p>{performanceData.Performance}</p>

      {performanceData.images.map((image, index) => (
        <section key={index}>
          <GatsbyImage 
            image={getImage(image.src)} 
            alt={image.alt}/>
          <p>{image.text}</p>
        </section>
      ))}
    </main>
    )
}

export default Performance