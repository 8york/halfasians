import * as React from "react";
// import { graphql, useStaticQuery } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Modal from "./modal.js";
import { Lightbox } from "react-modal-image";

const ImageModal = (props) => {
  return (
    <Lightbox
      medium={props.src}
      // large={props.src}
      // alt="Hello World!"
      onClose={props.closeModal}
    />
  );
};

export default ImageModal;
