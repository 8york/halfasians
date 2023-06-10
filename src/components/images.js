import * as React from "react";
import { useState } from "react";
import { navigate, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  imagesContainer,
  galleryImg,
  galleryTwo,
  galleryPtag,
  imgText,
  textOverImg,
  fullText,
} from "./images.module.css";

const ImageGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allImagesJson {
        nodes {
          id
          alt
          text
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
  `);
  const imageData = data.allImagesJson.nodes;

  const [selectedText, setSelectedText] = useState(null);

  const onImageClick = (imageId) => {
    navigate(`/image/${imageId}`);
  };

  return (
    <section>
      <h2 className={galleryTwo}>What a Gallery</h2>
      <p className={galleryPtag}>CLICK ON!</p>
      <div className={imagesContainer}>
        {/* map to render images and texts from images.json */}
        {imageData.map((image, index) => {
          return (
            <div
              className={textOverImg}
              key={index}
              onMouseOver={() => setSelectedText(index)}
              onMouseOut={() => setSelectedText(null)}
              onClick={() => onImageClick(image.id)}
            >
              {/* render images and alt from json file */}
              <GatsbyImage
                image={getImage(image.image)}
                alt={image.alt}
                className={galleryImg}
              />

              {/* texts are scrollable when moseover on the image, if not overflow text is hidden */}
              <p className={selectedText === index ? fullText : imgText}>
                {image.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ImageGallery;
