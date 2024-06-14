import React, { useState } from "react";
import FormField from "./FormField";
import FormButton from "./FormButton";
import axios from "axios";
import ErrorModal from "./errorModal/ErrorModal";

function RegistrationForm(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    address: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; //ввод данных из формы в состояние formData

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8189/demo/registration", formData);
      console.log("Form data saved successfully");
      setFormData({
        username: "",
        password: "",
        confirmPassword: "",
        companyName: "",
        address: "",
        email: "",
      });
      setErrorMessage(null); // Очистить сообщение об ошибке при успешной отправке
    } catch (error) {
      console.log("Error");
      setErrorMessage(error.response.data.message);
      // Установить сообщение об ошибке
    }
  };

  const closeModal = () => {
    setErrorMessage(null);
    // Закрыть модальное окно
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormField
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <FormField
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <FormField
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <FormField
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
        <FormField
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <FormField
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormButton onClick={handleSubmit} />
      </form>
      {errorMessage && (
        <ErrorModal message={errorMessage} onClose={closeModal} />
      )}
      {/* Отображение модального окна */}
    </div>
  );
}

export default RegistrationForm;
