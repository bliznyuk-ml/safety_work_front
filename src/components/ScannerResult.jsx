import React, { useState } from "react";
import QRScanner from "./QRScanner";
import EmployeeInfoPopup from "./EmployeeInfoPopup";

const ScannerResult = () => {
  // Здесь будет состояние, отвечающее за отображение сканера
  const [scannerVisible, setScannerVisible] = useState(false);
  const [employeeInfo, setEmployeeInfo] = useState(null);

  // Функция для открытия сканера
  const openScanner = () => {
    setScannerVisible(true);
    //openScanner(true);
  };

  // Функция для закрытия сканера
  const closeScanner = () => {
    setScannerVisible(false);
    //openScanner(false);
  };

  const handleEmployeeInfo = (info) => {
    setEmployeeInfo(info);
    // Закрываем сканер после успешного сканирования
    closeScanner();
    console.log("отработал сканер и закрылся");
  };

  const closeEmployeeInfoPopup = () => {
    setEmployeeInfo(null);
  };

  return (
    <div>
      {/* Кнопка для открытия сканера */}
      <button onClick={openScanner}>Открыть сканер</button>
      {/* Кнопка для закрытия сканера */}
      <button onClick={closeScanner}>Закрыть</button>

      {/* Компонент сканера как всплывающее окно */}
      {scannerVisible && (
        <div>
          {/* Здесь будет содержимое вашего сканера */}
          <QRScanner onEmployeeInfoReceived={handleEmployeeInfo} />
        </div>
      )}

      <div>
        {employeeInfo && (
          <EmployeeInfoPopup
            employeeInfo={employeeInfo}
            onClose={closeEmployeeInfoPopup}
          />
        )}
      </div>
    </div>
  );
};

export default ScannerResult;
