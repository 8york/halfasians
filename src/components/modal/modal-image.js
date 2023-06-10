import * as React from "react";
// import { graphql, useStaticQuery } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Modal from "./modal.js";

const ImageModal = (props) => {
  return (
    <Modal showModal={props.showModal} closeModal={props.closeModal}>My Image</Modal>
  );
};

export default ImageModal;
