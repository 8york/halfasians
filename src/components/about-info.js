import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


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
                        width: 400
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
    <section>
      <h2>About</h2>
      <p>{aboutData.About}</p>

      {aboutData.images.map((image, index) => (
        <section key={index}>
          <GatsbyImage image={getImage(image.src)} />
          <p>{image.text}</p>
        </section>
      ))}
    </section>
  );
};

export default AboutInfo;
