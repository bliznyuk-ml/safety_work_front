import React, { useState } from 'react';
import styles from './LoginButton.module.css'
import LoginModal from '../loginModal/LoginModal';

function LoginButton({onClick}) {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const openModal = () => setIsModalOpen(true);
    // const closeModal = () => setIsModalOpen(false);

    return (
    //     <div>
    //         <button id='loginButton' className={styles.authButton} onClick={openModal}>
    //     Авторизуватись
    //   </button>
    //   {isModalOpen && <LoginModal closeModal={closeModal} />}
    //     </div>
    <button className={styles.button} onClick={onClick}>
      Авторизуватись
    </button>
    );
}

export default LoginButton;