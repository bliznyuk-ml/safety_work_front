import React from "react";
import styles from "./FormButton.module.css"

function FormButton({ children, ...props }) {
  return (
    <button {...props} className={styles.button} {...props}>
      {children}
    </button>
  );
}
export default FormButton;
