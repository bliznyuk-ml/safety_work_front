import React, { useState } from 'react';
import axios from 'axios';
import styles from './LoginModal.module.css'
import ErrorModal from '../../errorModal/ErrorModal';
import { jwtDecode } from 'jwt-decode';

function LoginModal({closeModal, onLoginSuccess}) {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();

  try{
    const response = await axios.post("http://localhost:8189/demo/auth",{
      username,
      password,
    });
    const token = response.data.token;
    console.log("JWT Token", token);
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    onLoginSuccess(decodedToken);
    
    closeModal();
  } catch (err) {
    setError(err.response?.data?.message || "Помилка аутентифікації");
  }
};

const handleCloseErrorModal = () => {
  setError("");
};


    return (
      <div className={styles.modal}>
      <div className={styles.modal_content}>
        <span className={styles.close} onClick={closeModal}>
          &times;
        </span>
        <h2>Войти</h2>
        <form onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Логин:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>Вхід</button>
        </form>
      </div>
      {error && <ErrorModal message={error} onClose={handleCloseErrorModal} />}
    </div>
    );
}

export default LoginModal;