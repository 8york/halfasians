import * as React from "react";

const Modal = (props) => {
  return (
    <div
      style={{
        visibility: props.showModal ? "visible" : "hidden",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <div
        style={{
          backgroundColor: "#fefefe",
          margin: "15% auto",
          padding: "20px",
          border: "1px solid #888",
          width: "80%",
        }}
      >
        <button onClick={props.closeModal}>close</button>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
