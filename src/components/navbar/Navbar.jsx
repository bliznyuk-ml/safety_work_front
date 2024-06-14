import React, { useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const content = document.getElementById("content");
    const sticky = navbar.offsetTop;
    const navbarHeight = navbar.offsetHeight + 30;

    const handleScroll = () => {
      if (window.scrollY >= sticky) {
        navbar.classList.add(styles.sticky);
        content.style.paddingTop = `${navbarHeight}px`;
      } else {
        navbar.classList.remove(styles.sticky);
        content.style.paddingTop = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="navbar" className={styles.navbar}>
      <a className={`${styles.a} ${styles.active}`} href="/">
        На головну
      </a>
      <a className={styles.a} href="safety">
        Охорона праці
      </a>
      <a className={styles.a} href="technique">
        Техніка
      </a>
      <a className={styles.a} href="equipment">
        Обладнання
      </a>
      <a className={styles.a} href="tool">
        Інструмент
      </a>
      <a className={styles.a} href="work">
        Роботи
      </a>
      <a className={styles.a} href="violation">
        Порушення
      </a>
      <a className={styles.a} href="pass">
        Пропуск
      </a>
      <a className={styles.a} href="normative">
        Нормативна база
      </a>
      <a className={styles.a} href="notes">
        Нотатки
      </a>
    </div>
  );
};

export default Navbar;
