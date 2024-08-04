import React, { useState } from 'react';
import axios from 'axios';
import styles from './LoginModal.module.css'
import ErrorModal from '../../errorModal/ErrorModal';
import { jwtDecode } from 'jwt-decode';
//import { login } from '../../../services/authService';

function LoginModal({closeModal, onLoginSuccess}) {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();

  try{
    const response = await axios.post("http://localhost:8189/login",{
      username,
      password,
    },  {withCredentials:true});

    console.log("status 200");

    if(response.status === 200 && response.data.accessToken){
    const token = response.data.accessToken;
    console.log("JWT Token", token);
    const decodedToken = jwtDecode(token);
    console.log("Decoded token", decodedToken);
    onLoginSuccess(decodedToken);
    //console.log(111);
    // closeModal();
    // console.log(222);
    // await login(username, password);
    // console.log(333);
    } else {
      throw new Error("Помилка аутентифікації");
    }
  } catch (err) {
    setError(err.response?.data?.message || "Помилка аутентифікації 2");
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