import * as React from "react";
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
