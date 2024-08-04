import React, { useContext } from "react";
import styles from "./Header.module.css";
import LoginButton from "./loginButton/LoginButton";
import { AuthContext } from "../../context/AuthContext";

function Header() {
const {user, handleLogout} = useContext(AuthContext);

  return (
<header className={styles.header}>
      <h2>SAFETY WORK</h2>
      <p>Scroll down to see the sticky effect.</p>
      {user ? (
        <>
          <p>{user.first_name || 'Имя отсутствует'} {user.last_name || 'Фамилия отсутствует'}</p>
          <button onClick={handleLogout}>Вихід</button>
        </>
      ) : (
        <LoginButton />
      )}
    </header>

  );
}

export default Header;
