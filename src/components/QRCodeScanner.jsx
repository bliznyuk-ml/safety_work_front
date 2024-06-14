import React, { useState, useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

const QRCodeScanner = ({ onEmployeeInfoReceived }) => {
  const [isEnabled, setEnabled] = useState(false);
  const [qrMessage, setQrMessage] = useState("");
  const [employeeInfo, setEmployeeInfo] = useState(null);

  useEffect(() => {
    const config = { fps: 10, qrbox: { width: 200, height: 200 } };
    const Html5QrCode = new Html5Qrcode("qrCodeContainer");

    const qrScannerStop = () => {
      if (Html5QrCode && Html5QrCode.isScanning) {
        Html5QrCode.stop()
          .then(() => console.log("Scanner stop"))
          .catch(() => console.log("Scanner error"));
      }
    };

    const qrCodeSuccess = (decodedText) => {
      setQrMessage(decodedText);
      setEnabled(false);

      // Отправка запроса на сервер с ID работника
      fetch(`http://localhost:8189/demo/getemployee/${decodedText}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then((data) => {
          // Обработка полученных данных
          onEmployeeInfoReceived(data);
          console.log(data);
        })
        .catch((error) => {
          console.error(
            "There was a problem with your fetch operation:",
            error
          );
        });
    };

    if (isEnabled) {
      Html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccess);
      // setQrMessage("");
    } else {
      qrScannerStop();
    }

    return () => {
      qrScannerStop();
    };
  }, [isEnabled]);

  // const closeEmployeeInfoPopup = () => {
  //   setEmployeeInfo(null);
  // };

  return (
    <div className="scanner">
      <div id="qrCodeContainer"></div>

      <button className="start-button" onClick={() => setEnabled(!isEnabled)}>
        {isEnabled ? "On" : "Off"}
      </button>
    </div>
  );
};

export default QRCodeScanner;
