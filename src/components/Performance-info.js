import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
        <section>
      <h2>Performance</h2>
      <p>{performanceData.Performance}</p>

      {performanceData.images.map((image, index) => (
        <div key={index}>
          <GatsbyImage 
            image={getImage(image.src)} 
            alt={image.alt}/>
          <p>{image.text}</p>
        </div>
      ))}
    </section>
    )
}

export default Performance