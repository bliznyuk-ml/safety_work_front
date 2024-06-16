import React, { useState } from "react";
import axios from "axios";
import FormField from "./UI/form/FormField";
import DateInput from "./DateInput";
import { validateFormEmployee } from "../functions/validations";
import { cheсk } from "../functions/validations";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    birthday: "",
    instruction: "",
  });
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(""); // Импорт setError
  //  const [isSubmitted, setIsSubmitted] = useState(false); // Состояние для отслеживания нажатия кнопки submit

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; //ввод данных из формы в состояние formData

  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Проверка на заполненность формы
    const fields = [
      { label: "Name", value: formData.name },
      { label: "Address", value: formData.address },
      { label: "Birthday", value: formData.birthday },
      { label: "Instruction", value: formData.instruction },
    ];

    cheсk();

    const errorMessage = validateFormEmployee(fields, formData);
    //validateForm(fields);

    if (errorMessage) {
      //setError(errorMessage);
      alert(errorMessage);
      return;
    }

    // Проверка на заполненность формы только после нажатия кнопки submit при использовании кастомного окна ошибок

    // if (!isSubmitted) {
    //   setIsSubmitted(true);
    //   console.log("is submited true");
    //   return;
    // }

    // Отправка данных на сервер
    try {
      await axios.post("http://localhost:8189/registration", formData);
      console.log("Form data saved successfully");
      //сброс значений полей формы
      setFormData({ name: "", address: "", birthday: "", instruction: "" });
      setError("");
      //setIsSubmitted(false); // Сброс состояния после успешной отправки данных
    } catch (error) {
      console.log("Error saving form data: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField name="name" value={formData.name} onChange={handleChange} />
      <FormField
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <DateInput
        name={"birthday"}
        value={formData.birthday}
        onCange={handleChange}
      />
      <DateInput
        name={"instruction"}
        value={formData.instruction}
        onCange={handleChange}
      />
      <FormButton>Зберігти</FormButton>
    </form>
  );
};

export default Form;
