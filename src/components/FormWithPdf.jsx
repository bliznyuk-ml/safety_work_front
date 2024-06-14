import React, { useRef } from "react";
import jsPDF from "jspdf";

// Компонент формы
const FormWithPdf = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    // Создаем новый документ PDF с указанием кодировки
    const doc = new jsPDF("p", "pt", "letter");

    // Добавляем текст с кириллицей
    doc.setFont("times");
    doc.setFontSize(12);
    doc.text(`Имя: ${name}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Сообщение: ${message}`, 10, 30);

    // Сохраняем документ PDF
    doc.save("form.pdf");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input type="text" ref={nameRef} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" ref={emailRef} />
        </label>
        <br />
        <label>
          Сообщение:
          <textarea ref={messageRef} />
        </label>
        <br />
        <button type="submit">Сохранить в PDF</button>
      </form>
    </div>
  );
};

export default FormWithPdf;
