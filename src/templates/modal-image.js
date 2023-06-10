import * as React from "react";
import { navigate, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Modal from "../components/modal/modal";
import Gallery from "../pages/gallery";

const ImageModal = (props) => {
  return (
    <div>
      <Gallery />
      <Modal showModal={true} closeModal={() => navigate("/gallery")}>
        My ImageId: {props.data.imagesJson.id}
        <GatsbyImage
          image={getImage(props.data.imagesJson.image)}
          alt={props.data.imagesJson.alt}
          // className=""
        />
      </Modal>
    </div>
  );
};

export const query = graphql`
  query ($imageId: String!) {
    imagesJson(id: { eq: $imageId }) {
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
`;

export default ImageModal;