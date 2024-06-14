import React from "react";
import ErrorMessage from "./ErrorMessage";

const FormValidator = ({ fields }) => {
  const validateForm = () => {
    // Проверка заполнения каждого поля
    for (const field of fields) {
      if (!field.value.trim()) {
        return `Поле "${field.label}" не заполнено`;
      }
    }
    return ""; // Форма валидна
  };

  const errorMessage = validateForm();

  return <>{errorMessage && <ErrorMessage message={errorMessage} />}</>;
};

export default FormValidator;
