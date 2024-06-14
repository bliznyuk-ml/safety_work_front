import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h2>Scroll Down</h2>
      <p>Scroll down to see the sticky effect.</p>
    </div>
  );
}

export default Header;
