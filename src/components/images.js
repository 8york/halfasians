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
          images {
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
    }
  `);
  const imageData = data.allImagesJson.nodes[0];

  const [selectedImg, setSelectedImg] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  return (
    <section>
      <h2 className={galleryTwo}>What a Gallery</h2>
      <p className={galleryPtag}>CLICK ON!</p>
      <div className={imagesContainer}>
        {imageData.images.map((image, index) => {
          return (
            <div
              className={textOverImg}
              key={index}
              onMouseOver={() => setSelectedImg(index)}
              onMouseOut={() => setSelectedImg(null)}
              onClick={toggleModal}
            >
              <GatsbyImage
                image={getImage(image.image)}
                alt={image.alt}
                className={galleryImg}
              />
              <p className={imgText}>{image.text}</p>
              {selectedImg === index ? (
                <p className={fullText}>{image.text}</p>
              ) : (
                <p className={imgText}>{image.text}</p>
              )}
            </div>
          );
        })}
      </div>
      <ImageModal showModal={showModal} closeModal={toggleModal}/>
    </section>
  );
};

export default ImageGallery;
