import React, { useState, useEffect } from "react";
import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";

const QRScanner = ({ onEmployeeInfoReceived }) => {
  useEffect(() => {
    const config = { fps: 10, qrbox: { width: 200, height: 200 } };
    const Html5QrCodeScanner = new Html5QrcodeScanner("qrCodeContainer");

    const qrCodeSuccess = (decodedText) => {
      // setEnabled(false);

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
          qrScannerStop();
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

    Html5QrCodeScanner.start(
      { facingMode: "environment" },
      config,
      qrCodeSuccess
    );

    const qrScannerStop = () => {
      if (Html5QrCodeScanner && Html5QrCodeScanner.isScanning) {
        Html5QrCodeScanner.stop()
          .then(() => console.log("Scanner stop"))
          .catch(() => console.log("Scanner error"));
      }
    };

    return () => {
      qrScannerStop();
    };
  }, []);

  return (
    <div className="scanner">
      <div id="qrCodeContainer"></div>
    </div>
  );
};

export default QRScanner;
