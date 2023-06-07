import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  imagesContainer,
  galleryImg,
  galleryTwo,
  galleryPtag,
} from "./images.module.css";

const ImageGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allImagesJson {
        nodes {
          images {
            alt
            image {
              childImageSharp {
                gatsbyImageData(
                  formats: AUTO
                  aspectRatio: 1
                  height: 250
                  transformOptions: { fit: COVER }
                )
              }
            }
          }
        }
      }
    }
  `);
  const imageData = data.allImagesJson.nodes[0];
  return (
    <section>
      <h2 className={galleryTwo}>What a Gallery</h2>
      <p className={galleryPtag}>CLICK ON!</p>
      <div className={imagesContainer}>
        {imageData.images.map((image, index) => {
          return (
            <div key={index}>
              <GatsbyImage
                image={getImage(image.image)}
                alt={image.alt}
                className={galleryImg}
              />
            </div>
          );
        })}
      </div>
     
    </section>
  );
};

export default ImageGallery;
