import React from "react";

const EmployeeInfoPopup = ({ employeeInfo, onClose }) => {
  return (
    <div className="employee-info-popup">
      <div className="content">
        <h2>Информация о работнике</h2>
        <p>Имя: {employeeInfo.username}</p>
        <p>Почта: {employeeInfo.email}</p>
        {/* Другая информация о работнике */}
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default EmployeeInfoPopup;
