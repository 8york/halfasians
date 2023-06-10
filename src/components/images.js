import * as React from "react";
import { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import ImageModal from "./modal/modal-image.js";

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
          alt
          text
          image {
            publicURL
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
  const [showModal, setShowModal] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState(null);

  // const showText =()=>{
  //   setSelectedText(selectedText)
  // }
  const showImage = (image) => {
    setShowModal(true);
    setCurrentImageUrl(image.publicURL);
  };

  return (
    <section>
      <h2 className={galleryTwo}>What a Gallery</h2>
      <p className={galleryPtag}>CLICK ON!</p>
      <div className={imagesContainer}>
        {imageData.map((image, index) => {
          return (
            <div
              className={textOverImg}
              key={index}
              onMouseOver={() => setSelectedText(index)}
              onMouseOut={() => setSelectedText(null)}
              onClick={() => showImage(image.image)}
            >
              <GatsbyImage
                image={getImage(image.image)}
                alt={image.alt}
                className={galleryImg}
              />

              {selectedText === index ? (
                <p className={fullText}>{image.text}</p>
              ) : (
                <p className={imgText}>{image.text}</p>
              )}
            </div>
          );
        })}
      </div>
      <ImageModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        src={currentImageUrl}
      />
    </section>
  );
};

export default ImageGallery;
