import React, { useContext, useState } from 'react';
import styles from './LoginButton.module.css'
import LoginModal from '../loginModal/LoginModal';
import { AuthContext } from '../../../context/AuthContext';

const LoginButton = () => {
  const { user, handleLogin, handleLogout } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
      setShowModal(true);
  };

  const handleCloseModal = () => {
      setShowModal(false);
  };

//   const handleLogoutClick = () => {
//       logout();
//   };

  const handleLoginSuccess = (decodedToken) => {
    setShowModal(false);
    handleLogin(decodedToken);
    //console.log("Hello Auth");
};

  return (
      <div>
          {user ? (
              <button onClick={handleLogout} className={styles.button}>Вихід</button>
          ) : (
              <button onClick={handleLoginClick} className={styles.button}>Авторизуватися</button>
          )}
          {showModal && (
          <LoginModal closeModal={handleCloseModal} onLoginSuccess={handleLoginSuccess}/>
)}
      </div>
  );
};

export default LoginButton;