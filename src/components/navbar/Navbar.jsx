import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const content = document.getElementById("content");
    const sticky = navbar.offsetTop;
    

    const handleScroll = () => {
      const navbarHeight = navbar.offsetHeight + 30;
      if (window.scrollY >= sticky) {
        navbar.classList.add(styles.sticky);
        content.style.paddingTop = `${navbarHeight}px`;
      } else {
        navbar.classList.remove(styles.sticky);
        content.style.paddingTop = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    
    <div id="navbar" className={styles.navbar}>
     <NavLink className={({isActive}) => isActive ? `${styles.a} ${styles.active}` : styles.a} to={"/"}>На головну</NavLink>
     <NavLink className={({isActive}) => isActive ? `${styles.a} ${styles.active}` : styles.a} to={"safety"}>Охорона праці</NavLink>
     <NavLink className={({isActive}) => isActive ? `${styles.a} ${styles.active}` : styles.a} to={"technique"}>Техніка</NavLink>
     <NavLink className={({isActive}) => isActive ? `${styles.a} ${styles.active}` : styles.a} to={"equipment"}>Обладнання</NavLink>
     <NavLink className={({isActive}) => isActive ? `${styles.a} ${styles.active}` : styles.a} to={"tool"}>Інструмент</NavLink>
     <NavLink className={({isActive}) => isActive ? `${styles.a} ${styles.active}` : styles.a} to={"work"}>Роботи</NavLink>
     <NavLink className={({isActive}) => isActive ? `${styles.a} ${styles.active}` : styles.a} to={"violation"}>Порушення</NavLink>
     <NavLink className={({isActive}) => isActive ? `${styles.a} ${styles.active}` : styles.a} to={"pass"}>Пропуск</NavLink>
     <NavLink className={({isActive}) => isActive ? `${styles.a} ${styles.active}` : styles.a} to={"normative"}>Нормативна база</NavLink>
     <NavLink className={({isActive}) => isActive ? `${styles.a} ${styles.active}` : styles.a} to={"notes"}>Нотатки</NavLink>
    </div>
  );
};

export default Navbar;
