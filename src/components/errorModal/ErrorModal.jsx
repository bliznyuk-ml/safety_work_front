import React from "react";
import classes from "./ErrorModal.module.css";

function ErrorModal({ message, onClose }) {
  return (
    <div className={classes.modal}>
      <div className={classes.modal_content}>
        <span className={classes.close} onClick={onClose}>
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ErrorModal;
