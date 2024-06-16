import React, { useState } from "react";
import styles from "./Header.module.css";
import LoginButton from "./loginButton/LoginButton";
import LoginModal from "./loginModal/LoginModal";

function Header() {
const [isModalOpen, setIsModalOpen] = useState(false);
const [userInfo, setUserInfo] = useState(null);

const handleLoginSuccess = (decodedToken) => {
  const firstName = decodedToken.first_name || "Ім'я відсутнє";
  console.log(firstName);
  const lastName = decodedToken.last_name || "Прізвище відсутнє";
  console.log(lastName);
  setUserInfo({firstName, lastName});
}
  
  return (
    // <div className={styles.header}>
    //   <div className={styles.headerContent}>
    //   <h2>SAFETY WORK</h2>
    //   <p>Scroll down to see the sticky effect.</p>
    //   </div>
    //   <LoginButton/>
    // </div>

    <div className={styles.header}>
      <h2>SAFETY WORK</h2>
      <p>Scroll down to see the sticky effect.</p>
      {userInfo ? (
        <div className={styles.userInfo}>
          {userInfo.firstName} {userInfo.lastName}
        </div>
      ) : (
        <LoginButton onClick={() => setIsModalOpen(true)} />
      )}
      {isModalOpen && (
        <LoginModal
          closeModal={() => setIsModalOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </div>
  );
}

export default Header;
